import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logOutUser } from '../../../store/users/actions';
import Button from '../../Shared/Button';

const Header = () => {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logIn = () => {
    navigate('/login');
  }

  const logOut = () => {
    dispatch(logOutUser());
    localStorage.removeItem("user");
    navigate('/login');
  }
  return (
    <header>
        <div>
            <Link to={'/'}><h1>FINAL</h1></Link>
        </div>
        { user ? <Button
          onClick={logOut}
          background='none'
          color='white'
          content='Log out'
          />
        : <Button
        onClick={logIn}
        background='none'
        color='white'
        content='Log in'
        />}
    </header>
  );
}

export default Header