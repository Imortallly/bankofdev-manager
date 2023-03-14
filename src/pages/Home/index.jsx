import './../Home/index.css'
import Header from '../../components/Header'
import icon from '../../img/hexagono.png'

function Home() {
    return (
        <section className='body-home'>
            <Header />
            <div className='space-header'></div>
            <section className='welcome-screen'>
                <div className='box-info'>
                    <div>

                    </div>
                        <span><img src={icon}/><h1>Bank of Dev</h1></span>
                        <h1></h1>
                        <h2></h2>
                        <input type='text'></input>
                </div>        
                <div className='image-show'>

                </div>
            </section>
        </section>
    )
}

export default Home