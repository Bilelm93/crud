import axios from 'axios';
import React,{useState , useEffect} from 'react';
import Update from '/Update'

const Get = () => {

    const [list , setList] = useState([])


    useEffect(() => {
  


const fetchData= async ()=>{
   
   const result = await axios ('https://crudcrud.com/api/2f893ab5e7a44212813b0d6f62592cfd/unicorns');


   setList(result.data) 


}
 fetchData()
 }, [])


console.log(list)

    return (
        <div>
          
{list.map((el)=>

<table >
    <tr>
        <td>{el.name}</td>
        <td>{el.lastName}</td>
        <td>{el.age}</td>
      <td><Update id={id}/></td>
      
       
    </tr>
  
</table>

)}

        </div>
    );
}

export default Get;
