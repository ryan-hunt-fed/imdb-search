import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {


    return (
        <>
            <div className='navbar'>
                <div className='navbar-text'>
                    <Link to='/'>Home</Link>

                </div>

                <div className='navbar-text'>
                    <Link to='/movie'>Movies</Link>

                </div>
                <div className='navbar-text'>
                    <Link to='/tv'>TV</Link>

                </div>
                {/* <div className='navbar-text'>
                    <Link to='/people'>People</Link>
                </div> */}
                <div className='navbar-text'>
                    <Link to='/theatres'>Theatres</Link>

                </div>

                <div className='navbar-text-last'>
                    <Link to='/boxoffice'>Box Office</Link>
                </div>

            </div>
        </>
    )
}

export default Nav