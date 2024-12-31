FROM node:18

WORKDIR /app
RUN npm install -g pnpm
COPY package*.json ./
RUN pnpm i
COPY . .
EXPOSE 3000
CMD pnpm run dev