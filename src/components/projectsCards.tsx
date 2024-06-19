import data from '../utils/ProjectsCardsData.json'
import giticon from '../assets/icons/git.svg'

interface keyProp{
    id: string | number,
    title: string,
    description: string,
    github_repo: string,
    image_path: string
}

export default function ProjectsCards(){
    return(
        <>
            {
                data.map((key: keyProp)=>{
                    return(
                        <div className={'w-64 h-fit backdrop-blur-lg bg-gray-500/5 dark:bg-black/80 rounded-3xl shadow-md flex flex-col justify-start items-center pl-2 pr-2  overflow-hidden'} key={key.id}>
                              <div className={'w-64 h-fit bg-gray-500 text-white dark:bg-blue-400 flex justify-center'}>
                                  <p className={'text-2xl font-Oswald '}>{key.title}</p>
                              </div>
                            <div className={'w-full h-fit flex justify-center items-center'}>
                                <p className={'text-gray-700 dark:text-white font-sans mt-2'}>{key.description}</p>
                            </div>
                            <img src={key.image_path} alt="Card Image" className={'mt-3 mb-3 rounded-2xl'}/>
                            <div className={'relative w-64 h-fit bg-gray-500 text-white dark:bg-blue-400 flex justify-center items-center p-1 animate-bounce'}>
                                <p className={'text-2xl font-Oswald mr-2'}>Check on</p>
                                <a href={key.github_repo} target={'_blank'}><img src={giticon} alt="Git Icon" className={'w-10'}/></a>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}