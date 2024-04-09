import SliderComponent from '../../Components/SliderComponent';
import CardComponent from '../../Components/CardComponents/CardComponent';
import { WrapperCartComponent } from './style';
import TypeProducts from '../../Components/TypeProducts/TypeProducts';
import ProductFilter from '../../Components/ProductFilter/ProductFilter';
import { useEffect, useState } from 'react';
import { getAllProductRequest } from '../../apiService/apiService';
import { Link } from 'react-router-dom';

function HomePage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getAllProductRequest();
            setProducts(result.data);
        };
        fetchApi();
    }, []);
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
                        return (
                            <Link key={item.id_product} to={`/product/${item.id_product}`}>
                                <CardComponent data={item}></CardComponent>
                            </Link>
                        );
                    })}
                </WrapperCartComponent>
            </div>
        </div>
    );
}

export default HomePage;
