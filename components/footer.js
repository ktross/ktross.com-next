import NavPrimary from './nav-primary'
import NavSocial from './nav-social'

export default function Footer() {
    return (
        <footer className="flex flex-none justify-around items-end w-full px-6 bg-cinnabar-500">
            <div className="max-w-screen-xl py-6 text-gray-200 text-lg">&copy;2006-{ new Date().getFullYear() } Kyle Ross</div>
            <div className="text-right">
                <NavSocial className="my-6" linkClass="text-gray-900"/>
                <NavPrimary className="my-6" linkClass="text-white hover:text-gray-200"/>
            </div>
        </footer>
    )
}
