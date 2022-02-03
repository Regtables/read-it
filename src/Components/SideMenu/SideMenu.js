import React from 'react'
import TileListSubReddit from '../TIleListSubreddit/TileListSubReddit'
import './SideMenu.css'
import { Link } from 'react-router-dom'

import background from '../../images/side-menu-favorites.jpg'
// import background from 'src/images/side-menu-favorites.jpg'

function SideMenu() {

  const favorites = ['LeagueOfLegends', 'Science', 'SouthAfrica', 'LucyDacus', 'FantanoForever', 'GoodReads', 'TeachingSouthKorea', 'memes', 'news']

  return (
      <div className = 'side-menu-container'>
          <div className = 'side-menu-header' style = {{backgroundImage: `url(${background})`}}>
              <h3>Your Favortie Reads</h3>
          </div>
          <div className = 'favorite-list-container'>
            <TileListSubReddit subreddits = {favorites} />          

          </div>
      </div>
  )
}

export default SideMenu
