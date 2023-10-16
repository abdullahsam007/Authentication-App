const bcrypt = require('bcrypt');

//important

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {


        //basically increases the secorti
        bcrypt.genSalt(12, (err, salt) => {
            if(err) {
                reject(err)
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) {
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}
// for login api
const comparePasswords = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}

module.exports = {
    hashPassword, 
    comparePasswords
}