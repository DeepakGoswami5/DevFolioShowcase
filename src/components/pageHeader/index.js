const PageHeader = ({data}) => {
    return (
        <>
            <div className="text-lg	font-semibold text-gray-500">
                {data.title}
            </div>
            <div className="font-black text-white text-3xl font-semibold text-gray-500">
                {data.description}
            </div>
        </>
    )
}
export default PageHeader