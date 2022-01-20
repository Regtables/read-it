import React from 'react'
import TileListSubReddit from '../TIleListSubreddit/TileListSubReddit'
import './SideMenu.css'

import background from '../../images/side-menu-favorites.jpg'
// import background from 'src/images/side-menu-favorites.jpg'

function SideMenu() {

  const favorites = ['League of Legends', 'Science', 'South Africa', 'Lucy Dacus', 'Fantano', 'Good Reads', 'Teaching: South Korea']

  return (
    <div className = 'side-menu-container'>
        <div className = 'side-menu-header' style = {{backgroundImage: `url(${background})`}}>
             <h3>Favortie Sub-Reddits</h3>
        </div>
        <div className = 'favorite-list-container'>
          <TileListSubReddit subreddits = {favorites} />          

        </div>
    </div>
  )
}

export default SideMenu
