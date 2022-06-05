import { useState } from 'react'
import Header from './components/Header';

function App() {

  const [selectedPage, setSelectedPage] = useState('home')

  return (
    <div className="App">
        <Header 
          onPageSelection={(pageName) => setSelectedPage(pageName)}
        />
  
    </div>
  );
}

export default App;
