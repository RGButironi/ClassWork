const Users = [
    { Name: 'Ron', Password: 'pass', Email: 'ron@np.edu', userId: 0 },
];

module.exports = {

    Login(email, password) {

        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found')
        if(user.Password != password) throw Error('Wrong Password');

   
    return user;

    }
}