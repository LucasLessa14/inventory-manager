FROM node:13.7-stretch-slim

WORKDIR /app

COPY api/package*.json ./

RUN npm install

COPY api ./

EXPOSE 8086

CMD ["node", "index.js"]