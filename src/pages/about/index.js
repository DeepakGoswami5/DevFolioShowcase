import PageHeader from "../../components/pageHeader"
import { ABOUT_PAGE } from "../../constant/data"
const About = () => {
    return (
        <div className="bg-black md:bg-blend-darken max-w-screen-xl mx-auto p-4">
            <PageHeader
                data={ABOUT_PAGE}
            />
            <div className="text-white text-lg	font-semibold text-gray-500 grid grid-rows-1 grid-flow-col gap-4">
                <div>01</div>
                <div>02</div>
            </div>

        </div>
    )
}
export default About