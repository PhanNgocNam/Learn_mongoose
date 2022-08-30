const mongoose = require('mongoose')
const User = require("./User")
// const addressSchema = require('./User')

mongoose.connect("mongodb://localhost/CustomersInfo")

const run = async () => {
    const user = await User.create({
        name: 'Bao Tit',
        age: 1,
        address : {
            city : 'Bien Hoa City'
        }
    })

    // const user = new User({ name: 'Bao Tit', age: 1 })
    // await user.save()
    console.log(user);
}

run()

