import React, { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Adriane", "Luis", "Frodo"]);
  //renderizando lista
  const [users, setUsers] = useState([
    { ide: 1, name: "Adriane", age: 25 },
    { ide: 2, name: "Luis", age: 27 },
    { ide: 3, name: "Frodo", age: 1 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}> Delete Random</button>
      {/* O button não está funcionando */}
    </div>
  );
};

export default ListRender;
