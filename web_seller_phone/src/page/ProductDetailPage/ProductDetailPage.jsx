import ProductDetailComponent from '../../Components/ProductDetailComponent/ProductDetailComponent';

function ProductDetailPage() {
    return (
        <div style={{ width: '100%', height: '100vh', background: '#f5f5fa' }}>
            <h4>Trang chủ</h4>
            <div style={{ width: '1270px', height: '100%', margin: '0 auto' }}>
                <ProductDetailComponent />
            </div>
        </div>
    );
}

export default ProductDetailPage;
