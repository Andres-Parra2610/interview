# Prueba Técnica - Autenticación con JWT

Este proyecto es una prueba técnica que implementa un sistema de autenticación basado en JWT. Consiste en un backend desarrollado en NestJS y un frontend en React, conectados a una base de datos MySQL. Además de la verificación y generación de tokens, se agregó la funcionalidad de borrado del token.

## Requisitos

Para ejecutar este proyecto, es necesario contar con:

- [Docker](https://www.docker.com/get-started) instalado y en ejecución en tu máquina.

## Instrucciones para iniciar el proyecto con Docker

1. Construir y levantar los contenedores:
   ```sh
   docker compose up --build
   ```
   Esto descargará las imágenes necesarias y levantará los servicios definidos en el `docker-compose.yml`.

## Puertos

Los servicios se ejecutan en los siguientes puertos:

- **Backend (NestJS):** `http://localhost:3000`
- **Frontend (React):** `http://localhost:8080`
- **Base de datos (MySQL):** `localhost:3306`

## Consideraciones

- Los `Dockerfile` creados son para **desarrollo** y no deben usarse en producción sin ajustes adicionales.
- Las variables de entorno (`MYSQL_ROOT_PASSWORD`, `MYSQL_DATABASE`, etc.) han sido **pusheadas directamente en GitHub**, pero esto **no es una práctica segura**. Para un entorno real, estas credenciales deberían manejarse con un archivo `.env` que no se suba al repositorio.
- El volumen asignado a MySQL (`./jwt-be/data:/var/lib/mysql`) permite persistencia de datos entre reinicios del contenedor.

## Comandos útiles

Si deseas detener los contenedores sin eliminar los volúmenes:

```sh
docker compose down
```

Si deseas eliminar los volúmenes junto con los contenedores:

```sh
docker compose down -v
```
