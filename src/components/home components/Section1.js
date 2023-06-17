import image from './Group 26.png'
import './Section1.css'

function Section1(){
    return(
        <div className='section1'>
            <div className='top'>
                <div className='range'>
                    <div className='upper'>
                        <p>01</p>
                        <h3>WELCOME</h3>
                    </div>
                    <p>Superior produces the MyShroom® brand of products made from various blends of proprietary medicinal mushrooms grown in sterile environments on proprietary organic substrate...</p>
                    <div>
                        <img src={image}/>
                        <span>Discover</span>
                    </div>
                </div>
                <div className='range'>
                    <div className='upper'>
                        <p>02</p>
                        <h3>ABOUT</h3>
                    </div>
                    <p>Superior International, LLC was founded in March 2020 and is a Consulting, Agribusiness and Agro-Allied products manufacturing business. Our mission is to contribute immersely to the lives and.... </p>
                    <div>
                        <img  src={image}/>
                        <span>Read More</span>
                    </div>
                </div>
                <div className='range'>
                    <div className='upper'>
                        <p>03</p>
                        <h3>MyShroom®</h3>
                    </div>
                    <p>The chemistry that comes from the combined hybrid strains of MyShroom medical mushrooms orginally cultivated at research laboratories at universities shows that...</p>
                    <div>
                        <img src={image} />
                        <span>Read More</span>
                    </div>
                </div>
                <div className='range'>
                    <div className='upper'>
                        <p>04</p>
                        <h3>UNIQUE</h3>
                    </div>
                    <p>MyShroom comes from eight proprietary hybrid strains from five mushrooms species: Reishi, Lion's Mane, Cordyceps, Maitake, Turkey Tail, Oyster, Antrodia, Agaricus Blazie...</p>
                    <div>
                        <img src={image} />
                        <span>Read More</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Section1