import React from 'react';
// import { Card } from 'antd';
import { StyleNameProduct } from './style';
import { WrapperReportText } from './style';
import { WrapperPriceText } from './style';
import { WrapperDiscountText } from './style';
import { AnimatedCard } from './style';

const CardComponent = ({ data }) => {
    const {
        nameProduct,
        price,
        stock_quantity,
        url_picture = 'https://tabletplaza.vn/images/thumbnails/450/320/detailed/25/15pb_z3tl-8o_v43s-qd_fjxg-42_s6g9-q4.jpg',
    } = data;
    console.log(url_picture);
    return (
        <div style={{ margin: '40px 20px' }}>
            <AnimatedCard
                hoverable
                style={{ width: 200 }}
                cover={
                    <img
                        alt="example"
                        // src={url_picture}
                        src="https://tabletplaza.vn/images/thumbnails/450/320/detailed/25/15pb_z3tl-8o_v43s-qd_fjxg-42_s6g9-q4.jpg"
                    />
                }
            >
                <StyleNameProduct>{nameProduct}</StyleNameProduct>
                <WrapperReportText>
                    <span>4.96</span>
                    <span>| đã bán {stock_quantity}+</span>
                </WrapperReportText>
                <WrapperPriceText>
                    {price}
                    <WrapperDiscountText>-5%</WrapperDiscountText>
                </WrapperPriceText>
            </AnimatedCard>
        </div>
    );
};
export default CardComponent;
