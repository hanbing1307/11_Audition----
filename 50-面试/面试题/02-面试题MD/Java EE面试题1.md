Java EE面试题
第一部分：Servlet/JSP快速入门
1.请列举至少6种javaEE技术，并简述其作用。
解析：
javaEE是一系列的技术，主要包扩13种。对于开发人员来说，了解几种主要的技术是非常必要的，例如JDBC、JSP、Servlet、XML、JNDI、JMS、JTA等。
参考答案：
(1)JDBC(Java Database Connectivity):用来访问数据库的API。
(2)JavaServlet :是一种小型的Java程序，扩展了web服务器的功能。
(3)JSP(Java Server Pages):JSP页面由HTM代码和嵌入其中的Java代码组成，用来实现动态视图。
(4)JNDI(Java Name and Directory Interface): JNDI API被用于访问名字和目录服务。
(5)EJB(Enterprise JavaBean):实现业务逻辑的组件，可以构成分布式系统。
(6)RMI(Remote Method Invoke):调用远程对象方法。
(7)Java IDL/CORBA:将Java和CORBA集成在一起。
(8)XML(Extensible Markup Language):可以用它来定义其他标记语言的语言。
(9)JMS(Java Message Service):用于和消息中间件相互通信的API。
(10)JTA(Java Transaction Achitecture):一种标准的API，可以访问各种事务管理器。
(11)JTS(Java Transaction Service):是CORBA OTS事务监控的基本实现。
(12)JavaMail:用于存取邮件服务的API。
(13)JAF(JavaBeans Activation Framework):JavaMail利用JAF来处理MIME编码的邮件附件。
2.在web.xml文件中配置Servlet时，主要配置哪些信息？
解析：  使用IDE开发Servlet时，配置信息可以通过可视化方式定义。然而对于web应用开发员来说，了解Servlet的配置非常必要，能够在必要的时候手动进行修改。
参考答案：  配置Servlet时，主要配置<servlet>以及< servlet -mapping>，如下所示：
		<servlet>
    		<servlet-name>IndexServlet</servlet-name>
    		<servlet-class>com.oracle.servlet.IndexServlet</servlet-class>
  	</servlet>
		<servlet-mapping>
    		<servlet-name>IndexServlet</servlet-name>
    		<url-pattern>/IndexServlet</url-pattern>
 	 </servlet-mapping>
其中<servlet-class>是Servlet源文件的名字，<servlet-name>是自定义的名字，往往使用类名。<url-pattern>是其中非常重要的信息，用来配置访问Servlet的逻辑路径。必须以/开头。
<servlet-class>com.oracle.FirstServlet</servlet-class>
</servlet>
<servlet-mapping>
<servlet-name>FristServlet</servlet-name>
<url-pattern>/frist<url-pattern>
<servlet-mapping>
其中，<servlet-class>是Servlet源文件的名字，<servlet-name>是自定义的名字，往往使用类名。<url-pattern>是非常重要的信息，用来配置访问Servlet的逻辑路径，必须以/开头。
3.  如果通过一个链接访问Servlet，默认调用Servlet中的那个方法提供服务？
解析  度与不同的HTTP请求方法Servlet中都定于了对应的doXXXX方法接受请求。一超级链接的方式提交请求，默认的GET方式，所以将调用Servlet中的doGet方法。程序员应该熟悉每种用户请求对应的HTTP方式。
4.  如果一个表单<form>没有显示指定method属性值，那么默认使用什么方法提交请求？
解析  表单提交时Web应用中常见的请求方式，一般情况下，建议使用POST方式提交请求，因为这种方式请求参数在请求体重传递，不会显示在URL中。但是，如果在HTML的<form>标记中没有使用method属性指定提交方式，默认是GET方式。
参考答案   默认使用GET方式。
5.  请求接口中的哪个方法可以返回请求参数的值？哪个方法可以把请求参数的多个值同时返回？
解析  Web应用中复杂重要的的功能往往通过表单提交实现，用户利用表单可以输入很多信息，这些信息被称为请求参数。在Web应用开发中，获得请求参数几乎是使用最多的功能，程序员应该熟练掌握获得请求参数有关的所有方法。
参考答案  请求接口中的getParameter 方法可以返回摸一个请求参数的值，getParaneterValues方法可以把摸个请求参数的多个值同时返回，封装到一个数组中，例如复框的多个值。
6.响应接口中的哪个方法可以设置内容类型？用简单代码演示。
解析  响应可以封装服务器端返回到客户端的数据。而这些数据的格式和编码都需要使用响应中的方法进行设置。如果设置错误，客户端浏览器将无法显示。
参考答案   响应中的soracleontentType方法可以设置内容类型，如下所示:
		//设置响应的内容类型
				Respose.soracleontentType(“text/htmllcharset=gb2312”);
