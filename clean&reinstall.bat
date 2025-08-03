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
echo 🔄 Reinstalling dependencies via npm...
npm install

echo 🎉 All done! Project is fresh and ready.
pause
