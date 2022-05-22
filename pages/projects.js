import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Badge from '../components/badge'
import TWILadderThumb from '../public/projects/thumbnails/twi-ladder.png'
import ZynexThumb from '../public/projects/thumbnails/zynex.png'
import ZynexPortalThumb from '../public/projects/thumbnails/zynex-portal.png'
import SPPStoreThumb from '../public/projects/thumbnails/sppstore.png'
import SPPDBThumb from '../public/projects/thumbnails/sppdb.png'
import SPPAddictThumb from '../public/projects/thumbnails/sppaddict.png'
import HorseMountThumb from '../public/projects/thumbnails/horsemount.png'
import SiegeCraftThumb from '../public/projects/thumbnails/siegecraft.png'
import YoungstownThumb from '../public/projects/thumbnails/youngstown-phantoms.png'
import ShadowsFallThumb from '../public/projects/thumbnails/shadows-fall.png'
import ForTodayThumb from '../public/projects/thumbnails/for-today.png'
import ValiThumb from '../public/projects/thumbnails/vali.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Projects() {
    return (
        <>
            <Head>
                <title key="title">Projects placeholder</title>
            </Head>

            <div>

                {/* Youngstown Phantoms */}
                <div className="bg-white my-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition duration-300 ease-in-out flex">
                    <div className="text-0 flex-none">
                        <Link href="/projects/youngstown-phantoms.png">
                            <a target="_blank">
                                <Image src={YoungstownThumb} className="rounded-l-lg" />
                            </a>
                        </Link>
                    </div>
                    <div className="px-6 py-4 flex flex-col">
                        <h2 className="text-4xl font-semibold text-gray-700">Youngstown Phantoms</h2>
                        <div className="mt-1 mb-4">
                            <Badge className="bg-pink-500">PHP</Badge>
                            <Badge className="bg-pink-500">WordPress</Badge>
                        </div>
                        <p className="prose-md">
                        One of many custom WordPress themes developed that includes integrations for plugins and third party extensions such as Spotify, Ticketmaster, calendar/scheduling platforms, and social media marketing platforms.
                        </p>
                        <div className="py-4 mt-auto flex justify-between">
                            <a href="https://www.youngstownphantoms.com/" className="text-gray-600" target="_blank">
                                <FontAwesomeIcon icon={ faLink } className="inline-block text-gray-600 mr-1" size="xs" />
                                youngstownphantoms.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-6 my-8">
                    {/* Shadows Fall */}
                    <div className="bg-white rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition duration-300 ease-in-out flex w-full">
                        <Image src={ShadowsFallThumb} className="rounded-lg" />
                    </div>

                    {/* For Today 1/2 */}
                    <div className="bg-white rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition duration-300 ease-in-out flex w-full">
                        <Image src={ForTodayThumb} className="rounded-lg" />
                    </div>

                    {/* Vali 1/2 */}
                    <div className="bg-white rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition duration-300 ease-in-out flex w-full">
                        <Image src={ValiThumb} className="rounded-lg" />
                    </div>
                </div>

                {/* TWI Ladder */}
                <div className="bg-white my-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition duration-300 ease-in-out flex">
                    <div className="text-0 flex-none">
                        <Image src={TWILadderThumb} className="rounded-l-lg" />
                    </div>
                    <div className="px-6 py-4 flex flex-col">
                        <h2 className="text-4xl font-semibold text-gray-700">TWI Ladder</h2>
                        <div className="mt-1 mb-4">
                            <Badge className="bg-pink-500">PHP</Badge>
                            <Badge className="bg-pink-500">CodeIgniter</Badge>
                            <Badge className="bg-pink-500">MySQL</Badge>
                            <Badge className="bg-royal-blue-500">HTML5</Badge>
                            <Badge className="bg-royal-blue-500">CSS3</Badge>
                            <Badge className="bg-royal-blue-500">Javascript</Badge>
                            <Badge className="bg-royal-blue-500">jQuery</Badge>
                        </div>
                        <p className="prose-md">
                            TWI Ladder was a competitive gaming tournament and ladder website designed and developed for Tripwire Interactive. The primary focus of this was <a href="https://en.wikipedia.org/wiki/Red_Orchestra_2:_Heroes_of_Stalingrad" target="_blank">Red Orchestra 2</a> and Killing Floor 2.
                        </p>
                        <div className="py-4 mt-auto flex justify-between">
                            <a href="https://www.twiladder.com/" className="text-gray-600"><FontAwesomeIcon icon={ faLink } className="inline-block text-gray-600" size="xs" /> twiladder.com</a>
                            <a href="https://www.twiladder.com/" className="text-gray-600"><FontAwesomeIcon icon={ faGithub } className="inline-block text-gray-600" size="xs" /> ktross/twiladder</a>
                        </div>
                    </div>
                </div>

                {/* Zynex */}
                <div className="bg-white my-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition duration-300 ease-in-out flex">
                    <div className="text-0 flex-none">
                        <Image src={ZynexThumb} className="rounded-l-lg" />
                    </div>
                    <div className="px-6 py-4 flex flex-col">
                        <h2 className="text-4xl font-semibold text-gray-700">Zynex Medical</h2>
                        <div className="mt-1 mb-4">
                            <Badge className="bg-pink-500">PHP</Badge>
                        </div>
                        <div className="py-4 mt-auto flex justify-between">
                            <a href="https://www.twiladder.com/" className="text-gray-600"><FontAwesomeIcon icon={ faLink } className="inline-block text-gray-600" size="xs" /> twiladder.com</a>
                        </div>
                    </div>
                </div>

                {/* Zynex Sales Portal */}
                <div className="bg-white my-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition duration-300 ease-in-out flex">
                    <div className="text-0 flex-none">
                        <Image src={ZynexPortalThumb} className="rounded-l-lg" />
                    </div>
                    <div className="px-6 py-4 flex flex-col">
                        <h2 className="text-4xl font-semibold text-gray-700">Zynex Sales Portal</h2>
                        <div className="mt-1 mb-4">
                            <Badge className="bg-pink-500">PHP</Badge>
                        </div>
                        <div className="py-4 mt-auto flex justify-between">
                            <a href="https://www.twiladder.com/" className="text-gray-600"><FontAwesomeIcon icon={ faLink } className="inline-block text-gray-600" size="xs" /> twiladder.com</a>
                        </div>
                    </div>
                </div>

                {/* SPP Store */}
                <div className="bg-white my-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition duration-300 ease-in-out flex">
                    <div className="text-0 flex-none">
                        <Image src={SPPStoreThumb} className="rounded-l-lg" />
                    </div>
                    <div className="px-6 py-4 flex flex-col">
                        <h2 className="text-4xl font-semibold text-gray-700">SPP Store</h2>
                        <div className="mt-1 mb-4">
                            <Badge className="bg-pink-500">PHP</Badge>
                        </div>
                        <div className="py-4 mt-auto flex justify-between">
                            <a href="https://www.twiladder.com/" className="text-gray-600"><FontAwesomeIcon icon={ faLink } className="inline-block text-gray-600" size="xs" /> twiladder.com</a>
                        </div>
                    </div>
                </div>
                {/* SPP Addict */}
                <div className="bg-white my-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition duration-300 ease-in-out flex">
                    <div className="text-0 flex-none">
                        <Image src={SPPAddictThumb} className="rounded-l-lg" />
                    </div>
                    <div className="px-6 py-4 flex flex-col">
                        <h2 className="text-4xl font-semibold text-gray-700">SPP Addict</h2>
                        <div className="mt-1 mb-4">
                            <Badge className="bg-pink-500">PHP</Badge>
                        </div>
                        <div className="py-4 mt-auto flex justify-between">
                            <a href="https://www.twiladder.com/" className="text-gray-600"><FontAwesomeIcon icon={ faLink } className="inline-block text-gray-600" size="xs" /> twiladder.com</a>
                        </div>
                    </div>
                </div>

                {/* SPPDB */}
                <div className="bg-white my-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition duration-300 ease-in-out flex">
                    <div className="text-0 flex-none">
                        <Image src={SPPDBThumb} className="rounded-l-lg" />
                    </div>
                    <div className="px-6 py-4 flex flex-col">
                        <h2 className="text-4xl font-semibold text-gray-700">SPPDB</h2>
                        <div className="mt-1 mb-4">
                            <Badge className="bg-pink-500">PHP</Badge>
                        </div>
                        <div className="py-4 mt-auto flex justify-between">
                            <a href="https://www.twiladder.com/" className="text-gray-600"><FontAwesomeIcon icon={ faLink } className="inline-block text-gray-600" size="xs" /> twiladder.com</a>
                        </div>
                    </div>
                </div>

                {/* SPP Mail */}

                {/* HorseMount */}
                <div className="bg-white my-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition duration-300 ease-in-out flex">
                    <div className="text-0 flex-none">
                        <Image src={HorseMountThumb} className="rounded-l-lg" />
                    </div>
                    <div className="px-6 py-4 flex flex-col">
                        <h2 className="text-4xl font-semibold text-gray-700">HorseMount</h2>
                        <div className="mt-1 mb-4">
                            <Badge className="bg-pink-500">Java</Badge>
                            <Badge className="bg-pink-500">Bukkit</Badge>
                            <Badge className="bg-pink-500">CraftBukkit</Badge>
                        </div>
                        <p>
                            HorseMount is a flexible player mount system. It allows players to summon and dismiss horse mounts with a simple command. Players can also choose to set their default mount via command or sign from 140 different mount types.
                        </p>
                        <div className="py-4 mt-auto flex justify-between">
                            <a href="https://www.twiladder.com/" className="text-gray-600"><FontAwesomeIcon icon={ faLink } className="inline-block text-gray-600" size="xs" /> twiladder.com</a>
                        </div>
                    </div>
                </div>

                <div className="bg-white my-8 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition duration-300 ease-in-out flex">
                    <div className="text-0 flex-none">
                        <Image src={SiegeCraftThumb} className="rounded-l-lg" />
                    </div>
                    <div className="px-6 py-4 flex flex-col">
                        <h2 className="text-4xl font-semibold text-gray-700">SiegeCraft</h2>
                        <div className="mt-1 mb-4">
                            <Badge className="bg-pink-500">Java</Badge>
                            <Badge className="bg-pink-500">Bukkit</Badge>
                            <Badge className="bg-pink-500">CraftBukkit</Badge>
                        </div>
                        <p>
                            HorseMount is a flexible player mount system. It allows players to summon and dismiss horse mounts with a simple command. Players can also choose to set their default mount via command or sign from 140 different mount types.
                        </p>
                        <div className="py-4 mt-auto flex justify-between">
                            <a href="https://www.twiladder.com/" className="text-gray-600"><FontAwesomeIcon icon={ faLink } className="inline-block text-gray-600" size="xs" /> twiladder.com</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
  }
