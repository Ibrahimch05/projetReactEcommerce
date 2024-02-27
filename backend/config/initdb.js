const bcryptjs= require('bcryptjs');
const crypto = require('crypto');


const User = require('../models/auth')


const initdb = async ()=>{
    try {
        const hashedPasswordadmin = await bcryptjs.hash(process.env.PASSWORD_ME,10)
    const admin = await User.findOne({email:process.env.EMAIL_ME})
    if(!admin){
        let user = await User.create({
            name:process.env.NAME_ME,
            email:process.env.EMAIL_ME,
            password: hashedPasswordadmin,
            status:true,
            token: crypto.randomBytes(64).toString('hex'),
            role: '65887b7c9a7dcbf0e1069a7e',
            
        })
        console.log('admin user', user);
    }else{
        console.log('admin deja exist');
    }
    } catch (error) {
        console.log(error);
    }

}
module.exports = initdb