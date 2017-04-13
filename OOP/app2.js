(function() {
    var n = "ime";

    function Person(name) {
        var _this = {}
        _this.name = name;
        _this.sayHello = function() {
            alert("PHello " + _this.name + " " + n);
        }
        return _this;
    }
    window.Person = Person;
}());

function Teacher(name) {
    var _this = Person(name);
    var superSay = _this.sayHello;
    _this.sayHello = function() {
        superSay.call(_this);
        alert("tea hello " + _this.name);
    }
    return _this;
}

var t = new Teacher("keller");
t.sayHello();
