import React, { useState } from 'react'
import Results from './Results'
import xyz from './img/gitHUB.png'

const MainPage = () => {
    const [userName, setUserName] = useState("")
    const [apiData, setApiData] = useState([])
    const [user, setUser] = useState([])

    const eventHandle = async (e) => {
        e.preventDefault();
        await apiFetch()
        await apiuser()
    }

    const apiFetch = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${userName}/repos`)
            const resp = await response.json();
            setApiData(resp)
            console.log(resp)
        } catch (err) {
            console.log("error", err)
        }
    }

    const apiuser = async () => {
        try {
            const userResponse = await fetch(`https://api.github.com/users/${userName}`)
            const userResp = await userResponse.json();
            setUser(userResp)
            console.log("USER", userResp)
        } catch (err) {
            console.log("error", err)
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="navbar">
                        <div className="col-2 ">
                            <img src={xyz} className= "img-fluid icon" alt="..." />
                        </div>
                        <div className="col-8 col-lg-4 m-auto ">
                            <form onSubmit={eventHandle} className="mt-3">
                                <div className="mb-3 d-flex">
                                    <input type="text" className="form-control" placeholder="Search Name..." value={userName} onChange={(e) => setUserName(e.target.value)} />
                                    <button type="submit" className="btn btn-primary">search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {
                user.length !== 0 ? <Results apiData={apiData} user={user} /> :  <div className="container-fluid home mt-5">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="row ">
                      <div className="col-md-6 my-5 box1">
                        <h1>Search your User Name</h1>
                      </div>
                      <div className="col-md-5 " >
                        <img src={xyz} alt="" className="img-fluid animated conImg"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
        </>
    )
}

export default MainPage
