import { useEffect, useState } from "react"
import { TABS } from "../../constant/data"
const NavBar = () => {
    const [currentTab, setCurrentTab] = useState("home")
    const [isNavBar, setIsNavBar] = useState(false)
    const handleTabChange = (e) => {
        setCurrentTab(e)
    }
    const handleNavabar = () => {
        setIsNavBar(!isNavBar)
    }
    useEffect(() => {

    }, [currentTab])
    return (
        <nav className="bg-black border-black-200 dark:bg-black-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Deepak Goswami" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Deepak Goswami</span>
                </a>
                <button
                    type="button"
                    onClick={handleNavabar}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-500 rounded-lg md:hidden hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-green-200 dark:text-green-400 dark:hover:bg-black-700 dark:focus:ring-black-600"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${!isNavBar ? `hidden` : null}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black-100 rounded-lg bg-black-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-black-800 md:dark:bg-black-900 dark:border-black-700">
                        {TABS.map((item, ind) => (
                            <li key={item.id + ind}>
                                <a
                                    href={item.id}
                                    onClick={() => handleTabChange(item.id)}
                                    className={`block py-2 pl-3 pr-4 text-grey text-xl hover:text-green-600 bg-black-700 rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:dark:text-black-500 ${currentTab == item.id ? `underline decoration-4 underline-offset-8 decoration-green-700` : ''}`}
                                    aria-current="page"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar