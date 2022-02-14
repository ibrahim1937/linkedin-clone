import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "../styles/Header.css"
import HeaderOptions from './HeaderOptions';
import { useDispatch } from 'react-redux';
import {logout} from "../features/userSlice"
import { auth, signOut } from "../firebase"
import { selectUser } from "../features/userSlice"
import { useSelector } from "react-redux"


function Header() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);


  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  }

  return (
    <div className='header'>
      <div className="header__left">
          <img 
          src='/linkedin.png'
          alt="linkedIn-logo" 
          />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions title="Home" Icon={HomeIcon} />
        <HeaderOptions title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOptions title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOptions title="Messaging" Icon={ChatIcon} />
        <HeaderOptions title="Notifications" Icon={NotificationsIcon} />
        {user && (
          <HeaderOptions avatar="https://lh3.googleusercontent.com/a-/AOh14Gi2Ujol2uiAey7X3ROzuefRh0YqHulLZmdBt9Ov9w=s360-p-rw-no" title="me"
            onClick={logoutOfApp}
          />
        )}
      </div>
    </div>
  )
}

export default Header
