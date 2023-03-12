# 官网
网址：https://www.webpackjs.com/ # webpack中文网
    https://webpack.js.org/ # webpack官网

# 1、为什么vite比webpack快
    当webpack dev server 在启动的时候，他会把所有的文件都build一遍，需要从入口文件去索引整个项目的这种文件，编译成一个或多个单独的js文件，不管模块是否被执行，都要编译和打包到这个bundler里面，随着项目越来越复杂，项目模块越来越多，打包的bundler也就越大，打包的速度就越来越慢，整个过程就非常耗费时间，

    vite在启动的时候不需要打包，不需要拆分模块的依赖，不需要编译，所以启动速度非常快。
    当浏览器请求某个模块时，再根据需要对模块内容进行编译，由于现代浏览器本身支持ES Module，会自动向依赖地module发送请求，vite利用了这个按需动态地编译方式，缩短了编译时间。

    在底层上，vite基于es build预构建的，es build使用go编写的，go本身就很快，比js编写的打包器预构建快10-100倍，js一般是毫秒级，go是纳秒级