const { conn } = require("../DB_connection.js");
const User = conn.models.User;

const login = async (req, res) =>{
    try{
        const { email, password } = req.query;
        if(!email || !password || email.trim() === "" || password.trim() === ""){
            return res.status(400).json({ message: "Ey, we're missing data" });
        };
        const user = await User.findOne({
            where: {
                email
            }
        })
        if(!user){
            return res.status(404).json({ message: "User not found"});
        };
        if(user.password !== password){
            return res.status(403).json({ message: "Incorrect password" });
        };

        return res.status(200).json({ access: true });
    }catch(error){
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    login
};