import React, { useEffect, useState } from 'react';

function UserData() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data.users);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App" >
      <h1><center>Data</center></h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Password</th>
            <th>Birth Date</th>
            <th>Blood Group</th>
            <th>Height</th>
            <th>Hair</th>
            <th>Address</th>
            
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img src={user.image} alt={`User ${user.id}`} width="100" />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.birthDate}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.height}</td>
              <td>
                <tr>{user.hair.color}</tr>
                <tr>{user.hair.type}</tr>
              </td>
              <td>
                {user.address.address}, {user.address.city}, {user.address.state}, {user.address.postalCode},{user.address.coordinates.lat},{user.address.coordinates.lng}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserData;