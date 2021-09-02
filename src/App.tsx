import { useState, useEffect } from "react";
import "./App.css";
import Person from "./components/Person";

const App: React.FC = () => {
  const [users, setUsers] = useState<[]>([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  if (errorMessage) {
    return <h3>something broke</h3>;
  }

  return (
    <div className="App">
      {isLoading ? (
        <p className="loader">Loading ...</p>
      ) : (
        <div className="card">
          <h1>Random User!</h1>
          <div className="content">
            {users.map((user) => {
              const {
                login: { uuid },
                name: { first, last },
                picture: { medium },
                location: { country, state },
                email,
                cell,
              } = user;
              return (
                <div key={uuid}>
                  <Person
                    medium={medium}
                    email={email}
                    cell={cell}
                    first={first}
                    last={last}
                    country={country}
                    getUserData={getUserData}
                    state={state}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
