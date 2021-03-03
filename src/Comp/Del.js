import React,{useState} from 'react';
import axios from 'axios'
const Del = () => {

    const [id , setId]= useState('')

const delData =(e)=>{
    e.preventDefault()
    axios.delete(`https://crudcrud.com/api/2f893ab5e7a44212813b0d6f62592cfd/unicorns/${id}`)
.then((data)=>{console.log(data)})
setId('')
}

console.log(id)

    return (
            <div>
            <input type="text" value={id}       onChange={(e)=>setId(e.target.value)} />
             <button onClick={delData}>del</button>
             </div>
    );
}

export default Del;
