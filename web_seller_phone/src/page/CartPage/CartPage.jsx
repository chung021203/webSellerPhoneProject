import React, { useState } from 'react';
import CartItem from '../../Components/CartComponent/CartItem';
import InputForm from '../../Components/InputForm/InputForm';
import { CloseOutlined } from '@ant-design/icons';
import Button from '../../Components/Button';
const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Sản phẩm 1', imageUrl: '...', color: 'Đỏ', price: 10, quantity: 2 },
        { id: 2, name: 'Sản phẩm 1', imageUrl: '...', color: 'Đỏ', price: 15, quantity: 2 },
        { id: 3, name: 'Sản phẩm 1', imageUrl: '...', color: 'Đỏ', price: 15, quantity: 2 },

        // Thêm các sản phẩm khác nếu cần
    ]);

    // Hàm tính tổng tiền của tất cả sản phẩm trong giỏ hàng
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Hàm xử lý thanh toán
    const handleCheckout = () => {
        // Thêm logic xử lý thanh toán ở đây, ví dụ: chuyển hướng đến trang thanh toán
        setIsShowCheckout(true);
    };

    // Các hàm xử lý xóa, tăng và giảm số lượng sản phẩm trong giỏ hàng
    const handleRemove = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    const handleIncrease = (productId) => {
        setCartItems(
            cartItems.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)),
        );
    };

    const handleDecrease = (productId) => {
        setCartItems(
            cartItems.map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)),
        );
    };

    // xử lí hiện form thanh toán
    const [isShowCheckout, setIsShowCheckout] = useState(false);

    return (
        <div>
            {/*  cart */}
            <div style={{ backgroundColor: '#f5f5fa', display: 'flex', flexDirection: 'column', minHeight: '2000px' }}>
                <div style={{ margin: '40px', fontWeight: 'bold', fontSize: '15px', display: 'block' }}>Giỏ hàng</div>

                {cartItems.length === 0 ? (
                    <p>Giỏ hàng của bạn trống</p>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                product={item}
                                onRemove={handleRemove}
                                onIncrease={handleIncrease}
                                onDecrease={handleDecrease}
                            />
                        ))}
                        <div style={{ marginTop: '10px', textAlign: 'center' }}>
                            <div>Tổng tiền: ${calculateTotalPrice()}</div>
                            <div>Phí vận chuyển: Miễn phí</div>
                            {/* Removed Router wrapper */}

                            <button
                                onClick={handleCheckout}
                                style={{
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    cursor: 'pointer',
                                    fontSize: '15px',
                                }}
                            >
                                Thanh toán
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {/*  checkout */}
            {isShowCheckout && (
                <div
                    style={{
                        position: 'fixed', // Sử dụng fixed để overlay toàn màn hình
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <div
                        style={{
                            background: '#fff',
                            padding: 20,
                            borderRadius: 5,
                            textAlign: 'center',
                            position: 'relative',
                            // Thêm các style khác cho form thanh toán của bạn
                        }}
                    >
                        <div
                            onClick={() => {
                                setIsShowCheckout(false);
                            }}
                            style={{
                                position: 'absolute',
                                top: '5px',
                                right: '7px',
                                padding: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            <CloseOutlined />
                        </div>
                        <div>
                            <h3>Thông tin đặt hàng</h3>
                            <p style={{ color: '#aaa', fontSize: '13px', fontWeight: '400', marginBottom: '30px' }}>
                                Bạn cần nhập đầy đủ các trường thông tin có dấu *
                            </p>
                            <InputForm style={{ marginBottom: '10px' }} placeholder="Họ và tên " />
                            <InputForm style={{ marginBottom: '10px' }} placeholder="Số điện thoại " />
                            <InputForm style={{ marginBottom: '10px' }} placeholder="Email" />
                            <InputForm style={{ marginBottom: '10px' }} placeholder="Địa chỉ " />
                            <div style={{ margin: '20px', display: 'flex', justifyContent: 'center' }}>
                                <Button rounded>Xác nhận và đặt hàng</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
