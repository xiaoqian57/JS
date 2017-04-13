//将信息封装隐藏起来
(function() {
    var n = "me";

    function People(name) {
        this._name = name;
    }
    People.prototype.say = function() {
            alert("Hello " + n);
        }
        //通过window暴露接口方便外部调用
    window.People = People;
}());

(function() {
    function Student(name) {
        this._name = name;
    }
    //Student通过原型链继承People
    Student.prototype = new People();
    var superSay = Student.prototype.say;
    Student.prototype.say = function() {
        //调用父类
        superSay.call(this);
        alert("stu hello");
    }
    window.Student = Student;
}());

var s = new Student("iven");
s.say();
