import './App.css';
import Navbar from './components/Navbar';
import Image from './components/Image';
import Description from './components/Description';
import { useState } from "react";
import { DataContext } from './context/DataContext'


function App() {
  const [data, setData] = useState(0)
  

  return (
    <DataContext.Provider value={{data, setData}}>
      <div className='px-8 py-8'>
      <Navbar/>
      <div className='description flex mt-16 justify-around sm:flex-col'>
        <div className='w-2/5'>
          <Image/>
        </div>
        <div className='w-2/5 mt-12 sm:w-full sm:mt-48 sm:ml-2'>
          <Description/>
        </div>
      </div>
      </div>
    </DataContext.Provider>    
  );
}

export default App;
