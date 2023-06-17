import Carousel  from 'react-bootstrap/Carousel'
import './home.css'
import image from './Group 25.png'

function Home(){
    return(
        <>
            <Carousel className="carousel slide">
                    <Carousel.Item  className="first-caro">
                        <div className='first'>
                            <h3>WELCOME</h3>
                            <p>Superior produces the Myshroom brand of products made from various blends of proprietary medicinal mushrooms grown in sterile environments on proprietary organic substrantes</p>
                            <div className='btn-group1'>
                                <button className='dark-btn'>DISCOVER NOW</button>
                                <button className='light-btn'>ABOUT</button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="second-caro">
                        <div className='second'>
                            <h3>OUR UNIQUE OFFERING</h3>
                            <p>MyShroom&reg; comes from 8 proprietary hybrid strains of 5 mushrooms species</p>
                            <div>
                                <button className='dark-btn'>DISCOVER NOW</button>
                                <button className='light-btn'>CATALOG</button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='third-caro'>
                        <div className='third'>
                            <img src={image} />
                            <h3>MyShroom&reg;</h3>
                            <p>MyShroom&reg; is a registered trademark of Superior International LLC </p>
                            <div>
                                <button className='dark-btn'>OUR CONTACTS</button>
                                <button className='light-btn'>OUR PARTNERS</button>
                            </div>
                        </div>
                    </Carousel.Item>
              
            </Carousel>
                         
        </>
    )
}

export default Home