### react 脚手架
 1. react 脚手架 
>1. xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目
>1. 包含了所有需要的配置（语法检查、jsx编译、devServer…）
>2. 下载好了所有相关的依赖
>3. 可以直接运行一个简单效果
>2. **react提供了一个用于创建react项目的脚手架库: create-react-app**  
>3. 项目的整体技术架构为:  react + webpack + es6 + eslint
>4. 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化
 2. 创建项目并启动
>1. 全局安装：npm i -g create-react-app
>2. 切换到想创项目的目录，使用命令：create-react-app hello-react
>3. 进入项目文件夹：cd hello-react
>4. 启动项目：npm start    
3. 脚手架项目结构
```
public ---- 静态资源文件夹
		favicon.icon ------ 网站页签图标
		index.html -------- 主页面
		logo192.png ------- logo图
		logo512.png ------- logo图
		manifest.json ----- 应用加壳的配置文件
		robots.txt -------- 爬虫协议文件
src ---- 源码文件夹
		App.css -------- App组件的样式
		App.js --------- App组件
		App.test.js ---- 用于给App做测试
		index.css ------ 样式
		index.js ------- 入口文件
		logo.svg ------- logo图
		reportWebVitals.js
			--- 页面性能分析文件(需要web-vitals库的支持)
		setupTests.js
			---- 组件单元测试的文件(需要jest-dom库的支持)
```
## todos案例
```
 一、todoList案例相关知识点
		1.拆分组件、实现静态组件，注意：className、style的写法
		2.动态初始化列表，如何确定将数据放在哪个组件的state中？
					——某个组件使用：放在其自身的state中
					——某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
		3.关于父子之间通信：
				1.【父组件】给【子组件】传递数据：通过props传递
				2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
		4.注意defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value
		5.状态在哪里，操作状态的方法就在哪里

```
#### react  ajax (待详细研究)
>http://www.axios-js.com/zh-cn/docs/
>1. React本身只关注于界面, 并不包含发送ajax请求的代码
>2. 前端应用需要通过ajax请求与后台进行交互(json数据)
>3. react应用中需要集成第三方ajax库(或自己封装)
#### react脚手架配置代理总结  (express webpack  代理部分的文档 https://www.webpackjs.com/)

## 二、github搜索案例相关知识点
		1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。
		2.ES6小知识点：解构赋值+重命名
					let obj = {a:{b:1}}
					const {a} = obj; //传统解构赋值
					const {a:{b}} = obj; //连续解构赋值
					const {a:{b:value}} = obj; //连续解构赋值+重命名
		3.消息订阅与发布机制
					1.先订阅，再发布（理解：有一种隔空对话的感觉）
					2.适用于任意组件间通信
					3.要在组件的componentWillUnmount中取消订阅
					```
					subscribe  [səbˈskraɪb]  订阅

					    消息订阅-发布机制
                        1.工具库: PubSubJS
                        2.下载: npm install pubsub-js --save
                        3.使用: 
                        1)import PubSub from 'pubsub-js' //引入
                        2)PubSub.subscribe('delete', function(data){ }); //订阅
                        3)PubSub.publish('delete', data) //发布消息
					```
		4.fetch发送请求（关注分离的设计思想）
					try {
						const response= await fetch(`/api1/search/users2?q=${keyWord}`)
						const data = await response.json()
						console.log(data);
					} catch (error) {
						console.log('请求出错',error);
					}
		```
		文档
                 1.https://github.github.io/fetch/
                 2.https://segmentfault.com/a/1190000003810652
                 4.5.2. 特点
                 1.fetch: 原生函数，不再使用XmlHttpRequest对象提交ajax请求
                 2.老版本浏览器可能不支持
                 4.5.3. 相关API
                 1)GET请求
                 fetch(url).then(function(response) {
                     return response.json()
                   }).then(function(data) {
                     console.log(data)
                   }).catch(function(e) {
                     console.log(e)
                   });
                 
                 2)POST请求
                   fetch(url, {
                     method: "POST",
                     body: JSON.stringify(data),
                   }).then(function(data) {
                     console.log(data)
                   }).catch(function(e) {
                     console.log(e)
                   })
                 
		```		

