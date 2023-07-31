import PageHeader from "../../components/pageHeader"
import Skills from '../../components/skills'
import { ABOUT_PAGE, DESIGNATION, ABOUT_SUMMARY, SKILLS } from "../../constant/data"
const About = () => {
    return (
        <div className="bg-black md:bg-blend-darken max-w-screen-xl md:mx-auto p-4">
            <PageHeader
                data={ABOUT_PAGE}
            />
            <div className="md:m-12 text-white font-semibold text-gray-500">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <img class="inline w-96	h-96 border-current" src="/images/batman-background-mobile.jpg" alt="..." />
                    </div>
                    <div>
                        <p style={{ color: '#18d26e' }} className="text-2xl ont-family-segoe font-semibold">{DESIGNATION}</p>
                        <p className="text-sm font-family-segoe leading-6 italic">{ABOUT_SUMMARY}</p>
                    </div>
                </div>
                <div className="text-xl	grey-sub font-semibold text-gray-500 mt-4">
                    Skills
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {SKILLS.map((item) => (
                        <div>
                            <Skills
                                data={item}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default About