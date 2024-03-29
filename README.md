# team7tieuluan

Trần Minh Chiến 2104110096 K15DCPM02
Nguyễn Trung Hiếu K15DCPM02 2104110088
Lê Thị Phương Chung K15DCPM02 2104110075
Trương Xuân Việt 2104110086 K15dcpm02

# Mô tả

Hệ thống Website bán điện thoại

-   Hệ thống Website sẽ có 3 người dùng: Admin, Customer, Guest

1. Admin

-   Quản lý người dùng: Xem danh sách khách hàng đã đăng ký tài khoản
-   Quản lý sản phẩm: Thêm, sửa, xóa các sản phẩm trên Website
-   Quản lý đơn hàng: Xem danh sách các đơn hàng, chi tiết đơn hàng

2. Guest

-   Xem danh sách sản phẩm và chi tiết của từng sản phẩm

3. Customer

-   Đăng ký, đăng nhập tài khoản
-   Xem danh sách sản phẩm
-   Xem chi tiết sản phẩm
-   Thêm sản phẩm vào giỏ hàng
-   Tăng, giảm số lượng hàng hóa trong giỏ hàng
-   Xóa sản phẩm trong giỏ hàng
-   Quản lý đơn hàng của mình

# Database MySQL

1. Tạo Database và bảng cùng các mối liên hệ

create database phone_data;
use phone_data;
CREATE TABLE users (
id_user INT PRIMARY KEY AUTO_INCREMENT,
username NVARCHAR(255) NOT NULL,
email NVARCHAR(255) NOT NULL,
password NVARCHAR(255) NOT NULL
);

CREATE TABLE tokens (
id_token INT PRIMARY KEY AUTO_INCREMENT,
id_user INT,
token NVARCHAR(255),
FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE products(
id_product INT PRIMARY KEY AUTO_INCREMENT,
nameProduct NVARCHAR(255) NOT NULL,
price DECIMAL(10, 2) NOT NULL,
stock_quantity INT NOT NULL
);

CREATE TABLE descriptions (
id_product INT PRIMARY KEY,
descrip_product LONGTEXT NOT NULL,
FOREIGN KEY (id_product) REFERENCES products(id_product)
);

CREATE TABLE carts (
id_cart INT PRIMARY KEY AUTO_INCREMENT,
id_user INT,
FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE cart_items (
id_cart_item INT PRIMARY KEY AUTO_INCREMENT,
id_cart INT,
id_product INT,
quantity INT NOT NULL,
FOREIGN KEY (id_cart) REFERENCES carts(id_cart),
FOREIGN KEY (id_product) REFERENCES products(id_product)
);

CREATE TABLE pictures (
id_picture INT PRIMARY KEY AUTO_INCREMENT,
id_product INT,
url_picture LONGBLOB NOT NULL,
FOREIGN KEY (id_product) REFERENCES products(id_product)
);

CREATE TABLE orders(
id_order INT PRIMARY KEY AUTO_INCREMENT,
id_user INT,
total_amount DECIMAL(10, 2) NOT NULL,
FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE order_details(
id_order_detail INT PRIMARY KEY AUTO_INCREMENT,
id_order INT,
id_product INT,
quantity INT NOT NULL,
price DECIMAL(10, 2) not null,
FOREIGN KEY (id_order) REFERENCES orders(id_order),
FOREIGN KEY (id_product) REFERENCES products(id_product)
);

2. Thêm dữ liệu cho Database
   use phone_data;
   INSERT INTO users (username, email, password) VALUES
   ('viet', 'txviet2003@gmail.com', 'password123'),
   ('chien', 'tranminhchien15052003@gmail.com ', 'password123'),
   ('chung', 'lechung021203@gmail.com', 'password123'),
   ('hieu', 'hieunt1103@gmail.com', 'password123');

INSERT INTO tokens (id_user, token) VALUES
(1, 'token1'),
(2, 'token2'),
(3, 'token3');

-- Thêm dữ liệu vào bảng products
INSERT INTO products (nameProduct, price, stock_quantity)
VALUES
('iPhone 13', 18700000, 100),
('iPhone 13 Mini', 16300000, 50),
('iPhone 13 Pro', 27600000, 75),
('iPhone 13 Pro Max', 30200000, 60),
('iPhone 14', 20000000, 50),
('iPhone 14 Plus', 18000000, 40),
('iPhone 14 Pro', 28000000, 60),
('iPhone 14 Pro Max', 31000000, 55);

-- Thêm dữ liệu vào bảng descriptions
INSERT INTO descriptions (id_product, descrip_product) VALUES
(1, 'Description for iPhone 13'),
(2, 'Description for iPhone 13 Mini'),
(3, 'Description for iPhone 13 Pro'),
(4, 'Description for iPhone 13 Pro Max'),
(5, 'Description for iPhone 14'),
(6, 'Description for iPhone 14 Plus'),
(7, 'Description for iPhone 14 Pro'),
(8, 'Description for iPhone 14 Pro Max');

-- Thêm dữ liệu vào bảng pictures
INSERT INTO pictures (id_product, url_picture) VALUES
(1, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063160403'),
(2, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-starlight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693064001768'),
(3, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-15-pro-202309?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1692827834790'),
(4, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-15-pro-202309?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1692827834790'),
(5, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1676930656150'),
(6, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-15-202309?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1692827832423'),
(7, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-15-pro-202309?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1692827834790'),
(8, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-15-pro-202309?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1692827834790');

-- Thêm dữ liệu vào bảng carts
INSERT INTO carts (id_user) VALUES
(1), (2), (3);

-- Thêm dữ liệu vào bảng cart_items
INSERT INTO cart_items (id_cart, id_product, quantity) VALUES
(1, 2, 1),
(1, 4, 1),
(2, 6, 2),
(3, 8, 1);

-- Thêm dữ liệu vào bảng orders
INSERT INTO orders (id_user, total_amount) VALUES
(1, 187000.00),
(2, 439000.00),
(3, 586000.00);

-- Thêm dữ liệu vào bảng order_details
INSERT INTO order_details (id_order, id_product, quantity, price) VALUES
(1, 1, 1, 18700000.00),
(2, 3, 2, 55200000.00),
(3, 5, 3, 60000000.00);
