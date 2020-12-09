import React from 'react'

function Header() {
    return (
        <header className="h-screen w-full bg-patinete-movil bg-no-repeat bg-center bg-cover lg:bg-patinete-header">
            <div className="w-full  bg-black">
                <div className="flex">
                    <img src="/Logo_HanZcooter.png" className="h-20 m-auto"/>
                </div>
            </div>
            <div className="absolute inset-left-0 top-0 pt-32 pl-20">
                
            </div>
            <div className="absolute inset-x-0 bottom-0">
                <div className="">
                    <p className="text-center font-Titan text-white text-shadow-3xl mt-8 mb-8 text-2xl md:text-6xl">Te ofrecemos lo mejor donde lo necesites</p>
                </div>
            </div>
      </header>
    )
}

export default Header;