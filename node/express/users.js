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
const getUsers = async() => {
    let users = await userModel.find();
    return users;
};
const delUsers = async(_id) => {
    let user = await userModel.findByIdAndDelete(_id);
    return user;
};
module.exports.CreateUser = CreateUser;
module.exports.getUsers = getUsers;
module.exports.delUsers = delUsers;