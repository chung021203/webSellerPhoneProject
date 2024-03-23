import React from "react"
import Meta from 'antd/lib/card/Meta'
import { Card } from 'antd'
import { StyleNameProduct} from './style'
import { WrapperReportText} from './style'
import {WrapperPriceText} from './style'
import { WrapperDiscountText} from './style'
import {WrapperImageStyle} from './style'



const CardComponent = () => {
    return (
        <Card
        hoverable
        headStyle={ {width: '200px', height: '200px'}}
        style={{ width: 200 }}
        bodyStyle={{ padding: '10px'}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
    
        <StyleNameProduct>IPhone</StyleNameProduct>
        <WrapperReportText>
            <span>4.96</span>
            <span>| đã bán 1000+</span>
        </WrapperReportText>
        <WrapperPriceText>
            1000000đ
           <WrapperDiscountText>
            -5%
           </WrapperDiscountText>
        </WrapperPriceText>
      </Card>
    )
}
export default CardComponent