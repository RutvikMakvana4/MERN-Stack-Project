const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require("../model/userSchema")

router.get('/', (req, res) => {
    res.send('hello world from the server2');
});

// router.post('/register', (req , res) => {
//     console.log(req.body);
//     res.json({message:req.body});
// });



// Async-await

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword} =req.body;

    if (!name || !email || !phone || !work || !password || !cpassword){
        return res. status(422).json({ error: "Plz filled the field properly"});
    }

    try{
        const userExist = await User.findOne({email: email});

        if (userExist) {
            return res.status(422 ). json({ error: "Enail already Exist" });
        } else if (password != cpassword){
            return res.status(422 ). json({ error: "Enail already Exist" });
        }else {

        const user = new User( { name, email, phone, work, password, cpassword });

        await user.save();

        res.status(201).json( { message: "user registered successfuly" });
        }
    } catch(err){
        console.log(err);
    }

});


// Login route

router.post('/signin', async (req, res) => {
    try { 
        
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({error: "Plz Filled the data" })
        }

        const userLogin = await User.findOne( { email:email });

        // console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
            
            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token,{
                expires : new Date(Date.now() + 25892000000),
                httpOnly : true
            
            });

            if(isMatch) {
                res.status(400).json({ error: "Invalid Credientials" });
            }else{
                res.json({ message: "user Signin Successfully" });
            }
        }else{
            res.status(400).json({ error: "Invalid Credientials" });
        }
        

    } catch(err) {
    console.log(err);
    }
});


module.exports = router;