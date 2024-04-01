import InputForm from '../../Components/InputForm/InputForm';
import { WrapperContainerLeft, WrapperContainerRight, WrappperTextLight } from '../SignInPage/style';
import Button from '../../Components/Button';
import { Image } from 'antd';
import logoLogin from '../../assets/images/Login.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignUpPage() {
    const navigate = useNavigate();
    const handleNavigated = () => {
        navigate('/sign-in');
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setconfirm] = useState('');

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
                    <InputForm
                        onChange={setEmail}
                        value={email}
                        style={{ marginBottom: '10px' }}
                        placeholder="abc@gmail.com"
                    />
                    <InputForm onChange={setPassword} value={password} placeholder="password" />
                    <InputForm
                        onChange={setconfirm}
                        value={confirm}
                        style={{ marginTop: '10px' }}
                        placeholder="confirm password"
                    />

                    <Button
                        disable={!email || !password || !confirm ? true : false}
                        style={{ margin: '50px 0 10px' }}
                        primary
                    >
                        Đăng kí
                    </Button>

                    <p style={{ fontSize: '1.2rem' }}>
                        Bạn đã có tài khoản ?{' '}
                        <WrappperTextLight onClick={handleNavigated}> Đăng nhập </WrappperTextLight>
                    </p>
                </WrapperContainerLeft>
                <WrapperContainerRight style={{ borderRadius: '6px' }}>
                    <Image src={logoLogin} preview={false} alt="iamge-logo" height="203px" width="203px" />
                </WrapperContainerRight>
            </div>
        </div>
    );
}

export default SignUpPage;
