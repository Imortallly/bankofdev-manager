import './../Home/index.css'
import Header from '../../components/Header'
import icon from '../../img/hexagono.png'
import lanterna from '../../img/lanterna.png'

function Home() {
    return (
        <section className='body-home'>
            <Header />
            <div className='space-header'></div>
            <section className='welcome-screen'>
                <div className='box-info'>
                    <div className='new'>
                        <span><img src={lanterna} /> NEW: Now you can access these features yourself from home! <a href='#'>Try Bank of Dev mobile!</a></span>
                    </div>
                    <span className='logo-show'><img src={icon} />Bank of Dev</span>
                    <p><spa className='title-show'>Your bank with thousands of options is here.</spa><br></br>
                    <h3>Join 12 million others taking control of their finances.</h3>
                    </p>
                    <div className='email'>
                    <input type='text' placeholder='Enter your email'></input>
                    <button className='score-button'>See my Score</button>
                    </div>
                </div>
                <div className='image-show'>

                </div>
            </section>
        </section>
    )
}

export default Home