import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function TypeProducts() {
    const items = [
        {
            label: <Link to="/iphone">Iphone</Link>,
            key: 'iphone',
            path: '/iphone',

            children: [
                {
                    type: 'price',
                    label: 'Giá',
                    children: [
                        { key: 'iphone-2m', label: '2 triệu' },
                        { key: 'iphone-3m', label: '3 triệu' },
                    ],
                },
            ],
        },
        {
            label: 'Samsung',
            key: 'samsung',
            children: [
                {
                    type: 'price',
                    label: 'Giá',
                    children: [
                        { key: 'samsung-2m', label: '2 triệu' },
                        { key: 'samsung-3m', label: '3 triệu' },
                    ],
                },
            ],
        },
        {
            label: 'Galaxy',
            key: 'galaxy',
            children: [
                {
                    type: 'price',
                    label: 'Giá',
                    children: [
                        { key: 'galaxy-2m', label: '2 triệu' },
                        { key: 'galaxy-3m', label: '3 triệu' },
                    ],
                },
            ],
        },
    ];

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default TypeProducts;
