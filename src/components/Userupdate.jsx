import { useState } from "react";

const Userupdate = () => {
  const [profile, setProfile] = useState({ name: "", age: "" });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <h1>update profile</h1>
      <label htmlFor="name">name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={profile.name}
        onChange={handlechange}
      />
      <br />
      <label htmlFor="age">age</label>
      <input
        type="text"
        name="age"
        id="age"
        value={profile.age}
        onChange={handlechange}
      />
      <h1>profile</h1>
      <h2>name:{profile.name}</h2>
      <h2>age:{profile.age}</h2>
    </div>
  );
};

export default Userupdate;
