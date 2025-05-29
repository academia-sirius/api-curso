version: '3.9'
services:
  mysql:
    image: mysql:latest
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
    restart: on-failure:5
    volumes:
      - /volume1/docker/mysql:/var/lib/mysql:rw
    environment:
      - MYSQL_ROOT_PASSWORD=server@777         # Senha do root
      - MYSQL_DATABASE=meubanco                # (opcional) nome do banco de dados padrão
      - MYSQL_USER=meuusuario                  # (opcional) nome do usuário
      - MYSQL_PASSWORD=minhasenha              # (opcional) senha do usuário
      - TZ=Africa/Luanda
    ports:
      - 3306:3306
    container_name: MySQL-Local
    networks:
      - mysqlnet

  phpmyadmin:
    image: phpmyadmin:latest
    healthcheck:
      test: curl -f http://localhost:80/ || exit 1
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
