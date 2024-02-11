import { ToastContainer } from 'react-toastify';
import './app.css'
import { Quiz } from './components/Quiz';
import 'react-toastify/dist/ReactToastify.css';

export function App() {

  return <><Quiz/><ToastContainer position="bottom-center" theme="colored" autoClose={1000} /></>
}
