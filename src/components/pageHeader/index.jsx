const PageHeader = ({ data }) => {
    return (
        <>
            <div className="text-xl	grey-sub font-semibold text-gray-500 md:ml-11">
                {data.title}
            </div>
            <div className="font-black text-white text-3xl font-semibold text-gray-500 md:ml-11">
                {data.description}
            </div>
        </>
    )
}
export default PageHeader