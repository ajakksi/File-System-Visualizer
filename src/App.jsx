import { useState, useEffect } from 'react'
import TreeNode from './components/TreeNode';

function App() {
 
  const [data,setData] = useState(null);

  async function getData() {
    try{
        const response =  await fetch('/data.json');
        if(!response.ok) throw new Error(response.status);
        const res = await response.json()
        setData(res);
    }catch(e){
      console.error('Error: ', e);
    }
          
  }


  useEffect(()=>{
    
    getData(); //eslint подчеркивает (Error: Calling setState synchronously within an effect can trigger cascading renders).Довольно часто с этим встречаюсь и много времени уходит на фикс, насколько это серьезно и стоит ли вообще обращать внимание
    
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
