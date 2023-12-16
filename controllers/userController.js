const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'rahasia';

class userController {
    static async userRegister (req, res) {
        const { username, password, email, telepon, isAdmin } = req.body;
    
        User.create({ username, password, email, telepon ,isAdmin })
            .then((user) => {
                res.status(200).json(user);
            })
            .catch((error) => {
                res.status(404).json(error)
            });
    }

    static async userLogin (req, res, next) {
        const { username, password } = req.body;
    
        let user = await User.findOne({ where: { username } });
    
        if (user) {
            const hash = user.password;
            const isValid = bcrypt.compareSync(password, hash);
    
            if (isValid) {
                const token  = jwt.sign({id: user.id, username: user.username, isAdmin: user.isAdmin}, secret);
                res.status(200).json({data: {token}});
            }else{
                next(new Error({msg: 'EMAIL/PASSWORD ANDA SALAH!'}));
            }
        }else{
            next(new Error({msg: 'EMAIL/PASSWORD ANDA SALAH!'}));
        }
    }

}

module.exports = userController;