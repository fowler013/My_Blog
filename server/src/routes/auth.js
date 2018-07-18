import { Router } from 'express';
import passport from 'passport'
let router = Router()

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, tok, info) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else if (!tok) {
            return res.status(401).json(info);
        } else {
            return res.status(201).json(tok);
        }
    })(req, res, next)

    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body);
    res.sendStatus(200)
})

export default router