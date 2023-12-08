// LoginPage.js
import React from 'react';
import LoginForm from '../components/LoginForm'; 
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Login to Your Account</h2>
      <LoginForm /> 
      <GoogleOAuthProvider clientId="383827055977-au9d6jn1ke7ge9hl5ccvduu1m4r2tch6.apps.googleusercontent.com"> 
      <GoogleLogin
onSuccess={credentialResponse => {
  console.log(credentialResponse);
  navigate('/');
}}
onError={() => {
  console.log('Login Failed');
}}
/>;
  </GoogleOAuthProvider>;
      {/* <GoogleLogin />
      <GoogleLogout /> */}
    </div>
  );
};

export default LoginPage;