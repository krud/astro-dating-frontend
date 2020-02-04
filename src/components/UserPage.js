import React from 'react'
import HoroscopeSection from './HoroscopeSection'

export default function UserPage({horoscopes, user}) {
    // const bday = user.birthday.split("-")
    // const firstElement = bday.shift()
    // const findsign = (user.birthday) => {
        
    // }
    // console.log(bday) 
    // [10, 30]

    return (
        <main>
            <div className="user-details">
                <h2>Welcome, {user.name}!</h2>
                <h2>Your sun sign is {user.sunsign}</h2>
            </div>
            <HoroscopeSection horoscopes={horoscopes} sign={user.sunsign}/>
        </main>
    )
}
