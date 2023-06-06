import AnimatedLogo from '../../assets/images/logo-animated.gif'
import cls from './loader.module.scss'

const Loader = () => {


    const loader = (
        <div className={cls.loader}>
            <img className={cls.logo} src={AnimatedLogo} alt='apple loader' />
        </div>
    )

    return loader
}

export { Loader }