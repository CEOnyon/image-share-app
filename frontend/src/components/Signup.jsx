import { useState } from 'react'


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <form className="signup" onSubmit={handlesubmit}>
            




        </form>
    )

}