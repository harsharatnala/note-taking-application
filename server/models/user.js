const users = [
    {
      userName: "ratnala12",
      password: "chapanubey"
    },
    {
      userName: "harsharocks131",
      password: "Bokkara"
    },
    {
      userName: "Harshashakes08",
      password: "m**g**harsha"
    }
  ];

  function getAllUsers() {
    return users;
  }
  
  function login(user) { // {userName: "sda", password: "gsdhjsga"}
    let cUser = users.filter( u => u.userName === user.userName);
    
    if(!cUser[0]) throw Error("Username not found");
    if(cUser[0].password !== user.password) throw Error("Password incorrect");
  
    return cUser[0];
  }
  module.exports = { getAllUsers, login };