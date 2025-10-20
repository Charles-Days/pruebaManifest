# 🚀 Guía de Despliegue - GitHub Pages

## Pasos para Desplegar tu PWA

### 1. Preparar el Repositorio
```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "Initial commit: PWA Carlos Benjamin"
```

### 2. Crear Repositorio en GitHub
1. Ve a [GitHub.com](https://github.com)
2. Haz clic en "New repository"
3. Nombre: `pwa-carlos-benjamin` (o el que prefieras)
4. Descripción: "PWA moderna con diseño responsivo"
5. **IMPORTANTE**: Marca como **Público** (requerido para GitHub Pages gratuito)
6. No inicialices con README (ya tienes uno)

### 3. Conectar Repositorio Local
```bash
# Agregar remote origin
git remote add origin https://github.com/TUUSUARIO/pwa-carlos-benjamin.git

# Subir código
git branch -M main
git push -u origin main
```

### 4. Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (pestaña superior)
3. Desplázate hasta **Pages** (menú lateral izquierdo)
4. En **Source**, selecciona:
   - **Deploy from a branch**
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Haz clic en **Save**

### 5. Verificar Despliegue
- Tu PWA estará disponible en: `https://TUUSUARIO.github.io/pwa-carlos-benjamin`
- GitHub Pages puede tardar 5-10 minutos en desplegar
- Verifica que todos los archivos estén accesibles

## 📱 Probar la PWA

### En Android (Chrome)
1. Abre la URL en Chrome
2. Debería aparecer el prompt "Agregar a la pantalla de inicio"
3. Toca "Agregar" para instalar

### En iOS (Safari)
1. Abre la URL en Safari
2. Toca el botón de compartir (cuadrado con flecha)
3. Selecciona "Agregar a pantalla de inicio"
4. Confirma la instalación

## 🔧 Solución de Problemas

### Si no aparece el prompt de instalación:
1. Verifica que el manifest.json esté accesible
2. Comprueba que el Service Worker esté registrado
3. Asegúrate de que estés en HTTPS (GitHub Pages lo proporciona)

### Si los iconos no se ven:
1. Verifica que `/public/192.png` esté en el repositorio
2. Comprueba las rutas en el manifest.json
3. Asegúrate de que el archivo `.nojekyll` esté presente

### Si no funciona offline:
1. Verifica que el Service Worker esté registrado
2. Comprueba la consola del navegador por errores
3. Asegúrate de que todos los archivos estén en el cache

## 📋 Checklist Final

- ✅ Repositorio público en GitHub
- ✅ GitHub Pages activado
- ✅ Todos los archivos subidos
- ✅ PWA instalable en móviles
- ✅ Funciona offline
- ✅ Iconos visibles
- ✅ Meta tags para iOS configurados

## 🎯 URLs Importantes

- **Repositorio**: `https://github.com/TUUSUARIO/pwa-carlos-benjamin`
- **PWA Live**: `https://TUUSUARIO.github.io/pwa-carlos-benjamin`
- **Manifest**: `https://TUUSUARIO.github.io/pwa-carlos-benjamin/manifest.json`

¡Tu PWA está lista para ser compartida! 🎉
