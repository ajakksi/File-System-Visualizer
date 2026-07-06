import { useState, useEffect } from 'react'
import TreeNode from './components/TreeNode';

function App() {
 
  const [data,setData] = useState(null);

  useEffect(()=>{
    
    const  getData = async() =>  {
    try{
        const response =  await fetch('/data.json');
        if(!response.ok) throw new Error(response.status);
        const res = await response.json()
        setData(res);
    }catch(e){
      console.error('Error: ', e);
    }
          
  }
  
  getData();
  },[])

  return (
   <div className="tree">
    {data ? (
      Object.entries(data.root).map(([name, node]) => (
        <TreeNode name={name} node={node} key={name} depth={0} />
      ))
    ) : (
      <div>Loading...</div>
    )}
  </div>
  )
}

export default App