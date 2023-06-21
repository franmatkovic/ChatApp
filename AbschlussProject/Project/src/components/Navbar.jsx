import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import logout from '../img/logout.png';
import logo from '../img/ugurChat.png';
import userIcon from '../img/userIcon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className='ugur'>
        <img src={logo} alt='' />
      </div>
      <div className='user'>
        <div className='userIcon'>
          <Link to='/acc'>
            <img src={userIcon} alt='' />
          </Link>
        </div>
        <span className='userName'>{currentUser.displayName}</span>
        <span className='logoutButton'>
          <button onClick={() => signOut(auth)}>
            <img src={logout} alt='' />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
