import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';


const notify = (error) => toast.error(error);

const LoginPage = ({ match, history }) => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      login : username,
      password
    });
  }


    let loginUser = async (data) => {
        let response = fetch(`${process.env.REACT_APP_BASEURL}/api/accounts/login/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
         let response_json = (await response).json()
        if ((await response).ok){
            localStorage.setItem('token', (await response_json).token);
            window.location.href = "/";
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
                Login Here!
            </h1>
        </div>
        <div className="form-holder">
          <form onSubmit={handleSubmit}>
            <label className="label">
              Username
            <input className="input" type="text" placeholder="Write username here..."
            onChange={e => setUserName(e.target.value)}/>
            </label>

            <label className="label">
              Password
            <input className="input" type="password" placeholder="Write password here..."
            onChange={e => setPassword(e.target.value)}/>
            </label>
            <input className="submit" type="submit" placeholder="Submit" />

          </form>
            <div>
      <Toaster />
    </div>
            <div className="link-holder">
                <a className='link' href="/register">
                Register
            </a>
            </div>
        </div>
      </div>
    )
}

export default LoginPage
