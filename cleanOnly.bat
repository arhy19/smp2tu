@echo off
echo ================================
echo 🔥 CLEANING DEVELOPMENT CACHE 🔥
echo ================================

echo.
echo 🚮 Removing node_modules...
rmdir /s /q node_modules

echo 🚮 Removing package-lock.json...
del /q package-lock.json

echo ✅ Cleanup complete!
echo 💡 Run "npm install" to reinstall dependencies.
pause
