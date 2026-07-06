import { useState, useEffect } from 'react'
import TreeNode from './components/TreeNode';

function App() {
 
  const [data,setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    
    const  getData = async() =>  {
    try{
        const response =  await fetch('/data.json');
        if(!response.ok) throw new Error(`Download error: ${response.status}`);
        const res = await response.json()
        setData(res);
    }catch(e){
      console.error('Error: ', e);
      setError(e.message || 'Enable to load data');
    } finally {
        setIsLoading(false);
      }
  }
  getData();
  },[])

  return (
   <div className="tree">
    {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="error">Error: {error}</div>
      ) : (
        <TreeNode entries={data.root} depth={0} />
      )}
  </div>
  )
}

export default App