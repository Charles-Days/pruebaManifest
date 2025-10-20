#!/bin/bash

# Script para crear todos los iconos necesarios para la PWA
# usando sips (herramienta nativa de macOS)

echo "🎨 Creando iconos para PWA..."

# Verificar que existe el icono base
if [ ! -f "public/192.png" ]; then
    echo "❌ Error: No se encontró public/192.png"
    exit 1
fi

# Crear directorio si no existe
mkdir -p public

# Tamaños estándar para PWA
sizes=(16 32 48 72 96 144 256 384 512 1024)

for size in "${sizes[@]}"; do
    if [ "$size" = "192" ]; then
        echo "✅ 192x192 ya existe"
        continue
    fi
    
    echo "📐 Creando ${size}x${size}..."
    sips -z $size $size public/192.png --out public/${size}.png > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        echo "✅ Creado: public/${size}.png"
    else
        echo "❌ Error creando ${size}x${size}"
    fi
done

# Crear también el icono de 512x512 específicamente
if [ ! -f "public/512.png" ]; then
    echo "📐 Creando 512x512 específico..."
    sips -z 512 512 public/192.png --out public/512.png > /dev/null 2>&1
    echo "✅ Creado: public/512.png"
fi

echo "✅ ¡Todos los iconos creados exitosamente!"
echo "📁 Archivos creados:"
ls -la public/*.png
