import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuIconContext, MenuIconContextType } from '../context/MenuIconContext'


const MenuIcon: React.FC = () => { 
  const { button, link, icon, quantity, hideOnMobile } = React.useContext(MenuIconContext) as MenuIconContextType;

  return (
    <button type={button} className={`btn btn-light ${hideOnMobile ? "d-none d-md-flex" : ""}`}> {/* en klass för att kunna dölja vissa knappar efter tex en viss skärm */}
        <NavLink className="menu-icon" to={link} end>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
            <i className={icon}></i>
        </NavLink>
    </button>
  )
}

export default MenuIcon