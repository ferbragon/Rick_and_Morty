const { conn } = require("../DB_connection.js");
const User = conn.models.User;

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password || email.trim() === "" || password.trim() === "") {
            return res.status(400).json({ message: "Hey, we're missing data!" });
        }

        const [newUser, created] = await User.findOrCreate({
            where: { email },
            defaults: { password }
        });

        if (!created) {
            return res.status(400).json({ message: "The user already exist" });
        }

        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    postUser
}
