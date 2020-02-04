import React from 'react'
import HoroscopeCard from './HoroscopeCard'

export default function HoroscopeList({mysign}) {

    return (
        <div>
            <HoroscopeCard content={mysign[0]}/>
        </div>
    )
}
