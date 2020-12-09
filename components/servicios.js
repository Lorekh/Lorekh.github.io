import React from 'react'

const Servicios = () => {
  return (
		<div className="flex flex-col md:flex-row mt-2 md:pl-20 md:pr-20">
			<div className="w-auto md:w-2/4">
				<div className="px-6 py-4">
					<p className="font-Fredoka text-shadow-3xl text-2xl text-center text-white">RECAMBIOS</p>
						<p className="text-white text-l mt-4 text-center">Encuentra todo lo que buscas desde lo más simple hasta lo que no sabías que existía.</p>
							<p className="text-white text-l text-center">
                    Haz que tu patinete refleje tu esencia, con nosotros puedes personalizarlo y mantenerlo en perfecto estado.</p>
                </div>
            </div>

            <div className="w-auto md:w-2/4">
                <div className="px-6 py-4">
                    <p className="font-Fredoka text-shadow-3xl text-2xl text-center text-white">SERVICIO TECNICO</p>
                        <p className="font-Fredoka text-red text-3xl mt-4 text-center">¿Tu patinete no funciona como debería?</p>

                        <p className="text-white text-l text-center">
                        Hacemos todo tipo de reparaciones desde eléctricas hasta mecánicas.</p>
                        <p className="text-white text-l text-center">Todo para que tu patinete este y se mantenga en buen estado.</p>
                </div>
            </div>
        </div>
    )
}

export default Servicios;