上述代码中设置响应的内容类型是text或者html，编码格式是gb2312.
7.简述JSP的运行过程
解析 很多初级开发员对JSP的理解比较肤浅，不熟悉JSP的运行过程，JSP出错时很难排错，开发员必须熟悉JSP的运行过程，这样才能编写出优良的JSP并能顺利调试。
参考答案  
（1）容器将JSP翻译成符合Servlet规范的类。
（2）容器编译JSP生成的类。
（3）容器初始化JSP实例；
（4）将请求和相应对象传递给JSP实例的服务方法，提供服务。
8.JSP中的<% %>和<% =%>有什么区别？
解析  JSP从表面上看就是HTML代码中混合了Java代码，而为了区别Java代码和HTML代码，规范中定义了一些符号，即脚本元素。初级开发员应该从熟悉这些脚本元素开始，逐步熟悉JSP的开发。
参考答案  <% %>称为脚本片段，可以包含任何符合语法的Java代码，可以同时包含多行代码。而<% =%>称为表达式，=号后面是一个表达式，这个表达式的值将被输出到浏览器中，表达式后面不用使用分号结束，而且每个<% =%>只能包含一个表达式。
9．JDBC编程中主要有哪几种语句对象？有什么区别？
解析 JDBC主要用来操作数据库，操作数据库本质上是通过执行SQL语句完成。所以，JDBC编程中，能够用来执行SQL语句的语句对象非常重要，每种语句对象都存在一些区别，开发员应该熟悉并掌握。
参考答案 JDBC中主要有以下3种语句对象：
（1）Statement:Statement是所有语句对象的父接口，定义了语句对象的规范。
（2）PreparedStatement：预编译的语句对象，将待执行的语句进行了预编译，可以在执行时动态指定SQL语句中的参数。
（3）CallableStatement：可以用来调用数据库的存储过程。
10、简述使用JDBC操作数据库的主要步骤。
解析  不论使用什么数据库软件，JDBC操作数据库的步骤都基本相同。开发员一定需要注意的是，JDBC的连接对象、语句对象、结果集等都是高开销对象，使用完毕一定要在finally语句中进行关闭处理，否则将降低应用的性能。
参考答案
（1）加载驱动类；
（2）获得连接对象；
（3）获得语句对象；
（4）执行SQL语句，如果是查询语句，需要处理结果集；
（5）关闭结果集。语句对象。数据库连接对象。
11.说明MVC模式的含义，并用图表示web应用中MVC模式中每部分之间的关系
解析  对于web开发员来说，正确理解MVC模式非常关键。目前，大多数web应用都是基于MVC模式进行架构，也有很多MVC框架能够帮助开发员快速搭建MVC应用。值得注意的是，使用JSP,Servlet,JavaBean可以构建MVC模式的应用，但是MVC是一种架构思想，并不仅局限于JSP,Servlet,JavaBean这个范围内，可以使用很多其他技术实现。
参考答案  MVC本来应用于桌面程序中，M是指数据模型 , V是指用户界面 , C则是控制器，至今已被广泛使用。使用MVC的目的是将M和V实现代码分离，从而使同一个程序可以使用不同的表现形式。C存在的目的则是确保M和V的同步，一旦M改变，V应该同步更新。MVC模式是近些年被JavaEE平台广泛使用的设计模式。Web应用中的MVC模式与桌面程序中的MVC模式有所不同。由于web应用大多基于请求响应模式，因此往往做不到“一旦M改变，V应该同步更新”。MVC每部分之间的关系如下

















