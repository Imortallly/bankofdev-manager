import './index.css'
import icon from '../../img/hexagono.png'

function Header () {
    return (
        <header>
            <section className='header-menu'>
                <nav>
                <span><img src={icon}/><h1>Bank of Dev</h1></span>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </nav>
                <button className='btn-login'>Login</button>
            </section>
        </header>
    )
}

export default Header