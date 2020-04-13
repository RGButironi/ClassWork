import myFetch, { User } from "./myFetch";

export let CurrentUser = null;

export async function Login(email, password) {

const user = await myFetch('/users/login', { email, password }) ;
   
    if(!user) throw Error('User not found')

   
    return CurrentUser = user;
}