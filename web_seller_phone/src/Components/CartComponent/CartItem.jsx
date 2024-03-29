// CartItem.js
import React from 'react';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

const CartItem = ({ product, onRemove, onIncrease, onDecrease }) => {
    // Calculate total price for the product
    const totalPrice = product.price * product.quantity;

    return (
        <div style={{ borderBottom: '2px solid #ccc', padding: '10px 0' }}>
            <table style={{ width: '105%' }}>
                <tbody>
                    <tr>
                        <td><img src={product.imageUrl} alt={product.name} style={{ width: '1px', height: '1px', objectFit: '10px' }} /></td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <button onClick={() => onDecrease(product.id)} style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '5px', borderRadius: '5px' }}><MinusOutlined /></button>
                                <span>{product.quantity}</span>
                                <button onClick={() => onIncrease(product.id)} style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '5px', borderRadius: '5px' }}><PlusOutlined /></button>
                            </div>
                        </td>
                        <td>
                            <button onClick={() => onRemove(product.id)} style={{ backgroundColor: 'orange', color: '#fff', border: 'none', padding: '5px', borderRadius: '5px' }}><DeleteOutlined /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CartItem;
