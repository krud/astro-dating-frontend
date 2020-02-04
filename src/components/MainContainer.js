import React from 'react'
import UserForm from './UserForm'

export default function MainContainer({addUser}) {
    return (
        <main>
            <UserForm addUser={addUser}/>
        </main>
    )
}