第二部分   详解Servlet组件开发
1 . 请说明Servlet的声明周期
解析   Servlet作为服务器端的组件，需要在容器中才能运行，容器管理Servlet的生命周期。对于web开发员来说，了解Servlet的声明周期才能更好地进行Servlet编程。
参考答案   
阶段一：初始化
客户端第一次访问Servlet，或者容器加载应用时(配置<load-on-startup>),容器调用Servlet类的构造方法，实例化一个Servlet对象，该对象存在于服务器端内存中，容器将启动多线程并发访问该对象。实例化结束后，将对Servlet实例进行初始化，先调用init(Servloracleonfig)方法，在调用init()方法
阶段二:提供服务
Servlet初始化成功后，容器调用Servlet接口中定义的service(ServletRequest req,ServletResponse res)方法。Service将请求和响应对象转换成HttpServletRequest req,HttpServletResponse resp)方法。HttpServlet中的service方法，将请求根据请求方式转发给对应的doXXX方法，如doGet、doPost
阶段三   销毁
Servlet提供服务结束，或者一段时间后，容器将销毁Servlet实例。销毁Servlet实例前，容器先调用Servlet接口中定义的destroy方法，允许完成一些自定义的操作。
2. 什么是Servlet的初始化参数?如何配置？如何在程序中获得？
解析  如果摸个Servlet需要一些参数，可以再web.xml中今夕配置，而不必要硬编码到源代码中，这样可以方便地进行修改。值得注意的事，Servlet的初始化参数只能在当前的Servlet中使用，其他Servlet中无法使用。
参考答案  Servlet的初始化参数指的是初始化Servlet实例时的参数，可以再web.xml中尽享配置，如下所示：
<servlet>
<servlet-name>TestServlet</servlet-name>
<servlet-class>com.oracleTestServlet</servlet-class>
<init-param>
<param-name>level</param-name>
<param-value>2.1</param-value>
</init-param>
</servlet>
上述配置中，使用<init-param>为TestServlet配置了一个名字为level的初始化参数，值为2.1.可以使用多个<init-param>元素配置多个初始化参数。在TestServlet中，可以直接调用getInitParameter(“level”)方法返回该参数的值。
3. 请列出请求接口中至少三个获得请求头的方法。
解析  当用户向服务器端请求时，HTTP请求头的信息也随之被发送到服务器。请求接口中定义了获得请求头的方法，实际应用中常常需要获得某些请求头的值，根据请求头的值判断客户端的情况进行编程。开饭元应该熟悉各种请求头的含义，以及获得请求头的方法。
参考答案   getHeader方法可以根据请求头名字获得请求头值；getIntHeader方法用来返回整型请求头的值；getDateHeader方法用来返回日期类型请求头的值。
4.响应接口中addHeader方法和setHeader方法有什么区别？
解析  响应封装了服务器端发送给客户端的信息，响应接口中定义了操作响应头的方法，有些方法容易混淆，开发员应该辨别清楚。
参考答案  addHeader方法用来向响应中添加一个头，如果盖头的名字已经存在，name允许一个头包含多个值：setHeader方法向响应中添加一个头信息，如果头寸在，则覆盖已有的值。
5. Servlet跳转到JSP常常有两种方法：一种称为响应重定向，一种称为请求转发。请用代码展示两种方法，并说明其区别。
解析  Servlet作为MVC中的控制器，主要的作用就是接受客户端请求，获得请求信息后调用业务逻辑，然后根据业务逻辑的处理结果跳转到不同的视图显示给用户。开发员必须掌握常用的两种跳转方法，即响应重定向和请求转发。实际工作中常用的是请求转发，很多MVC框架默认也是使用请求转发.
参考答案
响应重定向response.sendRedirect(“index.jsp”);
请求转发：request.getRequestDispantcher(“index.jsp”).forward(request,respinse);
响应重定向相当于让客户端向重定向的资源重新发送一个请求。当前请求中的信息无法传递到下一个资源。而请求转发显得刚玉吧当前的请求转发到下一个资源。当前请求中的信息将可以转递到下一个资源。
6.请求接口中的提供了处理属性的方法，请列举每个方法并说明其作用。
解析 控制器调用业务逻辑后，往往需要把一些处理的结果返回到视图上进行显示。这种时候，属性的概念就至关重要。请求属性是最常用的一种属性，实在请求范围内有效的属性。开发员一定要正确理解每种范围的属性并能够正确使用。
参考答案 请求接口中有三个和属性有关的方法，分别是：setAttribute(String,Object),可以将一个对象设置一个名字，存储到请求中：getAttribute(String),可以根据属性的名字返回属性值：removeAttribute(String),可以根据属性的名字删除属性。
7.cookie有什么作用？如何使用Servlet 的API返回请求中的cookie？如何将cookie保存到客户端？
解析 cookie是保存在客户端的小文本，合理地使用cookie能够增强用户体验。然而，开发员使用cookie时，一定不要把涉及用户隐私的内容保存到cookie中，如银行账号的密码等。另外，cookie可以被用户人为禁止或删除，这也是使用cookie时需要考虑的问题。
参考答案 cookie用来将一些信息保存到客户端，已被用户下次访问同一应用时，能够自动将这些信息发送到服务器端。服务器端通过使用cookie编程，能够提高用户体验。请求接口中提供了goracleookie方法返回所有的cookie，响应接口提供了addCookie方法能够将cookie对象返回到客户端。
8.如何获得会话对象？请用简单代码展示。
解析 web应用中，常常需要使用会话对象。会话是指客户端对服务器端一次连续的访问过程。开发人员应该熟悉会话相关的操作。
参考答案 可以通过请求对象获得会话对象，如request.getSession()。如果当前存在会话，直接返回使用：如果不存在，则创建一个新的会话返回。还有一个重载的getSession方法，具有一个boolean类型的参数，其中request.getSession(true)和request.get
Session()完全相同，而request.getSession(false)意思是如果存在会话对象就返回使用，如果不存在则返回null。
9.有哪几种方式可以设置会话有效时间？
解析 会话对象都被存储在容器中，如果很长时间不使用，就应该被销毁，以保证内存的有效使用。容器总是会为会话设置默认的有效时间，大多数是30分钟，也可以自己定义会话的有效时间。
参考答案 有两种方法可以设置会话的有效时间，一种是在web.xml中配置，如下所示：
<session-config>
	<session-timeout>40</session-timeout>
