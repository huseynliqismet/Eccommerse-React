import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import store from './redux/store';
import './i18n'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Suspense fallback={null}>
     <BrowserRouter>
       <Provider store={store}>
         <ToastContainer />    
           <App />
       </Provider>
    </BrowserRouter>
  </Suspense>
      

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
