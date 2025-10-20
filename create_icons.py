#!/usr/bin/env python3
"""
Script para crear todos los iconos necesarios para la PWA
desde el icono base de 192x192
"""

from PIL import Image
import os

def create_icon_sizes():
    # Tamaños estándar para PWA
    sizes = [
        (16, 16),    # Favicon pequeño
        (32, 32),    # Favicon
        (48, 48),    # Android
        (72, 72),    # Android
        (96, 96),    # Android
        (144, 144),  # Android
        (192, 192),  # Ya existe
        (256, 256),  # Android
        (384, 384),  # Android
        (512, 512),  # Android/Web
        (1024, 1024) # iOS App Store
    ]
    
    # Ruta del icono base
    base_icon = "public/192.png"
    
    if not os.path.exists(base_icon):
        print(f"❌ Error: No se encontró el icono base {base_icon}")
        return
    
    try:
        # Abrir el icono base
        with Image.open(base_icon) as img:
            print(f"✅ Icono base cargado: {img.size}")
            
            for width, height in sizes:
                # Crear el directorio si no existe
                os.makedirs("public", exist_ok=True)
                
                # Redimensionar manteniendo calidad
                resized = img.resize((width, height), Image.Resampling.LANCZOS)
                
                # Guardar el icono
                output_path = f"public/{width}x{height}.png"
                resized.save(output_path, "PNG", optimize=True)
                print(f"✅ Creado: {output_path}")
                
    except Exception as e:
        print(f"❌ Error procesando iconos: {e}")

if __name__ == "__main__":
    print("🎨 Creando iconos para PWA...")
    create_icon_sizes()
    print("✅ ¡Todos los iconos creados exitosamente!")