</session-config>
使用这种方式设置的有效时间，是对当前应用中所有会话都有效，单位是分钟。
还有一种方式是使用HttpSession中的setMaxInterval(int)方法，这个方法能够设定最大不活动时间，超过这个时间会话没有被访问，即被容器销毁。这个方法只能够控制调用该方法的会话对象，不会对所有会话对象生效。
10. 什么是URL重写？能解决什么问题？
解析  大多数容器实现会话，都是基于cookie机制实现的。然而，cookie可能被用户人为地设置失效，这种情况下，会话页将无效。为了能够在cookie失效时依然使会话有效，可以使用URL重写策略。如果使用某些MVC框架编程，如Struts，这些问题都已经在框架层面得到了解决。
参考答案  URL重写就是使用响应接口中的encodeURL(path)方法，把指定的path重新编码，将名字是JSESSIONID的cookie的值强制加到path对应的URL中，传递到服务器端，这样就能够保证即使cookie被阻止，服务器端永远能得到会话对象的ID值，使得会话有效。
11. 会话接口中提供了处理会话属性的方法，请列举每个方法并说明其作用。
解析   如果某些对象需要在会话范围内有效，那么就可以考虑使用会话范围的属性。保存在会话范围内的属性，在当前会话中一直有效。然而，由于会话的生命中期较长，所以属性也将随着会话一直存在于内存中。只有当必须使用会话属性时再考虑使用，能用请求属性解决的场合就使用请求属性，开发员必须能够正确选择不同范围属性进行使用。
参考答案  会话接口中有三个和属性有关的方法，分别是：setAttribute（String，Object），可以将一个对象设置一个名字，存储在会话中；getAttritute（String），可以跟据属性的名字返回属性值；removeAttribute（String），可以根据属性的名字删除属性。
12. 什么是上下文对象？如何获得上下文对象？
解析   上下文是一个全局的概念，每个应用都有一个唯一的上下文对象。上下文接口中定义了一系列的方法，开发员应该熟悉这个接口的常用方法。
参考答案   当容器启动时，会加载容器中的每一个应用，并且针对每一个应用创建一个对象，称为上下文对象。每个应用都只有一个唯一的上下文对象，Servlet  API 中提供了Servloracleontext 接口来表示上下文对象。要在Servlet中获得上下文对象非常简单，直接使用getServloracleontext（）方法就可以返回当前的上下文对象，在JSP中可以直接使用application内置对象使用上下文。
13. 如何配置上下文参数？在程序中如何获得上下文参数？
解析   如果在应用中的很多地方，都需要使用某一个参数，那么就可以配置一个上下文参数。上下文参数与Servlet初始化参数不同的是，上下文参数能够在应用所有资源里使用，而Servlet初始化参数在当前Servlet中使用。
参考答案   在web.xml中可以使用<context-param>配置上下文参数，如下所示：
           <context-param>
              <param-name>path</param-name>
              <param-value>/WEB-INF/props</param-value>
           </context-param>
要获得上下文参数，可以使用Servloracleontext接口中的getInitParameter方法返回。   
14、上下文接口中提供了处理属性的方法，请列举每个方法并说明其作用？
	解析：除了请求属性、会话属性外，还可以使用上下文属性。如果某个对象在上下文范围内使用，就可以考虑使用上下文属性存储。上下文的生命周期很长，应用加载时初始化，直到应用重新加载才被销毁，所以只有必须使用上下文属性时方可使用，否则应该尽量使用请求属性。
参考答案：上下文接口中有三个和属性有关的方法，分别是setAttribute(String ,Object),可以将一个对象设置一个名字，存储到上下文范围中：getAttribute(String)，可以根据属性的名字返回属性值：removeAttribute(String)，可以根据属性的名字删除属性。
15、说明请求属性、会话属性、上下文属性的区别？
	解析：属性在Web应用开发中占有举足轻重的地位，是用来在组件之间传递对象的主要方式。主要有三个对象可以储存属性，即请求、会话、上下文。由于请求生命周期最短，所以应该尽量使用请求属性，而只有在必须用会话属性或者必须用上下文属性时菜考虑使用这两种属性。
	参考答案：请求属性是请求范围内的属性，除了请求转发外，只在当前的请求中有效：会话属性是会话范围内的属性，只要会话没有失效，就一直随着当前的会话所在：上下文属性是上下文范围的属性，只要容器没有重新加载应用，就一直随着上下文对象存在。应该尽量使用请求属性实现功能，只有在必须用会话属性或者必须用上下文属性时才考虑使用这两种属性。
