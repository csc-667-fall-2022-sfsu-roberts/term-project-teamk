const db = require("./index");

const LOOKUP_USER_BY_USERNAME = "SELECT id FROM users WHERE username=${username}";

const REGISTER_USER ="INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password}) RETURNING id, username";

// const LOGIN_USER ="SELECT id FROM users WHERE username=${username} AND password =${password}";
const LOGIN_USER =
  "SELECT id, username, password FROM users WHERE username=$1 AND password=$2";


const signUp =({username, email, password}) =>{
    return db
        .none(LOOKUP_USER_BY_USERNAME, {username})
        .then(()=> db.one(REGISTER_USER, {username, email, password}));
}
/* const login =({username, password}) =>{
    return db.one(LOGIN_USER, {username, password});
} */
const login = ({ username, password }) => {
    return db.one(LOGIN_USER, [username, password]);
  };
  

module.exports ={signUp, login};