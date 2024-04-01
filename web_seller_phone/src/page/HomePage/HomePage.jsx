import SliderComponent from '../../Components/SliderComponent';
import CardComponent from '../../Components/CardComponents/CardComponent';
import { WrapperCartComponent } from './style';
function HomePage() {
    return (
        <div style={{ height: '2000px' }}>
            <SliderComponent />
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#f5f5fa',
                    borderRadius: '40px',
                }}
            >
                <WrapperCartComponent>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </WrapperCartComponent>
            </div>
        </div>
    );
}

export default HomePage;
