import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local'
import Table from '../table';

let usersTable = new Table('Users')

function configurePassport(app){
passport.use(new LocalStrategy({
    usernameField: 'email', // looks for username which is called email for us//
    passwordField: 'password', // looks for password//
    sessions: false
}, (email, password, done) => {
    //this is a gap I write code//

    usersTable.find({
        email: email
    }).then((results) => {
       return results[0] 
    }).then((results)=> {
        if (results && results.password && results.password === password){
            //we found a user in the db with the same email and same password//
            //here we would make a token//
            return done(null, {token: 'blah123'})
        } else {
            return done( null, false, {message: 'Invaild login'})
        }
    }).catch((err) => {
        return done(err)
        //this means something crashed//
    })
}))

app.use(passport.initialize())
}

export default configurePassport;