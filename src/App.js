import { useEffect, useState, createContext } from 'react';
import Header from './components/Header';

import Card from './components/Card';
import Form from './components/Form';
import Background from './components/Background';
import { fetchInfo } from './components/FetchInfo';

export const DataContext = createContext({});

function App() {
  const [info, setInfo] = useState({});
  const [ip, setIp] = useState('');

  useEffect(() => {
    fetchInfo(ip, setInfo);
  }, [ip]);
  return (
    <DataContext.Provider value={info}>
      <Background />
      <div className='text-center flex flex-col items-center justify-center absolute top-0 left-0 right-0 my-10 '>
        <Header />
        <Form setIp={setIp} />
        <Card />
      </div>
    </DataContext.Provider>
  );
}

export default App;