16、请说明ServloracleontextEvent什么场景下被触发，以及如何处理？
	解析：事件处理在很多时候非常有效，开发人员应该熟悉Servlet中得常用时间类别，并熟悉每种事件触发的条件。
	参考答案：当上下文对象被初始化或者被销毁时，将触发ServloracleontextEvent，要处理该事件，可以自定义事件处理类实现ServloracleontextListener接口；然后覆盖该接口中的方法，实现处理逻辑。
17、请说明HttpSessionEvent什么场景下会被触发，以及如何处理？
	解析：会话事件在很多场合可以使用，开发人员应该熟悉会话事件的触发条件以及处理方法等。
	参考答案：当会话对象有变化的时候，将触发HttpSessionEvent事件发生，例如会话被创建、会话被销毁、会话被活化、要处理该事件，有两个接口可以监听，分别是HttpSessionListener和HttpSessionActivationListener。其中前者监听会话创建和销毁的情况，后者监听会话活化和钝化的情况。
18、如何在web.xml中配置监听器，使监听器生效？
解析  监听器必须在web.xml中配置才能生效。
参考答案  在web.xml中，可以使用<listenner>配置监听器，如下所示：
		<listener>
		<listener-class>com.oracle.listener.CounterListener</listener-class>
		</listener>
19、简述监听器的开发配置步骤。
解析  每种监听器的开发和配置步骤都非常相似，开发员应该做到熟练掌握。
参考答案
(1)根据需求分析需要使用哪种监听器。
(2)创建类实现监听器接口，并实现接口中必要的方法，实现监听功能。
(3)在web.xml中使用<listener>配置监听器。
20、过滤器有什么作用 ？
解析  过滤器是web应用中非常重要的概念，甚至在Strust2框架中也作为核心控制器使用。
参考答案  在web应用中，往往需要一些通用的处理和控制，如果把这些通用的处理编写在每一个需要的资源文件中，代码就很冗余，且不好管理。只要需要修改，就得修改所有文件中的相关代码，造成维护困难。过滤器就是用来执行这些通用处理的程序，往往可以用来实现图像转换、数据压缩、登录验证、权限控制等。
21、Filter接口中定义了哪几个方法？分别有什么作用？
解析 Filter接口是所有过滤器都必须实现的接口，了解这个接口中的方法对开发员胜任过滤器开发非常重要。
参考答案 Filter接口中有以下三个方法：
	(1)init(FilterConfig filterConfig):该方法是对filter对象进行初始化的方法，仅在容器初始化filter对象结束后被调用一次。
	(2)doFilter(ServletRequest request,ServletResponse response,FilterChain chain):该方法是filter进行过滤操作的方法，是最重要的方法。过滤器实现类必须实现该方法。方法体中可以对request和response进行预处理。其中FilterChain可以将处理后的request和response对象传递到过滤链上的下一个资源。
	(3)destroy():该方法在容器销毁过滤器对象前被调用。
22、简述过滤器的开发配置步骤
解析  开发员应该熟练掌握过滤器的开发配置步骤。
参考答案
(1)创建类实现Filter接口。
(2)实现Filter接口中的方法，重点实现doFilter方法对请求和响应进行过滤。
(3)在web.xml中配置过滤器，使用<filter>配置过滤器的类和名字，使用<filter-mapping>配置过滤器需要过滤的资源路径。
23.	过滤器的配置中，<dispatcher>元素是什么含义？有几个可选值？
解析：<dispatcher>元素师Servlet2.4以后新增的配置能够用来指定转发方式
参考答案： <dispatcher>可以配置能够被过滤的URL的请求方式，有以下四个值可以使用； 
（1）	   请求方式，是一种默认的方式。即不配置disoatcher选项时，默认过滤REQUEST方式请求的URL，包括在地址栏输入URL，表单提交，超级链接，响应重定向，但是如果指定了其他dispatcher值，REQUEST也必须显式指定才能生效。
（2）	   FORWARD:转发方式，表示可以过滤请求转发方式访问的URL.
（3）	   INCLUDE:包含方式，表示可以过滤动态包含的URL。
（4）	   ERROR:错误方式，表示可以过滤错误页面


