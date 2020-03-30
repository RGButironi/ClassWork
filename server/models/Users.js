const Users = [
    { Name: 'Ron', Password: 'pass', Email: 'ron@np.edu' },
];

module.exports = {
    CurrentUser: null,

    Login(email, password) {

        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found')
        if(user.Password != password) throw Error('Wrong Password');

   
    return this.CurrentUser = user;

    }
}