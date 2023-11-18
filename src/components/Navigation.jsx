import React from 'react'
import NavItem from './NavItem'
import { navItems } from '../utils/constants'

const Navigation = ({changePage}) => {
  return (
    <nav className='fixed-top mt-2 ms-4'>
                <ul className='nav'>
                  {navItems.map((item,index)=> <NavItem changePage={changePage} key={index} itemTitle={item}/>)}
                    {/* <li>Home</li>
                    <li>About me</li>
                    <li>Star Wars</li>
                    <li>Contact</li> */}
                </ul>
            </nav>
  )
}

export default Navigation