第三部分  详解JSP组件开发
1.列举至少5个JSPN内置对象，并说明其类型
解析  内置对象是JSP中非常重要的概念，是真正的Servlet API中的对象，不过是容器翻译JSP时进行声明创建的，所以在JSP中不需要声明创建就可以直接使用。Web开发员起码需要能够熟练使用JSP中常用的内置对象。
参考答案
（1）request:HttpServletRequest
（2）response:HttpServletResponse
（3）session:HttpSession
（4）application:Servloracleontext
（5）pageCountext: pageCountext
（6）out:JspWriter
2.说明<%@include%>和<jsp:include/>的区别
解析  JSP中的指令和标准动作中都有一个名字为include的元素，都是包含的意思，二者具体含义却不同，分别是静态和动态包含，开发员应该熟悉二者区别，避免混淆。
参考答案	<%@include%>是指令，是静态包含，在翻译期将把被包含的资源翻译到包含资源中，源代码合二为一。而<jsp:include/>是动作，是动态包含，在运行期动态访问被包含的资源，将生成的响应合二为一进行显示。
3.列举page指令中至少三种常用属性，并说明其含义。
解析	page指令时JSP中最常用的指令之一，开发员应该熟悉page指令的常用属性
参考答案
（1）import：用来导入需要使用的类。
（2）pageEncoding:指定JSP页面的编码。
（3）errorPage:指定错误页面。
4、<jsp:forward>的含义是什么？
解析：请求转发是经常使用的跳转方式，在JSP中有更为简单的方式进行请求转发，就是使用标准动作forward。
参考答案 <jsp:forward>可以在JSP中实现请求转发，类似在Servlet中使用RequestDispatcher的forward方法进行请求转发
5、列举与JavaBean相关的三个标准动作，并说明其含义。
解析：JavaBean可以实现MVC中的Model部分，然而它并不是一个真正的组件，而是有编程规范的Java类。为了能够便捷使用
JavaBean，JSP规范定义了一系列标准动作。
参考答案：与JavaBean相关的有以下三个标准动作。
（1）<jsp:useBean>：用来获得或者创建JavaBean实例。
（2）<jsp:setProperty>：用来为JavaBean的属性赋值。
（3）<jsp:getProperty>：用来显示JavaBean的属性值。
6、什么是EL？EL的主要作用是什么？
解析：随着JavaEE技术的发展，人们越来越希望JSP中的动态部分能够更加简练。可以使用<%=%>表达式在JSP中动态输出内容，
然而总是过于繁琐，因此出现了EL，可以很大程度简化JSP中的表达式。然而，在实际使用中，EL总是和JSTL配合使用才能发
挥更大作用
参考答案：EL是Expression Language 的简称，即表达式语言，主要用来替代表达式<%=%>,使得JSP更为简单。EL常常结合JSTL
一起使用，发挥更强大的作用。
7、列举EL中4个与属性相关的内置对象，并说明其含义。
解析：EL中定义了一系列的内置对象，其中与属性有关的内置对象特别常用，开发员应该熟练掌握。
参考答案：
（1）pageScope：可以获得PageContext范围的属性
（2）requestScope：获得请求范围的属性
（3）sessionScope：获得会话范围的属性
（4）applicationScope：获得上下文范围的属性
8、如果web.xml中定义了一个名字为rate的上下文参数，在JSP中如何使用EL进行输出？
解析 EL中定义了11个内置对象，分别能够输出不同的信息，其中initParam能够用来输出上下文参数
参考答案： ${initParam.rate}
9、EL中的内置对象pageContext，与其他内置对象有什么不同？
解析	EL的11个内置对象中，pageContext是一个非常特殊的内置对象。其他内置对象都只能输出特定的信息，例如requestScope只能输出请求范围的属性，并不是一个真正的请求对象。而pageContext是一个真正的PageContext类型对象，可以返回任意属性。
参考答案	pageContext内置对象非常特殊，它是一个真正的PageContext类型的对象，只要PageContext中存在getXXX方法，就可以使用${pageContext.XXX}将getXXX方法的返回值进行输出。而其他的内置对象都没有这个特点，只能输出特定的信息。
10、EL中的.与[]有什么区别？
解析	EL中的.和[]有类似的功能，特别容易混淆，开发员应该熟练掌握。
参考答案	EL中，使用.和[]都可以用来获得数据，然而某些情况下只能使用[]，而不能使用圆点，有以下三种情况只能使用[]：
（1）通过数组或集合的索引返回值，只能使用[]；
（2）属性值中包括-或者.等非字母或数字的字符，只能使用[]；
（3）属性值不是常量，而是变量时，只能使用[]。
11、JSP中的自定义标记有什么作用？
解析	自定义标记是JSP1.2版本开始支持的功能，可以将JSP文件中需要使用的Java功能定义成标记，在JSP文件中多次调用。自定义标记能够使得JSP文件结构简练，可读性强，可维护性也增强。
参考答案	使用自定义标记，能够使得JSP文件结构简练，减少冗余代码，能够在多个地方使用自定义标记，达到重复使用的目的，同时也使得动态功能更容易管理、维护。
12、简述开发自定义标记的主要步骤。
解析	开发自定义标记有基本的步骤，开发员应该做到熟悉。
参考答案
（1）根据需求设计需求开发的标记。
（2）在tld文件中描述标记的基本信息，包括标记名称、标记的属性、标记体的特征以及标记的处理器类等。
（3）根据tld描述的信息开发标记处理器类，实现标记的功能。
13、如何使用自定义标记？
解析	即使有的应用中不需要自行开发标记库，然而开发员至少需要能够熟练掌握自定义标记的使用方法。
参考答案
（1）将自定义标记相关的tld文件引入到工程中，可以存放到WEB-INF目录下。
（2）将自定义标记相关的jar文件引入到工程中，可以存放到WEB-INF\lib目录下。
（3）在JSP文件中，使用taglib指令指定标记库的uri，并指定使用该标记库的前缀。
（4）在JSP中需要使用标记的地方，利用前缀引用标记，传递属性即可使用。

