import Head from 'next/head'
import Image from 'next/image'
import Badge from '../components/badge'
import youngstownThumb from '../public/projects/thumbnails/youngstown-phantoms.png'

export default function Projects() {
    return (
        <>
            <Head>
                <title key="title">Projects placeholder</title>
            </Head>

            <div>
                <div className="bg-white p-6 my-8 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out flex space-x-6">
                    <div>
                        <Image src={youngstownThumb} className="rounded-md" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-semibold mb-4 text-gray-700">Youngstown Phantoms</h2>
                        <div>
                            <Badge className="bg-pink-500">PHP</Badge>
                            <Badge className="bg-pink-500">MySQL</Badge>
                            <Badge className="bg-pink-500">WordPress</Badge>
                            <Badge className="bg-blue-500">HTML5</Badge>
                            <Badge className="bg-blue-500">CSS3</Badge>
                            <Badge className="bg-blue-500">Javascript</Badge>
                            <Badge className="bg-blue-500">jQuery</Badge>
                            <Badge className="bg-blue-500">Bootstrap</Badge>
                            <Badge className="bg-yellow-500">Adobe Photoshop</Badge>
                            <Badge className="bg-yellow-500">Git</Badge>
                            <Badge className="bg-gray-500">GitHub Pages</Badge>
                        </div>
                        <div>
                            <a href="" className="text-gray-700">youngstownphantoms.com</a>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 my-8 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out flex space-x-6 w-1/2">
                    <div>
                        <Image src={youngstownThumb} className="rounded-md" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-semibold mb-4 text-gray-700">Youngstown Phantoms</h2>
                        <div>
                            <Badge className="bg-pink-500">PHP</Badge>
                            <Badge className="bg-pink-500">MySQL</Badge>
                            <Badge className="bg-pink-500">WordPress</Badge>
                            <Badge className="bg-blue-500">HTML5</Badge>
                            <Badge className="bg-blue-500">CSS3</Badge>
                            <Badge className="bg-blue-500">Javascript</Badge>
                            <Badge className="bg-blue-500">jQuery</Badge>
                            <Badge className="bg-blue-500">Bootstrap</Badge>
                            <Badge className="bg-yellow-500">Adobe Photoshop</Badge>
                            <Badge className="bg-yellow-500">Git</Badge>
                            <Badge className="bg-gray-500">GitHub Pages</Badge>
                        </div>
                        <div>
                            <a href="" className="text-gray-700">youngstownphantoms.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
  }
