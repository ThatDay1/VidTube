import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={home} alt="home" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={game_icon} alt="game icon" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={automobiles} alt="Automobiles" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={sports} alt="Sports" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={entertainment} alt="Entertainment" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={tech} alt="Technology" />
          <p>Technology</p>
        </div>
        <div className="side-link">
          <img src={music} alt="Music" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={blogs} alt="Blogs" />
          <p>Blogs</p>
        </div>
        <div className="side-link">
          <img src={news} alt="News" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="user-1" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="user-2" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="user-3" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="user-4" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="user-5" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
