import './Section2.css'

function Section2(){
    return(
        <>
            <div className="section2">
                <div className='flex-left'>
                    <h3>MyShroom®</h3>
                    <h2>THE NUMBERS</h2>
                    <p>Our proprietary hybrid strains are not available elsewhere!  We use only organic substrates. MyShroom is grown processed and packaged in completely sterile rooms and our labs are assessed by independent lab quality experts. 
                        <br/><br/>MyShroom comes from 8 proprietary hybrid strains from 5  mushrooms species. <br/>They are: <br/>Reshi: Lion's Mane: Cordyceps: Maitake: Turkey Tal: Oyster:Antrodia: and garicus Blazie.</p>
                </div>
                <div className='flex-right'>
                    <div className='con-left'>
                        <div>
                            <span className='num'>5</span>
                            <span className='break'>-</span>
                            <h4 className='head'>Species</h4>
                        </div>
                            <span className='num'>4000</span>
                            <span className='break'>-</span>
                            <h4 className='head'>Beneficial Nutrients</h4>
                        <div>
                        </div>
                    </div>
                    <div className='con-right'>
                        <div>
                            <span className='num'>8</span>
                            <span className='break'>-</span>
                            <h4 className='head'>Hybrid Strain</h4>
                        </div>
                        <div>
                            <span className='num'>50</span>
                            <span className='break'>-</span>
                            <h4 className='head'>50 licensed growers in the U.S</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2