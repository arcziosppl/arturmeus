import reactIcons from '../assets/icons/react.svg'
export default function TechCards(){
    return(
        <>
            <div className={'w-64 h-fit backdrop-blur-md bg-white/5 rounded-lg'}>
                <img src={reactIcons} alt=""/>
            </div>
        </>
    )
}