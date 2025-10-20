const APP_SHELL_CACHE = 'app-shell-v2';
const DYNAMIC_CACHE = 'dynamic-cache-v1';

const APP_SHELL_ASSETS = [
  '/',
  '/index.html',
  '/calendar.html',
  '/form.html',
  '/about.html',
  '/style.css',
  '/register.js',
  '/manifest.json',
  // Iconos principales
  '/public/192.png',
  '/public/512.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap',
];

// Recursos dinámicos (Cache First, Network Fallback)
const DYNAMIC_ASSET_URLS = [
  // FullCalendar (calendar.html)
  'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/index.global.min.js',
  'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/main.min.css',
  // jQuery + Select2 (form.html)
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css',
];

self.addEventListener('install', (event) => {
  // Precache del App Shell
  event.waitUntil(
    caches
      .open(APP_SHELL_CACHE)
      .then((cache) => cache.addAll(APP_SHELL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  // Limpieza de cachés obsoletos
  const allowlist = [APP_SHELL_CACHE, DYNAMIC_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.map((k) => (!allowlist.includes(k) ? caches.delete(k) : null)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  const normalizedPath = sameOrigin ? url.pathname : url.href;

  if (APP_SHELL_ASSETS.includes(normalizedPath) || (sameOrigin && APP_SHELL_ASSETS.includes(url.pathname))) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        // Si no está en caché, y es navegación, devolver index como fallback básico
        if (request.mode === 'navigate') return caches.match('/index.html');
        return cached; // cumple con "siempre responder con caches.match" (puede ser undefined)
      })
    );
    return;
  }

  // Estrategia 2: Cache First, Network Fallback para assets dinámicos
  if (DYNAMIC_ASSET_URLS.includes(url.href)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached; // Cache First
        return fetch(request)
          .then((resp) => {
            const respClone = resp.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, respClone));
            return resp;
          })
          .catch(() => caches.match('/index.html'));
      })
    );
    return;
  }

});