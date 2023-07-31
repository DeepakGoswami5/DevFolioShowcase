const Skills = ({data}) => {
    return (
        <>
            <div class="flex justify-between mb-1">
                <span class="text-base font-medium text-blue-700 dark:text-white">{data.title}</span>
                <span class="text-sm font-medium text-blue-700 dark:text-white">{data.rating}</span>
            </div>
            <div class="ease-linear	w-full grey-color-bg rounded-none h-2.5 opacity-100	dark:bg-gray-800">
                <div class="h-2.5 rounded-none green-color-bg" style={{width: data.rating}}></div>
            </div>
        </>
    )
}
export default Skills