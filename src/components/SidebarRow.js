import React from 'react';

const SidebarRow = ({ Icon, title, active }) => {
  return (
    <div className={`SidebarRow ${active && 'active'}`}>
      <Icon className='icon' />
      <p className='title'>{title}</p>
    </div>
  );
};

export default SidebarRow;
