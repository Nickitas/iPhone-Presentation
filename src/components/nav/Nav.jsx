import Logo from '../../assets/images/Logo.svg'
import Search from '../../assets/images/search.svg'
import Store from '../../assets/images/store.svg'
import cls from './nav.module.scss'

import React from 'react'

const Nav = () => {
  
    const nav = (
        <nav className={cls.nav}>
            <div className={cls.content}>
                <ul className={cls.list}>
                    <li>
                        <img src={Logo} alt='Apple' />
                    </li>
                    <li>
                        <a className={cls.link}>Store</a>
                    </li>
                    <li>
                        <a className={cls.link}>Mac</a>
                    </li>
                    <li>
                        <a className={cls.link}>iPad</a>
                    </li>
                    <li>
                        <a className={cls.link}>iPhone</a>
                    </li>
                    <li>
                        <a className={cls.link}>Watch</a>
                    </li>
                    <li>
                        <a className={cls.link}>AirPods</a>
                    </li>
                    <li>
                        <a className={cls.link}>Tv & Home</a>
                    </li>
                    <li>
                        <a className={cls.link}>Entertaiment</a>
                    </li>
                    <li>
                        <a className={cls.link}>Accessories</a>
                    </li>
                    <li>
                        <a className={cls.link}>Support</a>
                    </li>
                    <li>
                        <img src={Search} alt='Search' />
                    </li>
                    <li>
                        <img src={Store} alt='Store' />
                    </li>
                </ul>
            </div>
        </nav>
    )
    return nav
}

export { Nav }
