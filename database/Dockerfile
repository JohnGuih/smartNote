FROM mongo:7.0


ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=smartNote123
ENV MONGO_INITDB_DATABASE=SmartNote

ADD setup.js /docker-entrypoint-initdb.d/

EXPOSE 27017