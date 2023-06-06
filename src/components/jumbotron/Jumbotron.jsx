
import Iphone from '../../assets/images/iphone-14.jpg'
import HoldingIphone from '../../assets/images/iphone-hand.png'
import cls from './jumbotron.module.scss'

const Jumbotron = () => {

    const handleLearnMore = () => {
        const element = document.querySelector('#sound')
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })
    }
    
    const jumbotron = (
        <section className={cls.jumbotron} id='jumbotron'>
            <h2 className={cls.title}>New</h2>
            <img className={cls.logo} src={Iphone} alt='iPhone 14 Pro' />
            <p className={cls.text}>
                Big and bigger.
            </p>
            <span className={cls.desc}>
                From $41.62/mo for 24 mo. or $999 before trade-in
            </span>
            <ul className={cls.list}>
                <li>
                    <button className={cls.button}>
                        Buy
                    </button>
                </li>
                <li onClick={handleLearnMore}>
                    <a className={cls.link}>
                        Learn more
                    </a>
                </li>
            </ul>
            <img className={cls.iphone} src={HoldingIphone} alt='iPhone' />
        </section>
    )
    
    return jumbotron
}

export { Jumbotron }