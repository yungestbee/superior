import image from './right now white bg 1.png'
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar(){
    return(
        <>
            <nav className="container-fluid-sm">
                <img src={image} />
                <ul>
                    <Link className='link'>Home</Link>
                    <Link className='link'>About</Link>
                    <Link className='link'>Services</Link>
                    <Link className='link'>Products</Link>
                    <Link className='link'>Partners</Link>
                    <Link className='link'>Contact</Link>
                    <Link className='link'>Gallery</Link>
                </ul>
            </nav>
        </>
    )
}

export default NavBar