# RUBIKODOCKER
pequeño servidor que escucha peticiones que se encuentra contenido en docker 


contiene el archivo app.js con el servidor que recibo la peticion get en el puerto que se le asigna en las variables de entorno

un archivo dockerfile para ejecutar en un con el comando docker run -p PORT:PORT nombre-imagen

un archivo docker compose con dos servicios uno llamado web (donde le paso la variable greetings) y otro llamado curl 


Para iniciar el archivo en docker compose el comando en la terminar a ejecutar es docker-compose up