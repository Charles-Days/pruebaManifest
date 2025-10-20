# PWA Carlos Benjamin

Una Progressive Web Application (PWA) moderna con diseño responsivo y funcionalidades avanzadas.

## 🚀 Características

- **PWA Completa**: Service Worker, Manifest, y meta tags para iOS
- **Diseño Moderno**: Interfaz con glassmorphism y gradientes
- **Responsive**: Optimizada para móviles, tablets y desktop
- **iOS Compatible**: Meta tags específicos para Safari y iOS
- **GitHub Pages Ready**: Configurada para despliegue automático

## 📱 Instalación en Dispositivos

### Android
1. Abre la PWA en Chrome
2. Aparecerá automáticamente el prompt "Agregar a la pantalla de inicio"
3. Toca "Agregar" para instalar

### iOS (iPhone/iPad)
1. Abre Safari
2. Toca el botón de compartir (cuadrado con flecha)
3. Selecciona "Agregar a pantalla de inicio"
4. Confirma la instalación

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables, Grid, Flexbox, Animaciones
- **JavaScript**: Service Worker, PWA features
- **Librerías**:
  - FullCalendar (Calendario)
  - Select2 (Formularios)
  - jQuery (Dependencia de Select2)

## 📁 Estructura del Proyecto

```
/
├── index.html          # Página principal
├── about.html          # Página acerca de
├── calendar.html       # Calendario interactivo
├── form.html           # Formulario con Select2
├── style.css           # Estilos principales
├── manifest.json       # Manifest de la PWA
├── sw.js              # Service Worker
├── register.js        # Registro del Service Worker
├── public/
│   └── 192.png        # Icono de la aplicación
└── README.md          # Este archivo
```

## 🎨 Personalización

### Colores
Los colores se pueden modificar en las variables CSS en `style.css`:

```css
:root {
  --accent: #ff6b6b;        /* Color principal */
  --success: #4ecdc4;       /* Color de éxito */
  --bg: linear-gradient(...); /* Fondo */
}
```

### Iconos
Para cambiar el icono:
1. Reemplaza `/public/192.png` con tu icono
2. Asegúrate de que sea 192x192px o 512x512px
3. Actualiza las referencias en `manifest.json`

## 🚀 Despliegue en GitHub Pages

1. **Sube el proyecto a GitHub**
2. **Ve a Settings > Pages**
3. **Selecciona "Deploy from a branch"**
4. **Elige "main" branch y "/ (root)"**
5. **Guarda los cambios**

Tu PWA estará disponible en: `https://tuusuario.github.io/nombre-del-repo`

## 📋 Checklist PWA

- ✅ Manifest.json configurado
- ✅ Service Worker implementado
- ✅ Meta tags para iOS
- ✅ Iconos optimizados
- ✅ HTTPS (GitHub Pages)
- ✅ Responsive design
- ✅ Instalable en móviles

## 👨‍💻 Autor

**Carlos Benjamin**  
Matrícula: 20223tn048  
Universidad: Tecnológica Emiliano Zapata

## 📄 Licencia

Este proyecto es de uso educativo y académico.
