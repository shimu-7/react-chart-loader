import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '*', name: 'Not Found', id: 'not-found' }
    ];


    return (
        <nav>
            <div onClick={()=>setOpen(!open)} className="md:hidden text-2xl">
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex duration-1000 absolute md:static ${open ? 'top-12 pl-12' : '-top-60'} md:gap-52 md:mx-20`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;