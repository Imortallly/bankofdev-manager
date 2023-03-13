import './index.css'
import icon from '../../img/hexagono.png'

function Header () {
    return (
        <section className='header-menu'>
            <span><img src={icon}/><h1>Bank of Dev</h1></span>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
                <button className='btn-login'>Login</button>
            </nav>
        </section>
    )
}

export default Header