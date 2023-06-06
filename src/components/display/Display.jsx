

import cls from './display.module.scss'


const Display = ({ triggerPreview }) => {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    const display = (
        <section className={cls.display} id='display'>
            <h2 className={cls.title}>New</h2>
            <p className={cls.text}>Brilliant</p>
            <span>
                A display that`s up to 2x brighter in the sun.
            </span>
            <button className={cls.button} onClick={triggerPreview}>
                Try me!
            </button>
            <button className={cls.backButton} onClick={handleScrollToTop}>
                TOP
            </button>
        </section>
    )

    return display
}

export { Display }