import {DarkThemeToggle, Navbar} from "flowbite-react";
import {useEffect} from "react";

export default function Header(){

    useEffect(() => {
        const about = document.getElementById('about') as HTMLElement;

        about.scrollIntoView({behavior: "smooth"});
    }, []);


    return (
        <Navbar fluid rounded className={'w-full fixed z-20'}>
            <Navbar.Brand href={'/'}>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{'<Artur Meus />'}</span>
            </Navbar.Brand>
            <div className="flex md:order-2 ">
                <DarkThemeToggle></DarkThemeToggle>
                <Navbar.Toggle></Navbar.Toggle>
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" onClick={()=>window.scrollTo({top: 100, behavior: 'smooth'})}>About</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}