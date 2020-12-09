import React from 'react'


export default function social() {
    return (
        <div className="space-y-2">
            <div>
                <h3 className="font-mono text-2xl text-center">Siguenos en nuestras redes sociales para mantenerte al dia</h3>
            </div>

            <div className="grid grid-cols-3">
                <div>
                    <a href="https://www.instagram.com/hanzcooter/" rel="noopener noreferrer" target="_blank">
                    <img src="/instagram_icon.svg" className="m-auto mt-2 w-24 md:w-40" alt="Ig-QR"/></a>
                </div>

                <div>
                    <a href="https://www.facebook.com/HanZcooter-103502161549857" rel="noopener noreferrer" target="_blank">
                    <img src="/facebook_icon.svg" className="m-auto mt-2 w-24 md:w-40" alt="Facebook-Logo"/>
                    </a>
                </div>

                <div>
                    <img src="/twitter_icon.svg" className="m-auto mt-2 w-24 md:w-40" alt="Twitter-Logo"/>
                </div>
            </div>
        </div>
    )
}