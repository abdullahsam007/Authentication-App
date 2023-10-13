import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const response = await axios.post('/login', {
        email,
        password
      });

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({});
        // Store the token in local storage
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={loginUser}>
          <label>Email</label>
          <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />

          <label>Password</label>
          <input type="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />

          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
