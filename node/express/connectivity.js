const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { CreateUser, getUsers, delUsers, UpdateUser } = require("./users");
mongoose.set("strictQuery", false);
mongoose
    .connect("mongodb://localhost:27017/sample", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        console.log("connected");
        //let user = await CreateUser(2, "aliraza@gmail.com", "@hsgdgd24");
        //console.log(user);
        let allUsers = await getUsers(); //viewing records
        console.log(allUsers);
        //console.log(await delUsers("639e056e265e40cf2fa00c6a"));
        console.log(
            await UpdateUser(
                "639e0fa64f5a6c506fc1f2a6",
                3,
                "ahmad@gmail.com",
                "6bdbhcwu@"
            )
        );
    })
    .catch((error) => {
        console.log(error);
    });
app.listen(3001, () => console.log("Server is running"));