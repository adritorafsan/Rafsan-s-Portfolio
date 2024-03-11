import React from 'react'
import SkillsLevel from './SkillsLevel'

const Skills = () => {
    return (
        <>
            <section className="md:px-4 px-4 max-w-screen-2xl  mt-28 mx-auto">
                <div className="container  ">
                    <div className="flex md:flex-row flex-col md:space-y-0 space-y-6 justify-between items-center">
                        <div className="md:w-1/4 w-full dark:text-white">
                            <SkillsLevel skillname="HTML" parcentage="90%" />
                            <SkillsLevel skillname="CSS" parcentage="93%" />
                            <SkillsLevel skillname="JAVASCRIPT" parcentage="60%" />
                            <SkillsLevel skillname="REACT" parcentage="78%" />
                            <SkillsLevel skillname="TAILWIND CSS" parcentage="87%" />
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