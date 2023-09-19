import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu ,AiOutlineClose } from 'react-icons/ai';



const Navbar = () => {


    const [open , setOpen ] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' },
    ];

    return (
        <div className="pl-4 mt-4">

           <div className="md:hidden"  onClick={() => setOpen(!open)}>
            {
                open === true ? <AiOutlineClose></AiOutlineClose> : 
                <AiOutlineMenu className="text-xl "></AiOutlineMenu>
            }
          
           </div>
            <ul className={` md:flex gap-10  font-bold duration-1000 text-lg 
            ${open ? ' top-4' : '-top-60'}
            
            absolute md:static py-4 mt-4 `}>

                {
                    routes.map(route => <Link key={route.id} route={route}> </Link>)
                }
            </ul>

        </div>
    );
};

export default Navbar;