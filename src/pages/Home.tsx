import Typewriter from 'typewriter-effect'
import insta from '../assets/icons/insta.svg'
import git from '../assets/icons/git.svg'
import face from '../assets/icons/face.svg'
import {Button, DarkThemeToggle, Navbar} from "flowbite-react";
import {useEffect, useRef} from "react";
import {NavTheme} from "../theme/NavbarTheme.ts";
import TechCards from "../components/techCards.tsx";
import dev from '../assets/developer.svg'
import ProjectsCards from "../components/projectsCards.tsx";
import { Footer } from "flowbite-react";


export default function Home(){
    const AboutRef = useRef<HTMLElement | null>(null)
    const ServicesRef = useRef<HTMLElement | null>(null)
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current!.classList.add('animate-pong')
                    observer.unobserve(ref.current!);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
    }, []);

    return (
        <>
            <div className={'fixed w-full z-20 flex justify-center'}>
            <Navbar fluid className={'w-11/12 rounded-3xl m-2'} theme={NavTheme}>
                <Navbar.Brand href={'/'}>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{'<Artur Meus />'}</span>
                </Navbar.Brand>
                <div className="flex md:order-2 ">
                    <DarkThemeToggle></DarkThemeToggle>
                    <Navbar.Toggle></Navbar.Toggle>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link active={false} className={"cursor-pointer"} onClick={()=>{AboutRef.current?.scrollIntoView({behavior: 'smooth'})}}>About</Navbar.Link>
                    <Navbar.Link active={false} className={"cursor-pointer"} onClick={()=>{ServicesRef.current?.scrollIntoView({behavior: 'smooth'})}}>Projects</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            </div>
            <div className={'flex h-screen w-full bg-moon_bckg bg-center bg-no-repeat overflow-hidden'}>
                <div className={'w-full lg:w-3/6 h-screen flex justify-center lg:justify-end items-center'}>
                <div className={'flex justify-center items-center w-fit h-fit p-6 bg-white/5 backdrop-blur-lg rounded-3xl animate-pong'}>
                    <div className={'w-10/12 lg:w-96 h-fit flex flex-col justify-center items-start'}>
                        <p className={'text-white text-4xl font-extrabold mt-1'}>Hello, I am Artur</p>
                        <p className={'text-blue-700 font-roboto text-4xl font-extrabold mt-2'}><Typewriter options={{strings: ['Front-End Developer','Back-End Developer', 'Embedded Developer', 'CAD Designer'], loop: true, autoStart: true }} onInit={(typewriter)=> typewriter.pauseFor(1500).deleteAll().start()}></Typewriter></p>
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
                <div className={'w-3/6 h-screen items-center justify-end hidden lg:flex'}>
                  <div className={'w-[500px] h-4/6 bg-gradient-to-r from-purple-500/30 via-purple-500/30 to-pink-500/30 rounded-l-3xl backdrop-blur-lg animate-slide flex items-center justify-center'}>
                      <img src={dev} alt="Developer photo"/>
                  </div>
                </div>
            </div>
            <section ref={AboutRef} id='about'>
            <div className={'h-hit  w-full bg-light_main_color dark:bg-dark_main_color flex flex-col items-center pb-8'}>
                    <p className={'text-black dark:text-white font-Oswald text-5xl mt-2'}>About me</p>
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
                <div className={`w-4/6 h-fit flex flex-wrap justify-center items-center mt-8 gap-4`} ref={ref}>
                    <TechCards></TechCards>
                </div>
            </div>
            </section>
            <section ref={ServicesRef} id='projects'>
                <div
                    className={'h-hit  w-full bg-light_main_color2 dark:bg-dark_main_color2 flex flex-col items-center pb-8'}>
                        <p className={'text-black dark:text-white font-Oswald text-5xl  mt-2'}>Projects</p>
                    <div className={'w-full h-fit flex flex-col justify-start items-center'}>
                        <div className={'w-3/6 h-fit flex flex-col justify-center items-start mt-8'}>
                            <p className={'text-blue-800 dark:text-blue-400 text-3xl font-sans'}>About my projects</p>
                            <p className={'text-gray-700 dark:text-white font-sans mt-2'}>During my education, I learned many languages and technologies. Below are some of the projects I
                                have done over the years.</p>
                        </div>
                        <div className={'w-4/6 h-fit flex flex-wrap justify-center items-center mt-8 gap-4'}>
                            <ProjectsCards></ProjectsCards>
                        </div>
                    </div>
                </div>
            </section>
            <Footer container className={'rounded-none'}>
                <Footer.Copyright href="#" by="Artur Meus" year={2024} />
                <Footer.LinkGroup>
                    <Footer.Link href="#">Contact</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </>
    );
}