14.简述tld文件的主要作用。
解析 tld 文件在标记库中有着举足轻重的作用，开发人员至少要了解tld文件中的主要信息。
参考答案 tld文件是标记库描述文件，主要描述了标记库的信息。主要包括标记名称、标记体的情况、标记中的属性、标记对应的处理器类。另外还会指定一个唯一的uri值，在jsp中使用标记库的时就通过这个uri进行引用。
15.JSTL是什么？有什么作用？
解析 目前标记库有很多，除了JSTL外，还有很多第三方提供的标记库，然而作用和使用步骤大同小异。开发员应该首先掌握标记库的含义以及使用，这样对其他标记库也能很快的熟练使用。
参考答案 JSTL是原sun公司定义的一套标准标签库，提供了一些在Web应用中常用的标签，例如迭代数组或集合的标签。使用JSTL能够使JSP代码更为简练，减少JSP中的代码量。这些标签能在多个场合重复使用，提高了开发效率。
16.如何使用JSTL
解析 使用JSTL和使用自定义的标记类似，也可以说，使用任何标记库的步骤都类似，无非是每个标记的作用、名字以及属性等不用而已。
参考答案
（1）首先引入JSTL的tld文件和相关的jar文件。
（2）在JSP中使用taglib指令指定要使用的tld的uri值，并自定义一个前缀。
（3）在需要使用标记的地方，使用前缀引用标记，设置必要的属性即可。
17.假设存在一个会话属性list，list是泛型为Customer的集合对象，Customer中包含custname、age、address三个属性。请示用JSTL中的迭代标记遍历该list，将集合中的数据显示到表格的行中。
解析 JSTL中有很多标记，开发员应该熟悉常用的标记的使用，例如迭代标记就是常用	标记之一。
参考答案
	<c:forEach Item=”${sessionScope.list}” var=”cust”>
		<tr>
		<td>${cust.custname}</td>
		<td>${cust.age}</td>
		<td>${cust.address}</td>
		<tr>
	</c:forEach>
18.如何在web.xml中配置异常处理
解析 异常处理一直是应用开发中面对的一个问题。在Web应用中，也可以使用try/catch/finally处理异常，同时，还可以在web.xml中进行配置，对某种异常进行统一处理
参考答案 在web.xml中配置异常处理的方式如下：
	<error-page>
	<exception-type>com.oracle.exception.RegisterException</exception-type>
	<location>/register.jsp</location>
	</error-page>
上述配置后，当发生了RegisterException却没有被捕获时，跳转到register页面进行处理。


