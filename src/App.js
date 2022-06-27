import './App.css';
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function App() {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        videoStyle={{ width: '400px', height: '300px' }}
        videoContainerStyle={{position: 'absolute', overflow: 'unset', padding: 'unset'}}
        facingMode='environment'
      />
      <p style={{position: 'absolute', top: '50%', left: '0'}}>{data}</p>
    </>
  );
}

export default App;
