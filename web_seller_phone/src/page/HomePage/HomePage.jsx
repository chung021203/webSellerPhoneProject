import SliderComponent from '../../Components/SliderComponent';
import CardComponent from '../../Components/CardComponents/CardComponent';
import { WrapperCartComponent } from './style';
import TypeProducts from '../../Components/TypeProducts/TypeProducts';
import ProductFilter from '../../Components/ProductFilter/ProductFilter';
import { useEffect, useState } from 'react';
import { getAllProductRequest } from '../../apiService/apiService';
function HomePage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getAllProductRequest();
            setProducts(result.data);
        };
        fetchApi();
    }, []);
    console.log(products);
    return (
        <div style={{ height: '2000px' }}>
            <TypeProducts> </TypeProducts>

            <SliderComponent />
            <ProductFilter></ProductFilter>

            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#f5f5fa',
                    borderRadius: '40px',
                }}
            >
                <WrapperCartComponent>
                    <div style={{ width: '100% ', height: '40px' }}>
                        <div
                            style={{
                                width: '300px ',
                                height: '100%',
                                padding: '5px 0',
                                marginLeft: '70px',
                                backgroundColor: '#00483d',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center ',
                            }}
                        >
                            <p style={{ fontWeight: '600', color: 'var(--primary-color)' }}>GỢI Ý DÀNH CHO BẠN</p>
                        </div>
                    </div>

                    {products.map((item) => {
                        return <CardComponent key={item.id_product} data={item}></CardComponent>;
                    })}
                </WrapperCartComponent>
            </div>
        </div>
    );
}

export default HomePage;
