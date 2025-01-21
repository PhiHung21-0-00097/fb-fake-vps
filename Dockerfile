# Sử dụng
FROM node:18-alpine

# Thiết lập
WORKDIR /app

# Copy file
COPY package*.json ./

# Cài đặt
RUN npm install

# Copy
COPY . .

# Build
RUN npm run build

# Chạy
CMD ["npm","run","start"]

# Mở
EXPOSE 3000