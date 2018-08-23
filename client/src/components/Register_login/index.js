import React from 'react';
import MyButton from '../utils/button';
import Login from './login';

const RegisterLogin = () => {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customers</h1>
                        <p>In auctor, justo eget aliquet interdum, elit lorem facilisis enim, in scelerisque dui leo sit amet mauris. Mauris ut erat vitae mi dignissim dignissim quis vel diam. Phasellus at eros dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce in urna eu magna imperdiet volutpat. Nunc nisl nisi, mollis ut diam eu, efficitur varius dui. Nullam ut justo sit amet nibh aliquet placerat nec non nisi.</p>
                        <MyButton
                            type="default"
                            title="Create an account"
                            linkTo="/register"
                            addStyles={{
                                margin:'10px 0 0 0'
                            }}
                        />
                    </div>
                    <div className="right">
                        <h2>Registered Customers</h2>
                        <p>If you have an account please log in</p>
                        <Login/>
                    </div>
                </div>
            </div>
            REGISTER
        </div>
    );
};

export default RegisterLogin;