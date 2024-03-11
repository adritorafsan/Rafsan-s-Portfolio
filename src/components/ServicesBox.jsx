import { MdOutlineSecurity , MdComputer } from "react-icons/md";
import { FaMobile ,  FaBaseball } from "react-icons/fa6";


const ServicesBox = () => {

    const ServicesItems = [
        {
            name :"UI/UX",
            Description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis, iure ullam atque voluptatum minus magnam perferendis maiores. Magni, et.",
            Icon: <MdOutlineSecurity className="text-4xl" />,
            bgColor: "bg-blue-500/70"

        },
        {
            name :"APP Development ",
            Description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis, iure ullam atque voluptatum minus magnam perferendis maiores. Magni, et.",
            Icon: <FaMobile className="text-4xl" />,
            bgColor: "bg-teal-500/70"

        },
        {
            name :"WEB Development",
            Description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis, iure ullam atque voluptatum minus magnam perferendis maiores. Magni, et.",
            Icon: <MdComputer className="text-4xl" />,
            bgColor: "bg-violet-500/70"

        },
        {
            name :"SECURITY",
            Description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis, iure ullam atque voluptatum minus magnam perferendis maiores. Magni, et.",
            Icon: <FaBaseball className="text-4xl" />,
            bgColor: "bg-orange-500/70"

        },
       
    ]

  return (
    <>
        <section className="mt-10 container " id="services">
           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ServicesItems.map(({name,  Description, Icon , bgColor}) => (
                     <div
                      key={name}
                      className={`${bgColor} scale-[1] hover:scale-[1.02] transition-all duration-300 ease-in cursor-pointer flex flex-col gap-3 rounded-lg p-3 text-white`}
                     >
                            { Icon}
                            <h1 className="font-bold text-xl">{name}</h1>
                            <p>{Description}</p>
                     </div>
                ) )}
            </div>
        </section>
    </>
  )
}

export default ServicesBox