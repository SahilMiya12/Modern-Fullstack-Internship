// createToken()
// verifyToken()
import jwt from 'jsonwebtoken';

const secret = "hello123$%^8147891479@25982958hithere$";
export function createToken(userId:number, name:string, email:string){
    // we get the payload or user data
    // we need to sign it with secret key
    return jwt.sign(
        {userId, name, email},
        secret,
        {expiresIn: "1 hr"}
    )
}

export function verifyToken(token:string){
    // jwt has inbuilt function -- jwt.verify() 
    // it verifies the signature or the secret key and returns a payload
    return jwt.verify(token, secret);
}