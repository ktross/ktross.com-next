export default function Bio() {
    const experienceStart = 2006
    const experience = new Date().getFullYear() - experienceStart
    return (
        <div className="flex space-x-14 my-14">
            <div>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Hi there! I'm Kyle Ross, a <span className="text-cinnabar-500">Full Stack Engineer</span> with over <span title={experienceStart + ' to present'}>{experience} years</span> of experience</h3>
                <div className="mt-5 prose-lg prose-indigo text-gray-600 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                    <p>Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.</p>
                    <p>Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.</p>
                    <div></div>
                </div>
            </div>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-prose flex-none">
                <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                        <img src="https://cdn.ktross.com/images/kyle-ross.png" alt="Kyle Ross" title="Kyle Ross"
                            width="600" height="600" className="rounded-lg shadow-lg object-cover object-center"/>
                    </div>
                </figure>
            </div>
        </div>
    )
}
