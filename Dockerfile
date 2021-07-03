# Stage 1 - the build process
FROM node:12 as BUILD_IMAGE

WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci
RUN npm run build
RUN npm prune --production

# Stage 2 - Production Environment
FROM node:alpine

WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public

CMD ["npm", "start"]