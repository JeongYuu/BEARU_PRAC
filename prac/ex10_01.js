/*let object = {
    name: "정유진", 
    age: 123,
    job: "web developer", 
    "hello world": "hello world", 
    a: function () { },
};
console.log(object.name);
console.log(object.age);
console.log(object.job);
console.log(object["hello world"]);
console.log(object.a);

object.test = "test";
object.apple = "mango";

console.log(object);

delete object.test;

console.log(object);
*/

let object = {
    name: "정유진", 
    age: 123,
};

object.test = "test";
console.log(object);

delete object.test;
console.log(object);