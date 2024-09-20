FROM node:18

WORKDIR /app
RUN npm install -g pnpm
COPY package*.json ./
COPY . .
RUN pnpm i
EXPOSE 3000
CMD pnpm run dev