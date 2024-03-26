import '../InsertPage/Insert.css';

function InsertPage() {
    return (
        <div className="container-insert">
            <div>
                <form id="add_form">
                    <h2 id="title">Thêm Sản Phẩm</h2>
                    <label>Tên điện thoại</label>
                    <input type="text" id="product_name" placeholder="Nhập tên điện thoại" /> <br />
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
