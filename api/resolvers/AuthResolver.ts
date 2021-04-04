import { Arg, Mutation, Resolver} from 'type-graphql';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


import {User, UserModel} from '../entity/User';
import {AuthInput} from '../types/Authinput';
import {UserResponse} from '../types/UserResponce';


@Resolver()
export class AuthResolver{

@Mutation(()=>UserResponse)
async register(@Arg('input'){email, password}: AuthInput): Promise<UserResponse>{
    //1. Check for an excisting email
    const existingUser= await UserModel.findOne({email});
    if(existingUser){
        throw new Error('Email already exists');
    }

    //2.Create a new user with hashed Password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({email,password:hashedPassword});
    await user.save();

    //3. Store the user id on token payload
    const payload = {
        id:user.id
    }
    const token = jwt.sign(payload, process.env.SESSION_SECRET || 'RAVISANAPALA');
    return {user,token}
}
}
