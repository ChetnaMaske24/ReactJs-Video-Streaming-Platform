import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';


function App() {
  return (
   <main>
       <Header />
       <div className='min-h-[90vh]'>
            <Outlet/>
        </div>
   </main>
  );
}

export default App;
