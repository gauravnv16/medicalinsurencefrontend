import { Link } from 'react-router-dom'
import'./style.css'


const NavBar = () => {

    const sideBarHandler = () => {
        const type = document.getElementById("SideBar").style.display;
        if(type === 'none') document.getElementById("SideBar").style.display = "flex";
        else document.getElementById("SideBar").style.display = "none"
    }

    return (
        <nav>
            <h1><i className="fa-regular fa-hospital"></i> MediC</h1>
            <ul className='navBar1'>
                <li><Link to="/">Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><Link to="/">Contact</Link></li>
            </ul>

            <button className='SideMenuButton' onClick={ sideBarHandler }><i className="fa-solid fa-bars"></i></button>
            <aside className='SideBar' id="SideBar">
                <div className='SideBar_top'>
                    <h1><i className="fa-regular fa-hospital"></i> MediC</h1>
                </div>
                
                <ul onClick={ sideBarHandler }>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>

                <ul onClick={ sideBarHandler }>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">register</Link></li>
                </ul>

            </aside>

            <ul className='navBar1'>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">register</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;