
import logo from "../assets/M_final.png";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

const Nav = () => {
    const [chatArrow, setChatArrow] = useState(false);
    return (
        <div className='flex justify-center items-center text-white px-5 md:px-14 lg:px-20 '>
            <div className='max-w-[1400px] w-full flex items-center justify-between'>
                <div className='flex w-[50px]'>
                    <img src={logo} alt='mana' className='object-cover' />
                    {/* <div className="mt-4 text-blue-500 cursor-pointer text-xl">ana</div> */}
                </div>

                <div className='hidden md:flex gap-5 items-center text-white text-2xl font-semibold '>
                    <Link to='#clients' smooth className="hover:scale-105 hover:text-blue-500">
                        Clients
                    </Link>
                    <Link to='#services' smooth className="hover:scale-105 hover:text-blue-500">
                        Services
                    </Link>
                    <Link to='#team' smooth className="hover:scale-105 hover:text-blue-500">
                        About Us
                    </Link>
                    <Link to='#contacts' smooth className="hover:scale-105 hover:text-blue-500">
                        Contacts
                    </Link>
                </div>
                <div
                    className='flex items-center text-xl text-white gap-2 '
                    onMouseLeave={() => setChatArrow(false)}
                    onMouseOver={() => setChatArrow(true)}
                >
                    
                
                </div>
            </div>
        </div>
    );
};

export default Nav;
