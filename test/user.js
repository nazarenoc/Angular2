var User = (function () {
    function User(firstname, lastname) {
        this.fullname = firstname + " " + lastname;
    }
    User.prototype.hello = function () {
        return "Hello, " + this.fullname;
    };
    return User;
}());
var user = new User("Mary", "Jane");
alert(user.hello());
