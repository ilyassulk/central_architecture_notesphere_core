# Используем официальный образ MongoDB в качестве базового
FROM mongo:latest

# Копируем скрипт инициализации в специальную директорию
COPY mongo-init.js /docker-entrypoint-initdb.d/
