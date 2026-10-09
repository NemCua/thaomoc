# Hướng dẫn cài đặt thaomoc

Website tĩnh thuần HTML/CSS/JavaScript. Không cần Node.js, npm, database hay thư viện frontend.

## Chạy bằng Docker Compose

```bash
git clone https://github.com/NemCua/thaomoc.git
cd thaomoc
docker compose up -d --build
```

Mở `http://IP-SERVER:8080`.

Kiểm tra:

```bash
docker compose ps
docker compose logs -f web
```

Cập nhật:

```bash
git pull
docker compose up -d --build
```

Dừng website:

```bash
docker compose down
```

Nếu port `8080` đã được sử dụng, sửa `8080:80` trong `docker-compose.yml`, ví dụ `8090:80`.

## Chạy không cần Docker

Copy nội dung thư mục `dist/` vào thư mục public của Nginx, Apache, Caddy hoặc hosting tĩnh.

```bash
sudo cp -r dist/* /var/www/html/
sudo nginx -t
sudo systemctl reload nginx
```

## Cấu trúc

```text
thaomoc/
├── dist/index.html
├── Dockerfile
├── docker-compose.yml
└── INSTALL.md
```

Website không dùng PostgreSQL và không cần biến môi trường.
