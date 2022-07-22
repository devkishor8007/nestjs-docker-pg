FROM node:15

WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./

# install app dependencies
RUN npm install

COPY . .

RUN npm run build

# RUN npx prisma generate

# FROM node:15

# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/prisma ./prisma

EXPOSE 3600
CMD ["node", "start:dev" ]