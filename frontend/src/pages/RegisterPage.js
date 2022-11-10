import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const notify = (error) => toast.error(error);


const RegisterPage = ({ match, history }) => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();


    const handleSubmit = async e => {
    e.preventDefault();
    const response = await registerUser({
        username,
        password,
        first_name,
        last_name,
        email
    });
  }
    let registerUser = async (data) => {
        let response = fetch(`${process.env.REACT_APP_BASEURL}/api/accounts/register/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })

        let response_json = (await response).json()
        if ((await response).ok){
            window.location.href = "/login";
        }
        else
        {
        for (const [key, value] of Object.entries(await response_json)) {
        notify(`${key}: ${value}`)
        }
        }
        return response_json
    }

    return (
         <div className="login-holder">
        <div className="text-holder">
            <h1 className="title">
                Register Here!
            </h1>
        </div>
        <div className="form-holder">
          <form onSubmit={handleSubmit}>
            <label className="label">
              First Name
            <input className="input" type="text" placeholder="Write First Name here..."
            onChange={e => setFirstName(e.target.value)}/>
            </label>
            <label className="label">
              Last Name
            <input className="input" type="text" placeholder="Write Last Name here..."
            onChange={e => setLastName(e.target.value)}/>
            </label>
              <label className="label">
              Username
            <input className="input" type="text" placeholder="Write username here..."
            onChange={e => setUserName(e.target.value)}/>
            </label>
              <label className="label">
              Email
            <input className="input" type="text" placeholder="Write Email here..."
            onChange={e => setEmail(e.target.value)}/>
            </label>
            <label className="label">
              Password
            <input className="input" type="password" placeholder="Write password here..."
            onChange={e => setPassword(e.target.value)}/>
            </label>
            <input className="submit" type="submit" placeholder="Register"  value='Register'/>
          </form>
            <div>
      <Toaster />
    </div>
        </div>

      </div>
    )
}

export default RegisterPage
