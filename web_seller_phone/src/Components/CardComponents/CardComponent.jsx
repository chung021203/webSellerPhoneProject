import React from 'react';
import { Card } from 'antd';
import { StyleNameProduct } from './style';
import { WrapperReportText } from './style';
import { WrapperPriceText } from './style';
import { WrapperDiscountText } from './style';

const CardComponent = () => {
    return (
        <div style={{ margin: '40px 20px' }}>
            <Card
                hoverable
                style={{ width: 200 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <StyleNameProduct>IPhone</StyleNameProduct>
                <WrapperReportText>
                    <span>4.96</span>
                    <span>| đã bán 1000+</span>
                </WrapperReportText>
                <WrapperPriceText>
                    1000000đ
                    <WrapperDiscountText>-5%</WrapperDiscountText>
                </WrapperPriceText>
            </Card>
        </div>
    );
};
export default CardComponent;
