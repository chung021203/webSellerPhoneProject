import '../InsertPage/Insert.css';

function InsertPage() {
    return (
        <div className="container-insert">
            <div>
                <form id="add_form">
                    <h2 id="title">Thêm Sản Phẩm</h2>
                    <label>Tên điện thoại</label>
                    <div className="input-container">
                        <input type="text" id="product_name" placeholder="Nhập tên điện thoại" />
                        <select id="brand" name="brand">
                            <option value="Apple">Thương hiệu</option>
                            <option value="Apple">Apple</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Samsung">Oppo</option>
                            <option value="Samsung">Huawei</option>
                            <option value="Samsung">Vivo</option>
                            <option value="Samsung">Xiaomi</option>
                            <option value="Samsung">Google Pixel</option>
                        </select>
                    </div>
                    <br />
                    <label>Giá tiền</label>
                    <input type="text" id="product_price" placeholder="Nhập giá tiền" /> <br />
                    <label>Mô tả</label>
                    <textarea id="product_describe" placeholder="Nhập mô tả sản phẩm"></textarea> <br />
                    <input type="file" accept="image/*" id="image_product" /> <br />
                </form>
            </div>
        </div>
    );
}

export default InsertPage;
