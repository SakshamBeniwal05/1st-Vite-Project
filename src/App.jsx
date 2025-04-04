import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card';

function App() {

  const [f_data, setf_data] = useState([])

  async function fetching() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setf_data(data);
    }
    catch (error) {
      console.error('An error occurred:', error.message);
    }
  }

  useEffect(() => {
    fetching();
  }, [])


  return (
      <div className='box'>
        {f_data.map((f_data) => {
          return <Card id={f_data.id} title={f_data.title} body={f_data.body} />
        })}

      </div>
  )
}

export default App