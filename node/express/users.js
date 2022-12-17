const userModel = require("./models/sams");
const CreateUser = async(id, email, password) => {
    console.log("Create User");
    let user = new userModel();
    user.id = id;
    user.email = email;
    user.password = password;
    await user.save();
    return user;
};
module.exports.CreateUser = CreateUser;