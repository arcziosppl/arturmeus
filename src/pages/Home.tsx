import Typewriter from 'typewriter-effect'
import insta from '../assets/icons/insta.svg'
import git from '../assets/icons/git.svg'
import face from '../assets/icons/face.svg'
import {Button, DarkThemeToggle, Navbar} from "flowbite-react";
import {useRef} from "react";
import {NavTheme} from "../theme/NavbarTheme.ts";
import TechCards from "../components/techCards.tsx";
import dev from '../assets/developer.svg'

export default function Home(){
    const AboutRef = useRef<HTMLElement | null>(null)

    return (
        <div className={''}>
            <Navbar fluid rounded className={'w-full fixed z-20'} theme={NavTheme}>
                <Navbar.Brand href={'/'}>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{'<Artur Meus />'}</span>
                </Navbar.Brand>
                <div className="flex md:order-2 ">
                    <DarkThemeToggle></DarkThemeToggle>
                    <Navbar.Toggle></Navbar.Toggle>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link active={false} className={"cursor-pointer"} onClick={()=>{AboutRef.current?.scrollIntoView({behavior: 'smooth'})}}>About</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <div className={'flex h-screen w-full bg-moon_bckg bg-center bg-no-repeat overflow-hidden'}>
                <div className={'w-3/6 h-screen flex justify-end items-center'}>
                <div className={'flex justify-center items-center w-fit h-fit p-6 bg-white/5 backdrop-blur-lg rounded-3xl animate-pong'}>
                    <div className={'w-96 h-fit flex flex-col justify-center items-start'}>
                        <p className={'text-white text-4xl font-extrabold mt-1'}>Hello, I am Artur</p>
                        <p className={'text-blue-700 font-roboto text-4xl font-extrabold mt-2'}><Typewriter options={{strings: ['Front End-Developer','Back End-Developer', 'Embedded Developer', 'CAD Designer'], loop: true, autoStart: true }} onInit={(typewriter)=> typewriter.pauseFor(1500).deleteAll().start()}></Typewriter></p>
                        <p className={'text-white font-semibold mt-2'}>I am Front-End / Full-Stack Developer. Currently, I am a student of a technical school majoring in programming technology.</p>
                        <div className={'w-full h-fit flex gap-4 mt-2'}>
                            <a href="https://www.instagram.com/pan_hanczol/" target={'_blank'}><img src={insta} alt="instagram icon"/></a>
                            <a href="https://github.com/arcziosppl" target={'_blank'}><img src={git} alt="github icon"/></a>
                            <a href="https://www.facebook.com/profile.php?id=100079576942578" target={'_blank'}><img src={face} alt="facebook icon"/></a>
                        </div>
                        <Button color='blue' className={'mt-2'}>Resume</Button>
                    </div>
                </div>
                </div>
                <div className={'w-3/6 h-screen flex items-center justify-end'}>
                  <div className={'w-[500px] h-4/6 bg-gradient-to-r from-purple-500/30 via-purple-500/30 to-pink-500/30 rounded-l-3xl backdrop-blur-lg animate-slide flex items-center justify-center'}>
                      <img src={dev} alt="Developer photo"/>
                  </div>
                </div>
            </div>
            <section ref={AboutRef} id='about'>
            <div className={'h-screen w-full bg-light_main_color dark:bg-dark_main_color flex flex-col items-center'}>
                <div className={'w-full h-fit flex justify-center pt-2 bg-light_main_color dark:bg-dark_main_color'}>
                    <p className={'text-black dark:text-white font-roboto text-5xl font-extrabold'}>About me</p>
                </div>
                <div className={'w-3/6 h-fit flex flex-col justify-center items-start mt-8'}>
                    <p className={'text-blue-800 dark:text-blue-400 text-3xl font-sans'}>A bit about me</p>
                    <p className={'text-gray-700 dark:text-white font-sans mt-2'}>As Developer, I
                        bring a strong foundation in both front-end and back-end development, combined with a passion
                        for creating seamless user experiences and robust, scalable applications.
                        During my educational path, I learned a lot of technologies that definitely affect my
                        pdroductivity and final product. </p>
                </div>
                <div className={'w-3/6 h-fit flex flex-col justify-center items-start mt-8'}>
                    <p className={'text-blue-800 dark:text-blue-400 text-3xl font-sans'}>Technologies and Tools</p>
                    <p className={'text-gray-700 dark:text-white font-sans mt-2'}>Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops. </p>
                </div>
                <div className={'w-4/6 h-fit flex flex-wrap justify-center items-center mt-8'}>
                    <TechCards></TechCards>
                </div>
            </div>
            </section>
        </div>
    );
}