## 三、路由的基本使用
			1.明确好界面中的导航区、展示区
			2.导航区的a标签改为Link标签
						<Link to="/xxxxx">Demo</Link>
			3.展示区写Route标签进行路径的匹配
						<Route path='/xxxx' component={Demo}/>
			4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

## 四、路由组件与一般组件
			1.写法不同：
						一般组件：<Demo/>
						路由组件：<Route path="/demo" component={Demo}/>
			2.存放位置不同：
						一般组件：components
						路由组件：pages
			3.接收到的props不同：
						一般组件：写组件标签时传递了什么，就能收到什么
						路由组件：接收到三个固定的属性
											history:
														go: ƒ go(n)
														goBack: ƒ goBack()
														goForward: ƒ goForward()
														push: ƒ push(path, state)
														replace: ƒ replace(path, state)
											location:
														pathname: "/about"
														search: ""
														state: undefined
											match:
														params: {}
														path: "/about"
														url: "/about"

## 五、NavLink与封装NavLink
				1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名

## 六、Switch的使用
				1.通常情况下，path和component是一一对应的关系。
				2.Switch可以提高路由匹配效率(单一匹配)。

## 七、解决多级路径刷新页面样式丢失的问题
				1.public/index.html 中 引入样式时不写 ./ 写 / （常用）
				2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
				3.使用HashRouter

## 八、路由的严格匹配与模糊匹配
				1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
				2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
				3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

## 九、Redirect的使用	
				1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
				2.具体编码：
						<Switch>
							<Route path="/about" component={About}/>
							<Route path="/home" component={Home}/>
							<Redirect to="/about"/>
						</Switch>

## 十、嵌套路由
				1.注册子路由时要写上父路由的path值
				2.路由的匹配是按照注册路由的顺序进行的

## 十一、向路由组件传递参数
				1.params参数
							路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
							注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test}/>
							接收参数：this.props.match.params
				2.search参数
							路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
							注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
							接收参数：this.props.location.search
							备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
				3.state参数
							路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
							注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
							接收参数：this.props.location.state
							备注：刷新也可以保留住参数
				


## 十二、编程式路由导航
					借助this.prosp.history对象上的API对操作路由跳转、前进、后退
							-this.prosp.history.push()
							-this.prosp.history.replace()
							-this.prosp.history.goBack()
							-this.prosp.history.goForward()
							-this.prosp.history.go()

## 十三、BrowserRouter与HashRouter的区别
			1.底层原理不一样：
						BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
						HashRouter使用的是URL的哈希值。
			2.path表现形式不一样
						BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
						HashRouter的路径包含#,例如：localhost:3000/#/demo/test
			3.刷新后对路由state参数的影响
						(1).BrowserRouter没有任何影响，因为state保存在history对象中。
						(2).HashRouter刷新后会导致路由state参数的丢失！！！
			4.备注：HashRouter可以用于解决一些路径错误相关的问题。

## 十四、antd的按需引入+自定主题
			1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
			2.修改package.json
					....
						"scripts": {
							"start": "react-app-rewired start",
							"build": "react-app-rewired build",
							"test": "react-app-rewired test",
							"eject": "react-scripts eject"
						},
					....
			3.根目录下创建config-overrides.js
					//配置具体的修改规则
					const { override, fixBabelImports,addLessLoader} = require('customize-cra');
					module.exports = override(
						fixBabelImports('import', {
							libraryName: 'antd',
							libraryDirectory: 'es',
							style: true,
						}),
						addLessLoader({
							lessOptions:{
								javascriptEnabled: true,
								modifyVars: { '@primary-color': 'green' },
							}
						}),
					);
				4.备注：不用在组件里亲自引入样式了，即：import 'antd/dist/antd.css'应该删掉