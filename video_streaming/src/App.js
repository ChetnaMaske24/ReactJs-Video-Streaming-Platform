import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MobileNavigation from './components/MobileNavigation';


function App() {
  return (
   <main className='pb-14 lg:pb-0'>
       <Header />
       <div className='min-h-[90vh]'>
            <Outlet/>
        </div>
        <MobileNavigation />
   </main>
  );
}

export default App;
