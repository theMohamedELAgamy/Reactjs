import ReactDom from 'react-dom/client'
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
let root=ReactDom.createRoot(document.querySelector('#root'))
root.render(<App/>)