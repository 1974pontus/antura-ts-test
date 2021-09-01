import { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const [users, setUsers] = useState<[]>([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //fetch
  const getUserData = async () => {
    setIsLoading(true);
    const res = await fetch("https://randomuser.me/api");
    if (res.status >= 200 && res.status <= 299) {
      const data = await res.json();
      setUsers(data.results);
      setErrorMessage(false);
      setIsLoading(false);
    } else {
      console.log(res.status, res.statusText);
      setErrorMessage(true);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  function handleClick() {
    getUserData();
  }

  if (errorMessage) {
    return <h3>something broke</h3>;
  }

  return (
    <div className="App">
      <h1>Random User!</h1>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div className="card">
          {users.map((user) => {
            const {
              login: { uuid },
              name: { first, last },
              email,
              picture: { medium },
            } = user;
            return (
              <div key={uuid}>
                <img className="pic" src={medium} alt="user img" />
                <p>
                  {first} {last}
                </p>
                <p>{email}</p>
              </div>
            );
          })}
          <button onClick={handleClick}>Get me a new user</button>
        </div>
      )}
    </div>
  );
};

export default App;