第四部分 高级主题
1.Log4j有什么作用？
解析：Log4j目前使用最多的日志处理组件，程序员应该掌握Log4j
的使用。
参考答案：Log4j是Apache的一个开源项目，使用Log4j可以便捷地控制（      ）目的地，包括控制台，文件，GUI组件以及NT事件记录器等。同时，Log4j可以控制（      ）日志信息的输出格式，也能够通过定义每一条日志信息的级别，更加细致控制日志的（       ）程。
2.Log4j主要由哪三部分组成？每部分的主要作用是什么？
解析：掌握Log4j的使用，可以从了解Log4j的主要组件入手。
参考答案：Log4j包含三个主要组成部分，即Logger、Appender以及Layout。其中（      ）是日志记录器，是Log4j的核心组件；一个Logger可以指定多个Appender，Appender（      ）定日志信息的输出目的地，可以是文件、控制台或消息文件等；一个Appender又可以指定（       ）个Layout，Layout用来指定日志信息的格式，可以使HTML、简单文本等。
3.列举至少3种Log4j的输出目的地，并说明其含义。
解析：能够将诶之输出到不同目的地，是Log4j的一大特征。
参考答案
（1）org.apache. log4j.ConsoleAppender:将日志信息输出到控制台，如果Logger没有使（     ）addAppender显式添加Appender，默认使用ConsoleAppender。
（2）org.apache. log4j.FileAppender:将日志信息输出到一个文件。
（3）org.apache. log4j.DailyRollingFileAppender：将日志信息输出到一个日志文件，并且（     ）据指定的模式，可以按照一定的日期将日志信息输出到一个新的日志文件。
4.使用properties文件配置Log4j属性，要求日志级别为debug，目的地为文件（      ）式为HTML。
解析：使用Log4j进行日志管理，往往都在属性文件中配置相关的属性，开发员必须（      ）Log4j属性的配置，才能够顺利的使用Log4j。
参考答案：
       log4j.rootLogger=debug.appender1
       log4j.appender.appender1=org.apache.log4j.FileAppender
log4j.appender.appender1.Threshold=debug
log4j.appender.appender1.ImmediateFlush=true
log4j.appender.appender1.File=log.html
log4j.appender.appender1.Append=true
log4j.appender.appender1.layout=org.apache.log4j.HTMLLayout
log4j.appender.appender1.layout.LocationInfo=true
log4j.appender.appender1.layout.Title=Log Message
5.在web应用中使用Log4j记录日志，往往有哪些方法加载属性文件？
解析  web应用中使用Log4j，首先需要考虑的的问题是如何加载属性文件：
参考答案  web应用中加载Log4j的属性文件往往有以下两种方式：
（1）定义一个Servlet，并使用<load-on-startup>在web.xml中配置这个servlet，使得应用
加载时就初始化这个Servlet，从而可以在这个Servlet的init方法中加载Log4j属性文件。只要加载了应用，就会初始化Servlet，就会调用init方法，从而就会加载属性文件。
（2）定义一个上下文事件监听器，在监听器的contextInitialized方法中加载Log4j属性文件。
这样能够保证只要加载了应用，就会触发上下文时间，从而调用监听器中的contextInitialized方法，加载Log4j属性文件。
6.Ajax是什么含义？有什么作用？
解析  ajax并不是一个新技术，而是一系列已有技术的一个新的使用方法。目前，人们越来越关注用户体验，web应用开发员也应该注重这方面的技术发展。
参考答案  ajax是“Asynchronous JavaScript and XML”的简称，即异步的JavaScript和XML。Ajax就是能够在web浏览器中实现与桌面应用类似客户端技术。例如，使用ajax技术后，服务器端不会每次都返回一个完整的页面，而会只返回一部分文本，只刷新页面的一部分，不需要等待整个页面刷新；使用ajax可以异步提交请求，不需要必须等待服务器端相应后才进行其他操作。可以说，Ajax试图在web应用中实现桌面应用的功能和交互性，
并能够使用和桌面应用中类似的友好界面和漂亮空间。
7.Ajax中的XMLHttpRequest对象有哪些作用？
解析  XMLHttpRequest对象是Ajax技术的核心对象，使用Ajax技术都是从XMLHttpRequest对象开始。
参考答案  XMLHttpRequest对象是Ajax技术的核心对象，使用Ajax技术都是从XMLHttpRequest对象开始。在ajax
应用程序中，XMLHttpRequest对象负责将用户信息以异步方式发送到服务器端，并接收服务器相应的信息和数据。
8.什么是DOM？有什么作用？
解析：DOM是独立于脚本和语言的概念，很多语言都对DOM进行了实现，DOM能够对标记语言进行结构化的表示。
参考答案：DOM是Document Object Model的简称，即文档对象模型，是用于HTML和XML文档的API。DOM提供了文档的结构化表示，把网页和脚本或编程语言连接了起来，可以修改文档的内容和视觉表现。使用Ajax编程时，从服务器返回的内容需要更新到客户端页面中，就可以使用DOM对象操作浏览器内容，进行局部刷新。
9.JSF框架的主要特点是什么？
解析：JSF框架已经是JavaEE规范的一部分，是非常有发展前景的框架，开发人员可以关注。
参考答案：JSF是一种已组件为中心来开发JavaWeb应用的框架。JSF提供了一组用户界面组件，这些组件是可重用的，开发员可以利用这些组件方便地构建Web应用的用户界面；
JSF框架支持开发自定义的用户界面组件，而且这些自定义用户界面组件同样可以重用。另外，使用JSF框架，可以方便地进行输入检验、国际化编程等。
