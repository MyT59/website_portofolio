# Gunakan image Node.js untuk membangun aplikasi
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Salin file dependency
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Salin semua file proyek ke container
COPY . .

# Build aplikasi React
RUN npm run build

# Gunakan image Nginx untuk menjalankan build React
FROM nginx:stable-alpine

# Hapus default config nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy hasil build React ke folder nginx
COPY --from=build /app/build /usr/share/nginx/html

# Salin file konfigurasi nginx jika ingin meng-custom
# (Optional, bisa dihapus jika tidak ada file default.conf)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
