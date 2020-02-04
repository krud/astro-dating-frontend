import React from 'react'

export default function HoroscopeCard({content}) {
    return (
        <div className="horoscope-card">
            <h3>{content.sign}</h3>
            <h5>Your monthly horoscope:</h5>
            <ul>
                <li>Social: {content.social}</li>
                <li>Work: {content.work}</li>
                <li>Emotional: {content.emotional}</li>
                <li>Dating: {content.dating}</li>
            </ul>
        </div>
    )
}
