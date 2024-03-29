class ProductModel {
    getProductDataModel() {
        return {
            products: {
                id_product: 'INT PRIMARY KEY AUTO_INCREMENT',
                nameProduct: 'NVARCHAR(255) NOT NULL',
                price: 'DECIMAL(10, 2) NOT NULL',
                stock_quantity: 'INT NOT NULL'
            },
            descriptions: {
                id_product: 'INT PRIMARY KEY',
                descrip_product: 'LONGTEXT NOT NULL'
            },
            pictures: {
                id_picture: 'INT PRIMARY KEY AUTO_INCREMENT',
                id_product: 'INT',
                url_picture: 'LONGBLOB NOT NULL'
            }
        };
    }
}

export default ProductModel;