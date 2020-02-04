import React from 'react'
import HoroscopeList from './HoroscopeList'


export default function HoroscopeSection({horoscopes, sign}) {


    const findsign = () => horoscopes
        .filter(horoscope => {
            return (horoscope.sign
                .toLowerCase()
                .includes(sign.toLowerCase())
                )
        })

    return (
        <div className="horoscope-section">
            <HoroscopeList mysign={findsign()}/>
        </div>
    )
}
