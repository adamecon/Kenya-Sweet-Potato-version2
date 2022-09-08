import  { useState } from 'react'
import './Header.css'

import Head from './Head';

import { Link } from 'react-router-dom';

const Header = () => {

    const [click, setClick] = useState(false);




  return (
    
        <>
            <Head />

            <header>
                <nav className="flexSB">
                    <ul className={click ? "mobile-nav" : "flexSB"} onClick={()=>setClick(false)}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Our Products</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    <div className="start">
                        <div className="button">+254725772524</div>
                    </div>
                    <button className="toggle" onClick={()=>setClick(!click)}>
                        {
                            click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>
                        }
                    </button>
                </nav>
            </header>
        
        </>
    
  )
}

export default Header