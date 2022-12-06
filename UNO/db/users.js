const db = require("./index");

const LOOKUP_USER_BY_USERNAME = "SELECT id FROM users WHERE username=${username}";

const REGISTER_USER ="INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password}) RETURNING id, username";

const signUp =({username, email, password}) =>{
    return db
        .none(LOOKUP_USER_BY_USERNAME, {username})
        .then(()=> db.one(REGISTER_USER, {username, email, password}));
   
    
}

module.exports ={signUp};