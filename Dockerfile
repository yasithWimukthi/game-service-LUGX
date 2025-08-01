FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
RUN npx prisma generate
#RUN npx prisma db push

CMD ["node", "dist/index.js"]
