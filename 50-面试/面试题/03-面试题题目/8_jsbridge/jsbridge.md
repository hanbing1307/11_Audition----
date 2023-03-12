参考文章网址：
    https://juejin.cn/post/6936814903021797389
    深入浅出JSBridge：从原理到使用
    
    https://juejin.cn/post/7036988966356123662
    一文让你彻底理解JSBridge

# 一、前言
在如今移动端盛行的年代，技术选型上基本都是混合开发（Hybrid），混合开发是一种开发模式，指使用多种开发模型开发App，通常会涉及到两大类技术：原生Native、Web H5
    - 原生技术主要指iOS（Objective C）、Android（Java），原生开发效率较低，开发完成需要重新打包整个App，发布依赖用户的更新，性能较高功能覆盖率更高
    - Web H5主要由HTML、CSS、JavaScript组成，Web可以更好的实现发布更新，跨平台也更加优秀，但性能较低，特性也受限

混合开发的意义就在于吸取两者的优点，而且随着手机硬件的升级迭代、系统（Android 5.0+、ISO 9.0+）对于Web特性的较好支持，H5的劣势被逐渐缩小
混合开发按照渲染可分为下类：

    - Web渲染的混合App（Codova、NativeScript）
    - 原生渲染的混合App（ReactNative、Weex）
    - 小程序

其中的原生、Web相互通信都离不开JSBridge，这里面小程序比较特殊，对于UI渲染和JS的执行环境做了隔离，基于前两种方式之间。

二、JSBridge做了些什么？

在Hybrid模式下，H5会经常需要使用Native的功能，比如打开二维码扫描、调用原生页面、获取用户信息等，同时Native也需要向Web端发送推送、更新状态等，而JavaScript是运行在单独的JS Context中（Webview容器、JSCore等），与原生有运行环境的隔离，所以需要有一种机制实现Native端和Web端的双向通信，这就是JSBridge：以JavaScript引擎或Webview容器作为媒介，通过协定协议进行通信，实现Native端和Web端双向通信的一种机制。

通过JSBridge，Web端可以调用Native端的Java接口，同样Native端也可以通过JSBridge调用Web端的JavaScript接口，实现彼此的双向调用


