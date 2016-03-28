class User {
    fullname: string;
    constructor(firstname:string,lastname:string) {
        this.fullname = firstname + " " + lastname;
    }
    hello():string {
        return "Hello, Hello " + this.fullname;
    }
}

var user = new User("Mary", "Jane");
//alert(user.hello());
document.body.innerHTML = user.hello();