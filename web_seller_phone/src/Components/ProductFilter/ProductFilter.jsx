import React from 'react';
import { WrapperProductFilter, WrapperText } from './styles';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';

function ProductFilter() {
    const items1 = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    iphone
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    samsung
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    galaxy
                </a>
            ),
        },
    ];

    const items2 = [
        {
            key: '1.1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Dưới 1 triệu
                </a>
            ),
        },
        // More items as per items1 but for the second dropdown
    ];

    const overlayStyle = {
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    };

    const dropdownMargin = { marginRight: '60px' };

    return (
        <WrapperProductFilter>
            <WrapperText>Lọc sản phẩm</WrapperText>
            <div style={{ display: 'flex', flex: '2' }}>
                <div style={dropdownMargin}>
                    <Dropdown menu={{ items: items1 }} trigger={['hover']} overlayStyle={overlayStyle}>
                        <a>
                            Danh mục
                            <span style={{ marginLeft: '5px' }}>
                                <DownOutlined />
                            </span>
                        </a>
                    </Dropdown>
                </div>
                <div style={dropdownMargin}>
                    <Dropdown menu={{ items: items2 }} trigger={['hover']} overlayStyle={overlayStyle}>
                        <a>
                            Giá
                            <span style={{ marginLeft: '5x' }}>
                                <DownOutlined />
                            </span>
                        </a>
                    </Dropdown>
                </div>
            </div>
        </WrapperProductFilter>
    );
}

export default ProductFilter;
