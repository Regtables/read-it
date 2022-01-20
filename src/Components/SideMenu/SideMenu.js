import React from 'react'

import './SideMenu.css'

import background from '../../images/side-menu-favorites.jpg'
// import background from 'src/images/side-menu-favorites.jpg'

function SideMenu() {
  return (
    <div className = 'side-menu-container'>
        <div className = 'side-menu-header' style = {{backgroundImage: `url(${background})`}}>
             <h3>Favortie Sub-Reddits</h3>
        </div>
        <div>

        </div>
    </div>
  )
}

export default SideMenu
