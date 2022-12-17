const userModel = require("./models/sams");
const CreateUser = async(id, email, password) => {
    //create
    console.log("Create User");
    let user = new userModel();
    user.id = id;
    user.email = email;
    user.password = password;
    await user.save();
    return user;
};
const getUsers = async() => {
    //view
    let users = await userModel.find();
    return users;
};
const delUsers = async(_id) => {
    //delete
    let user = await userModel.findByIdAndDelete(_id);
    return user;
};

const UpdateUser = async(_id, id, email, password) => {
    //create
    console.log("Create User");
    let user = await userModel.findById(_id);
    user.id = id;
    user.email = email;
    user.password = password;
    await user.save();
    return user;
};
module.exports.CreateUser = CreateUser;
module.exports.getUsers = getUsers;
module.exports.delUsers = delUsers;
module.exports.UpdateUser = UpdateUser;