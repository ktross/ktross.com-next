import NavPrimary from './nav-primary'
import NavSocial from './nav-social'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [isOpen, setisOpen] = React.useState(false);
    return (
        <>
            <div className="md:flex text-center justify-center w-full md:px-6 bg-white shadow-sm">
                <header className="md:flex items-center justify-between py-6 w-full max-w-screen-xl">
                    <div className="flex items-center justify-between md:inline-block px-4 md:px-0">
                        <div className="text-4xl font-extrabold text-right leading-none tracking-wide">
                            Kyle Ross
                            <div className="text-sm font-normal -mt-1">Full Stack Engineer</div>
                        </div>
                        <button onClick={() => setisOpen(!isOpen)} className="md:hidden rounded-md h-6 w-10 p-2 inline-flex items-center justify-center focus:outline-none">
                            {!isOpen && (
                                <FontAwesomeIcon className="fill-current text-black h-6" icon={ faBars }/>
                            )}
                            {isOpen && (
                                <FontAwesomeIcon className="fill-current text-black h-6" icon={ faTimes }/>
                            )}
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <NavPrimary linkClass="hover:text-cinnabar-500"/>
                    </div>
                    <div className="hidden md:block">
                        <NavSocial/>
                    </div>
                </header>
            </div>
            {isOpen && (
            <div className="md:hidden absolute top-26 left-0 w-full px-4 py-6 bg-white shadow-sm">
                <NavPrimary linkClass="block py-2 hover:text-cinnabar-500"/>
            </div>
            )}
        </>
    )
}
