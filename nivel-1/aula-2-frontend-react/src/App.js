import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import api from "./services/api";
// import Background from "./assets/background.jpg";

function App() {
	const [users, setUsers] = useState([]);
	
  const fetchAPI = async () => {
    try {
      const response = await api.get("users");
      console.log("fetchAPI -> response", response);

      setUsers(response.data);
    } catch (error) {
      console.log("fetchAPI -> error", error);
    }
	};
	
  useEffect(() => {
    fetchAPI();
  }, []);

  const handleUsers = async () => {
    const newUser = { name: `New user ${Date.now()}` };
    await api
      .post("users", newUser)
      .then(() => {
        setUsers([...users, newUser.name]);
      })
      .catch((err) => {
        console.log("handleUsers -> err", err);
      });
  };

  return (
    <div>
      <Header title="Users" />
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>

      <button type="button" onClick={handleUsers}>
        Add user
      </button>

      {/* How to use image into react  */}
      {/* <img src={Background} alt="" /> */}

      {/* Example how to use children */}
      {/* <Header title="Homepage">
        <ul>
          <li>Teste 1</li>
          <li>Teste 2</li>
        </ul>
      </Header> */}
    </div>
  );
}

export default App;
