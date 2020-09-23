import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import YoutubeLogo from '../img/yt_logo_rgb_light.png';
import AvatarDefault from '../img/4.png';
import { HOME1_URL, SEARCH_URL } from '../utils/common/constant';

const Header = ({ input, handleSearch, handleInput }) => {
  return (
    <header className='MainHeader'>
      <div className='MainHeader__left'>
        <MenuIcon />
        <Link to={HOME1_URL}>
          <img
            className='MainHeader__logo'
            src={YoutubeLogo}
            alt='Youtube Logo'
          />
        </Link>
      </div>
      <form className='MainHeader__input'>
        <input
          type='text'
          placeholder='Search'
          value={input}
          onChange={handleInput}
        />
        <Link to={SEARCH_URL}>
          <button type="submit" onClick={handleSearch}>
            <SearchIcon />
          </button>
        </Link>
      </form>
      <div className='MainHeader__icons'>
        <VideoCallIcon className='MainHeader__icon' />
        <AppsIcon className='MainHeader__icon' />
        <NotificationsIcon className='MainHeader__icon' />
        <Avatar
          alt='DoTQ'
          title='DoTQ'
          src={AvatarDefault} //phải là biến, KO được là '../img/4.png'
        />
      </div>
    </header>
  );
};

export default Header;
