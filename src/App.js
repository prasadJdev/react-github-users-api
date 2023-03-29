import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
    // const data = await response.json();
    // console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2 className="text-center m-5">List of Git Hub Users </h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((currElem) => {
            return (
              <>
                <div className="col-10  col-md-4 mt-5">
                  <div className="card p-2">
                    <div className="d-flex align-items-center">
                      <div className="image">
                        <img src={currElem.avatar_url} className="rounded" width="155" />
                      </div>
                      <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft">{currElem.login}</h4>
                        <div className="p-2 mt-2 d-flex justify-content-between rounded text-dark stats">
                          <div className="d-flex align-items-center flex-column">
                            <a href={currElem.html_url} className="btn btn-light articles me-3">Profile </a>
                            {/* <span className="number1">38</span> */}
                          </div>
                          <div className="d-flex flex-column">
                            <a href={currElem.followers_url} className="btn btn-light followers">Followers</a>
                            
                          </div>
                          <div className="d-flex flex-column">
                            <a href={currElem.following_url} className="btn btn-light rating">Following</a>
                            {/* <span className="number1">9.8</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
