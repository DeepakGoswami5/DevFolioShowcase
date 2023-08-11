import '../../App.css';
const TimeLine = ({ data, title }) => {
    return (
        <>
            <p className='mb-5 font-black text-3xl text-white'>{title.toUpperCase()}</p>
            <ol class="relative border-l-2 border-gray-200 dark:border-gray-700">
                {data.map((item) => (
                    <>
                        <li class="mb-0 ml-4 mt-10" key={item.id}>
                            <div class="absolute w-5 h-5 green-color-bg rounded-full mt-1 -left-3 border border-green dark:green-color-bg dark:green-color-bg"></div>
                            <h3 class="text-2xl font-semibold green-color dark:green-color">{item.title.toUpperCase()}</h3>
                            <button className="bg-grey-08 font-bold text-white p-2">
                                {item.duration}
                            </button>
                            <p class="italic mb-3 text-base font-normal text-gray-500 dark:text-white">{item.subTitle} ({item.description})</p>
                        </li>
                        <ul class="list-disc ml-5">
                            {item.achievement && item.achievement.map((ach) => (
                                <li class="text-white mb-1 ml-4" key={item.id}>
                                    {ach}
                                </li>
                            ))}
                        </ul>

                    </>
                ))}
            </ol>
        </>
    )
}
export default TimeLine