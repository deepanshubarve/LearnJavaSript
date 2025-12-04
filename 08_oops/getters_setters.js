class users{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return `${this._email}abcc`;
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `$abc123${this._pass}rtis`
    }

    set password(value){
        this._pass = value;
    }
}

const use1 = new users("hitesh","1234");
console.log(use1.email);

const use2 = new users("Jammu","deeP@2002");
console.log(use2.password);

