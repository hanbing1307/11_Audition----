# JS面试题
# 1、js的数据类型
    原始类型（原始值）6种：boolean布尔值（true、false）、null、undefined、number、string、symbol
    对象object

# 2、typeof & instanceof
## 2.1 typeof能否正确判断类型？instanceof能正确判断对象的原理是什么？

    typeof对于原始类型，除了null都可以显示正确类型
        对于对象，除了函数都会显示object，所以并不能准确判断变量是什么类型
        如果想正确判断一个对象的类型，可以使用instanceof，它的内部机制是通过原型链判断
# 3、类型转换
    js中类型转换只有三种情况：
        转换为布尔值：在条件判断时，除了undefined,null,false,NaN,'',0,-0,其它所有值都转为true，包括对象
        转换为数字：
        转换为字符串
# 4、== 和===
    == 是 等于，对比双方类型不一样，则会进行类型转换
    === 是 全等于，会判断两者类型和值是否相同

# 5、闭包
    什么是闭包
    函数A内部有一个函数B，函数B可以访问函数A的变量，那么函数B就是函数A的闭包

# 6、深浅拷贝
    浅拷贝：创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。
    深拷贝：将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。

    举例：
    假设B复制了A，修改A的时候，看B是否发生变化：
    如果B跟着也变了，说明是浅拷贝，拿人手短！（修改堆内存中的同一个值）
    如果B没有改变，说明是深拷贝，自食其力！（修改堆内存中的不同的值）
    也就是看我们的值是否发生了变化，如果是没有变化，说明我们使用了深拷贝，接着修改深拷贝出来的值，原来的值是不发生变化的。

# 7、原型
    如何理解原型？如何理解原型链？

    没个js对象都有__proto__ 属性，这个属性指向了原型，当然这个属性现在已经不推荐直接使用了。
    原型也是一个对象，并且这个对象包含了很多函数，所以可以得到一个结论：对于obj来说，可以通过__proto__找到一个原型对象，在该对象中定义了很多函数让我们使用。
    打开 constructor 属性我们⼜可以发现其中还有⼀个 prototype属性，并且这个属性对应的值和先前我们在 __proto__ 中看到的⼀模⼀样。所以我们⼜可以得出⼀个结论：原型的 constructor 属性指向构造函数，构造函数⼜通过 prototype 属性指回原型，但是并不是所有函数都具有这个属性，Function.prototype.bind()
    就没有这个属性。

    其实原型链就是多个对象通过 __proto__ 的⽅式连接了起来。
    为什么 obj 可以访问到valueOf 函数，就是因为 obj 通过原型链找到了 valueOf 函数。
    对于这⼀⼩节的知识点，总结起来就是以下⼏点：
        1. Object 是所有对象的爸爸，所有对象都可以通过 __proto__ 找到它
        2. Function 是所有函数的爸爸，所有函数都可以通过__proto__ 找到它
        3. 函数的 prototype 是⼀个对象
        4. 对象的 __proto__ 属性指向原型， __proto__ 将对象和原型连接起来组成了原型链

