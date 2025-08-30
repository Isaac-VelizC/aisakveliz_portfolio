#!/usr/bin/env bash
set -e  # para que falle si hay algún error

echo "=== Instalando dependencias del backend ==="
pip install -r requirements.txt

echo "=== Construyendo frontend ==="
cd frontend
npm ci
npm run build
cd ..

echo "=== Migraciones y archivos estáticos ==="
python manage.py migrate
python manage.py collectstatic --no-input

echo "=== Build completo ✅ ==="
