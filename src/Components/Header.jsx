import React from 'react'
import { Link } from 'react-router-dom'
 import "../Css/custom.css"
function Header() {
  return (
    <div>
        <section className='main-header'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                         <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/movielist">Movie Items</Link></li>
                            <li><Link to="/about">About</Link></li>
                         </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Header