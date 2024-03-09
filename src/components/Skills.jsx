import React from 'react'

const Skills = () => {
    return (
        <>
            <section className="md:px-4 px-4 max-w-screen-2xl  mt-28 mx-auto">
                <div className="container ">
                    <div className="flex md:flex-row flex-col justify-between items-center">
                        <div className="md:w-2/4 dark:text-white">
                            <SkillsLevel />
                        </div>
                        <div className="relative">
                            <div className="text-center lg:text-7xl text-5xl dark:text-white/5 text-black/5 font-bold">SKILLS</div>
                            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold dark:text-white/80 text-black/80 lg:text-2xl text-lg  ">Skills</h1>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Skills