import React, { useState } from 'react';
import CartItem from '../../Components/CartComponent/CartItem';
import { Link } from 'react-router-dom'; // Removed BrowserRouter as Router

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Sản phẩm 1', imageUrl: '...', color: 'Đỏ', price: 10, quantity: 2 },
        { id: 2, name: 'Sản phẩm 1', imageUrl: '...', color: 'Đỏ', price: 15, quantity: 2 },
        // Thêm các sản phẩm khác nếu cần
    ]);

    // Hàm tính tổng tiền của tất cả sản phẩm trong giỏ hàng
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // Hàm xử lý thanh toán
    const handleCheckout = () => {
        // Thêm logic xử lý thanh toán ở đây, ví dụ: chuyển hướng đến trang thanh toán
        console.log("Đã click thanh toán!");
    };

    // Các hàm xử lý xóa, tăng và giảm số lượng sản phẩm trong giỏ hàng
    const handleRemove = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const handleIncrease = (productId) => {
        setCartItems(cartItems.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const handleDecrease = (productId) => {
        setCartItems(cartItems.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item));
    };

    return (
        <div>
            <h2>Giỏ hàng</h2>
            {cartItems.length === 0 ? (
                <p>Giỏ hàng của bạn trống</p>
            ) : (
                <div>
                    {cartItems.map(item => (
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
                        <Link to="/checkout">
                            <button onClick={handleCheckout} style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>Thanh toán</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
