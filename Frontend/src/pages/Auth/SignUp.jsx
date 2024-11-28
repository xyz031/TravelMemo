import React, { useState } from 'react';
import PasswordInput from '../../components/input/PasswordInput';
import { useNavigate } from 'react-router-dom';
import { isvalidateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosinstance';



export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      seterror('Please enter your name');
      return;
    }
    if (!isvalidateEmail(email)) {
      seterror('Please enter a valid email address.');
      return;
    }
    if (!password) {
      seterror('Please enter the password');
      return;
    }
    seterror('');

    // SignUp API call
    try {
      const response = await axiosInstance.post('/create-account', {
        fullName: name,
        email,
        password,
      });
      if (response.data && response.data.accessToken) {
        localStorage.setItem('token', response.data.accessToken);
        navigate('/dashboard');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        seterror(error.response.data.message);
      } else {
        seterror('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="h-screen bg-cyan-50 overflow-hidden relative">
      <div className="login-ui-box right-10 -top-40" />
      <div className="login-ui-box bg-cyan-200 -bottom-40 right-1/2" />
      <div className="container h-screen flex items-center justify-center px-20 mx-auto">
        <div className="w-2/4 h-[90vh] flex items-end bg-signup-bg-img bg-cover bg-center rounded-lg p-10 z-50">
          <div>
            <h4 className="text-5xl text-white font-semibold leading-[58px]">
              Join the
              <br />
              Adventure
            </h4>
            <p className="text-[15px] text-white font-semibold leading-6 pr-7 mt-4">
              Create an account to start documenting your travels and preserving your memories in your personal travel
              journal.
            </p>
          </div>
        </div>
        <div className="w-2/4 h-[75vh] bg-white rounded-r-lg relative p-16 shadow-lg shadow-cyan-200/20">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl font-semibold mb-7">SignUp</h4>
            <input
              type="text"
              placeholder="Full Name"
              className="input-box"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={({ target }) => setemail(target.value)}
            />
            <PasswordInput value={password} onChange={({ target }) => setpassword(target.value)} />
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Create Account
            </button>
            <p className="text-xs text-slate-500 text-center my-4">Or</p>
            <button
              type="button"
              className="btn-primary btn-light"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
