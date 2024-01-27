import React, { useState } from 'react'
import "../Component/login.css"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    // console.log(typedvalue);

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(username === "user" && password === "password"){
            setError("")
            setIsSubmitted(true)
        }else{
            setError("Invalid username or password")
            setIsSubmitted(false)
        }
    }
  return (
    <div>
        <h1>Login Page</h1>
        {
            isSubmitted ? (
                <div>
                    <p>Welcome, {username}!</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}> 
                    {error && <p className='err'>{error}</p>}
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input required type="text" id="username" placeholder='username' value={username} onChange={((e)=> setUsername(e.target.value))}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input required type="text" id="passsword" placeholder='password' value={password} onChange={((e)=> setPassword(e.target.value))}/>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>

                </form>
            )
        }
        {/* <form onSubmit={handleSubmit}>
            <label>Username: <input type="text" placeholder='username' onChange={((e)=> setTypedValueUser(e.target.value))}/></label>
            <br />
            <label>Password: <input type="password" placeholder='password' onChange={((e)=> setTypedValuePass(e.target.value))}/></label>
            <br />
            <button onClick={((e)=>e.preventDefault())}>Submit</button>
        </form> */}
    </div>
  )
}

export default Login