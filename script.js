const mongoose = require('mongoose')
const User = require("./User")

mongoose.connect("mongodb://localhost/CustomersInfo")

const run = async () => {
    const user = await User.create({ name: 'Bao Tit', age: 1 })
    user.name = 'Ngoc Nam'
    await user.save()
    // const user = new User({ name: 'Bao Tit', age: 1 })
    // await user.save()
    console.log(user);
}

run()

