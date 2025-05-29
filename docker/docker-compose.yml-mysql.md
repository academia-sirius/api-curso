version: '3.9'
services:
  mysql:
    image: mysql:9.3.0
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
    restart: on-failure:5
    volumes:
      - mysql_data:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=server@777
      - MYSQL_DATABASE=appdb
      - MYSQL_USER=appuser
      - MYSQL_PASSWORD=secret@777
      - TZ=Africa/Luanda
    ports:
      - 3306:3306
    container_name: MySQL-Local
    networks:
      - mysqlnet

  phpmyadmin:
    image: phpmyadmin:5.2
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/"]
    restart: on-failure:5
    environment:
      - PMA_HOST=mysql
      - PMA_PORT=3306
      - MYSQL_ROOT_PASSWORD=server@777
    volumes:
      - /volume1/docker/mysql/phpmyadmin/uploads.ini:/usr/local/etc/php/conf.d/php-phpmyadmin.ini:rw
    ports:
      - 2500:80
    container_name: phpMyAdmin-Local
    networks:
      - mysqlnet

networks:
  mysqlnet:
    driver: bridge

volumes:
  mysql_data: