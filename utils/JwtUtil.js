import jwt from 'jsonwebtoken'
export function generateToken(email, id) {
    if(!email) return "";
    return jwt.sign({email, id}, process.env.JWT_SECRET, {});
}

//validate token middleware

export function authenticateUser(req, res, next) {
    const auth = req.headers.authorization;
    if(!auth) {
        return res.status(404).json({msg:"token not found"});
    }

    let token = auth.substr(7);
    try {
        console.log(token);
        if(jwt.verify(token, process.env.JWT_SECRET)) {
            const payload = jwt.decode(token);
            req.userDetails = payload;
            next();
        }
    } catch (error) {
        return res.status(404).json({msg: "token invalid"});
    }
}