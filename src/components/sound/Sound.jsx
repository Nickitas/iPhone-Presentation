

import cls from './sound.module.scss'


const Sound = () => {

    const handleLernMore = () => {
        const element = document.querySelector('#display')
        window.scrollTo({
            top: element?.getBoundingClientRect().bottom,
            left: 0,
            behavior: 'smooth'
        })
    }

    const sound = (
        <section className={cls.sound} id='sound'>
            <div className={cls.container}>
                <div className={cls.content}>
                    <h2>New Sound System</h2>
                    <p className={cls.text}>Feel the base.</p>
                    <span className={cls.desc}>
                        From $41.62/mo. for 24 mo. or $999 before trade-in
                    </span>
                    <ul className={cls.list}>
                        <li>
                            <button className={cls.button}>Buy</button>
                        </li>
                        <li onClick={handleLernMore}>
                            <a className={cls.link}>Learn more</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )

    return sound
}

export { Sound }