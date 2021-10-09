export default function Bio() {
    const experienceStart = 2006
    const experience = new Date().getFullYear() - experienceStart
    return (
        <div className="md:flex space-x-14 my-14">
            <div>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Hi there! I&apos;m Kyle Ross, a <span className="text-cinnabar-500">Full Stack Engineer</span> with
                    over <span title={experienceStart + ' to present'}>{experience} years</span> of experience
                </h3>
                <div className="mt-5 prose-lg text-gray-600 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                    <p>
                        I started building websites as a hobby in the early 2000s, and enjoyed it so much that I decided
                        to make a career out of it. I have spent the past {experience} years developing websites and software
                        professionally. The eastern United States is where I currently call home, but I am comfortable working in
                        different time zones.
                    </p>
                    <p>
                        Lately I have been working with Docker, Kubernetes, Jenkins/GitHub Actions, AWS services, and rapidly
                        expanding my DevOps knowledge. PHP/Laravel has been my primary language most recently, but I have also
                        worked with many other languages and frameworks.
                    </p>
                    <p>
                        If you would like to reach out, please direct all inquiries
                        to <a href="mailto:kyle@ktross.com" className="text-cinnabar-500" rel="noopener noreferrer">kyle@ktross.com</a>
                    </p>
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
