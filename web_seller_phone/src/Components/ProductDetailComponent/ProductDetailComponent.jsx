import { Row, Col, Image } from 'antd';
import productImg from '../../assets/images/large.jpg.webp';
import productImgSmall from '../../assets/images/small.jpg.webp';
import {
    WrapperStyleImageSmall,
    WrapperStyleColImage,
    WrapperStyleNameProduct,
    WrapperStyleTextSell,
    WrapperPriceProduct,
    WrapperPriceTextProduct,
    WrapperAddressProduct,
    WrapperQualityProduct,
    WrapperInputNumber,
} from '../../page/ProductDetailPage/style';
import { MinusOutlined, PlusOutlined, StarFilled } from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

function ProductDetailComponent() {
    return (
        <div>
            <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px', height: '100%' }}>
                <Col style={{ borderRight: '1px solid #e5e5e5', paddingRight: '20px' }} span={10}>
                    <Image src={productImg} preview={false} alt="image-product" />
                    <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={productImgSmall} preview={false} alt="productImg" />
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={productImgSmall} preview={false} alt="productImg" />
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={productImgSmall} preview={false} alt="productImg" />
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={productImgSmall} preview={false} alt="productImg" />
                        </WrapperStyleColImage>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={productImgSmall} preview={false} alt="productImg" />
                        </WrapperStyleColImage>
                    </Row>
                </Col>

                <Col style={{ padding: '70px 100px' }} span={14}>
                    <WrapperStyleNameProduct>Bản Đồ</WrapperStyleNameProduct>
                    <div>
                        <StarFilled style={{ color: 'rgb(253,216,54)' }} />
                        <StarFilled style={{ color: 'rgb(253,216,54)' }} />
                        <StarFilled style={{ color: 'rgb(253,216,54)' }} />
                        <StarFilled style={{ color: 'rgb(253,216,54)' }} />
                        <WrapperStyleTextSell> | Đã bán 1000 +</WrapperStyleTextSell>
                    </div>
                    <WrapperPriceProduct>
                        <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
                    </WrapperPriceProduct>
                    <WrapperAddressProduct>
                        <span>Giao đến </span>
                        <span className="address">Bến Nghé quận 1</span> -
                        <span className="change-address">Đổi địa chỉ</span>
                    </WrapperAddressProduct>

                    <div
                        style={{
                            margin: '10px 0 20px',
                            padding: '10px 0',
                            borderTop: '1px solid #e5e5e5',
                            borderBottom: '1px solid #e5e5e5',
                        }}
                    >
                        <div style={{ marginBottom: '10px' }}>Số lượng</div>

                        <WrapperQualityProduct>
                            <button
                                style={{
                                    border: 'none',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    fontSize: '10px',
                                }}
                            >
                                <MinusOutlined style={{ color: '#000', fontSize: '15px' }} />
                            </button>
                            <WrapperInputNumber defaultValue={1} min={1} size="small" />
                            <button
                                style={{
                                    border: 'none',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    fontSize: '10px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <PlusOutlined style={{ color: '#000', fontSize: '15px' }} />
                            </button>
                        </WrapperQualityProduct>
                    </div>
                    <div>
                        <ButtonComponent
                            size={40}
                            styleButton={{
                                background: 'rgb(255, 57, 69)',
                                height: '48px',
                                width: '220px',
                                border: 'none',
                                borderRadius: '4px',
                            }}
                            textButton={'Chọn mua'}
                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ProductDetailComponent;
