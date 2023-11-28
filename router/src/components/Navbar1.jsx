import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faL } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Navbar1 = () => {
    const [first, setfirst] = useState(false)
  const  navMenu=()=>{

    setfirst(!first)
   
  }

  return (
    <div className=''>
    
       <div className='nav'>
       <span>
        Пингвины
        </span>
        <span onClick={navMenu}>
        <FontAwesomeIcon icon={faBars} />
        </span>
       </div>
       <div className="collapse navbar-collapse nav-content  fade-in-image" style={{display: first==false ? 'none':'block' }}  id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to='/'>
                    О нас
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/contacts'>
                    Контакты
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/team'>
                    Наша команда
                  </Link>
                </li>
              </ul>
            </div>

    </div>
  )
}

export default Navbar1