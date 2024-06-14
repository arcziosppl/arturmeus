import data from '../utils/TechCardsData.json'

interface keyProp{
    id: string | number,
    title: string
    image_path: string
}

export default function TechCards(){
    console.log(data)
    return(
        <>
            {
                data.map((key: keyProp)=>{
                    return(
                        <div className={'w-64 h-fit p-1 backdrop-blur-lg bg-gray-500/5 rounded-lg shadow-md flex justify-start items-center dark:bg-white/10'} key={key.id}>
                            <div>
                                <img src={key.image_path} alt={key.title + "Icon"}/>
                            </div>
                            <div>
                                <p className={'font-roboto text-xl font-bold text-black ml-1 dark:text-white'}>{key.title}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}