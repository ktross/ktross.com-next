import NavPrimary from './nav-primary'
import NavSocial from './nav-social'

export default function Footer() {
    return (
        <footer className="md:flex flex-none w-full justify-center px-6 bg-cinnabar-500">
            <div className="md:flex justify-between w-full max-w-screen-xl items-end">
                <div className="py-6 text-gray-200 text-lg text-center md:text-left">&copy;2006-{ new Date().getFullYear() } Kyle Ross</div>
                <div className="hidden md:block text-right">
                    <NavSocial className="my-6" linkClass="text-gray-900"/>
                    <NavPrimary className="my-6" linkClass="text-white hover:text-gray-200"/>
                </div>
            </div>
        </footer>
    )
}
