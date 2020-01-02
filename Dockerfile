FROM mysql:5.7
ADD tennis.sql /docker-entrypoint-initdb.d/