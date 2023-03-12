function test(person) {
    person.age = 26
    person = {
      name: 'yyy',
      age: 30
    }
    return person
  }
  const p1 = {
    name: 'yck',
    age: 25
  }
  const p2 = test(p1)
  console.log(p1)  // { name: 'yck', age: 26 }
  console.log(p2)  // { name: 'yyy', age: 30 }


// typeof & instanceof
/* 
    typeof对于原始类型来说，除了null都可以显示正确的类型；typeof 对于对象来说，除了函数都会显示 object，
    所以说typeof 并不能准确判断变量到底是什么类型 
    如果我们想判断一个对象的正确类型，这时候可以考虑使用
    instanceof，因为内部机制是通过原型链来判断的，
*/
console.log(typeof 1);  // number
console.log(typeof "1"); // string
console.log(typeof undefined); // undefined
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof Symbol); // function
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object 这是历史bug，实际不能检查

const Person = function() {}
const p3 = new Person()
console.log(p3 instanceof Person) // true
var str = 'hello world'
console.log(str instanceof String) // false
console.log(typeof str); // string
var str1 = new String('hello world')
console.log(str1 instanceof String) // true

/* 
  闭包
    闭包的定义其实很简单：函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包。
    在 JS 中，闭包存在的意义就是让我们可以间接访问函数内部的变量。
*/
/* function A() {
    let a = 1
    window.B = function () {
        console.log(a)
    }
  }
A()
B() //1 */

/* 
  reduce可以将数组中的元素通过回调函数最终转换为一个值。
*/
const arr = [1, 2, 3]
const sum = arr.reduce((acc, current) => acc + current, 0)
console.log(sum)  // 6
