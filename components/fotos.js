import React from 'react'

const Fotos = () => {
    return (
        <div className="flex flex-col md:grid md:grid-cols-3 mt-4 md:pl-20 md:pr-20">
            <div className="card mx-2 shadow-2xl">
                <img src="rueda.jpeg" className="w-full rounded-lg"/>
            </div>

            <div className="card mx-2 shadow-2xl">
                <img src="/reparacion.jpg" className="w-full rounded-lg"/>                
            </div>

            <div className="card mx-2 shadow-2xl">
                <img src="/pinza.jpeg" className="w-full rounded-lg"/>
            </div>
        </div>
    )
}

export default Fotos