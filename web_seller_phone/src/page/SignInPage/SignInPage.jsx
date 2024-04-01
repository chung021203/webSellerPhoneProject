import { Image } from 'antd';
import Button from '../../Components/Button';
import InputForm from '../../Components/InputForm/InputForm';
import { WrapperContainerLeft, WrapperContainerRight, WrappperTextLight } from './style';
import logoLogin from '../../assets/images/Login.png';

function SignInPage() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 0, 0, 0.53)',
                height: '100vh',
            }}
        >
            <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
                <WrapperContainerLeft>
                    <h1>Xin chào</h1>
                    <p style={{ marginBottom: '50px' }}>Đăng nhập vào tài khoản bằng email</p>
                    <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" />
                    <InputForm placeholder="password" />
                    <Button style={{ margin: '50px 0 10px' }} primary>
                        Đăng nhập
                    </Button>
                    <WrappperTextLight>Quên mật khẩu ?</WrappperTextLight>
                    <p style={{ fontSize: '1.2rem' }}>
                        Chưa có tài khoản ? <WrappperTextLight>Tạo tài khoản</WrappperTextLight>
                    </p>
                </WrapperContainerLeft>
                <WrapperContainerRight style={{ borderRadius: '6px' }}>
                    <Image src={logoLogin} preview={false} alt="iamge-logo" height="203px" width="203px" />
                </WrapperContainerRight>
            </div>
        </div>
    );
}

export default SignInPage;
