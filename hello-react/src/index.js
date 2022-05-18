// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';//严格模式
// // 入口文件
// ReactDOM.render(<App/>,document.getElementById('root'))
// // ReactDOM.render(
// //   <React.StrictMode>
// //     {/* 严格模式 */}
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );
// // reportWebVitals();
// new
import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css';
const container=document.getElementById('root')
const root =createRoot(container)
root.render( <App/>)
