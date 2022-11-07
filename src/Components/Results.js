import React from 'react'

const Results = (props) => {
    const { apiData, user } = props
    console.log("reps", apiData)

    const listRepos = (apiData.length > 0 && apiData.map((item) =>
        <li key={item.id}>
            <a href={item.html_url} className="list" >
                {item.name}
            </a>
        </li>
    ))

    return (
        <>
            {
                apiData.message !== 'Not Found' ?

                    <div className="container-fluid">
                        <div className="row ">
                            <div className="col-8 rounded m-auto box mt-5">
                                <a href={user.html_url} style={{ textDecoration: 'none' }}>
                                    <div className="row p-3">
                                        <div className="col-sm-12 col-lg-6 text-center">
                                            <h5 >Profile</h5>
                                            <div className="card border-0" style={{ maxWidth: "18rem",margin:"0 auto" }}>
                                                <img src={user.avatar_url} alt="" className='rounded-circle' />
                                                <div className="card-body">
                                                    <h3 className="card-title">{user.name}</h3>
                                                    <h5 className="card-title">User Name : {user.login}</h5>
                                                    <p className="card-text">total Repositories = {user.public_repos}</p>
                                                    <p className="card-text">followers = {user.followers}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" col-sm-12 col-lg-6">
                                            <h5>Recent Repositories</h5>
                                            <ul>
                                                {listRepos}
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    : <h1 className="notFound">user not found</h1>
            }
        </>
    )
}

export default Results
