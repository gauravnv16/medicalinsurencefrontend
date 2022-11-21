import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import'./style.css'


const NavBar = () => {

    const sideBarHandler = () => {
        const type = document.getElementById("SideBar").style.display;
        if(type === 'none') document.getElementById("SideBar").style.display = "flex";
        else document.getElementById("SideBar").style.display = "none"
    }

    const logStatus = useSelector(state => state.SignCheck)
    const User = useSelector(state => state.SignedUser)
    if(!logStatus)
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
    else 
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
                    <li><Link to="/user/profile">{User.Username}</Link></li>
                    {
                        (User.isAdmin)?<li><Link to="/user/admin">Admin</Link></li>:""
                    }
                    <li><a href="/">logout</a></li>
                </ul>

            </aside>

            <ul className='navBar1'>
            <li><Link to="/user/profile">{User.Username}</Link></li>
            {
                (User.isAdmin)?<li><Link to="/user/admin">Admin</Link></li>:""
            }
            <li><a href="/">logout</a></li>
            </ul>
        </nav>
    ) 
}

export default NavBar;