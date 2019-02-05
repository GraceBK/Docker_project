# Dockerfile partie BACK_END


FROM node:8

# Creation du repertoire de travail de l'app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copier les fichiers package*.json vers le repertoire de travail
COPY package.json .

# On fait un clean ensuite on installe les dependance
RUN npm cache verify
RUN npm install

# On copie les sources de l'application
COPY . .

# Le port vue de l'exterieur
EXPOSE 4200
CMD ["npm", "run", "start"]
