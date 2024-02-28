

const About = () => {
  return (
    <>
      <section className="md:px-4 px-4 max-w-screen-2xl md:mt-0 mt-28 mx-auto">
        <div className="container">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="relative">
              <div className="text-center lg:text-7xl text-5xl dark:text-white/5 text-black/5 font-bold">ABOUT</div>
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold dark:text-white/80    text-black/80 lg:text-2xl text-lg  ">About Me</h1>
            </div>
            <div className="md:w-2/4 dark:text-white">
              <p>Lorem ipsum dolor, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, autem!sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure corrupti, amet consequatur, necessitatibus nesciunt sunt odit mollitia, cum exercitationem perspiciatis praesentium optio itaque commodi. Quod voluptate officiis consequatur deserunt tenetur! Itaque facere voluptate eligendi doloribus eveniet sed, perspiciatis dignissimos quis beatae laboriosam.</p><br />
              <p>Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, explicabo aspernatur doloremque beatae voluptatum ex error enim tempore voluptate adipisci, iusto magni eveniet omnis? Quis odit nihil explicabo porro dolorem! sit amet consectetur adipisicing elit. Itaque, ex!</p>
              <div>
                <div className="flex md:justify-start justify-center mt-6 space-x-3 ">
                  <a href="#" className="primary-btn md:text-xl text-sm">Download Resume</a>
                  <a href="https://www.instagram.com/adritorafsan/" target="_blank" className="primary-btn1">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About