import React, {useState} from 'react';
import axios from 'axios'
const Add = () => {

const [name , setName] = useState("")
const [lastName , setLastName] = useState("")
const [age , setAge] = useState(0)

 


 const submitMe=(e)=>{
e.preventDefault()

axios.post( 'https://crudcrud.com/api/2f893ab5e7a44212813b0d6f62592cfd/unicorns' , {name , lastName , age})
.then(response =>{console.log(response)})
.catch(error => {console.log(error)})
setName('')
setLastName('')
setAge('')
  }

    return (
        <div>
            <form onSubmit={submitMe}>
                <div>
                    Name
                <input type="text" name="name" value={name}
       
       onChange={(e)=>setName(e.target.value)}
                />
                </div>

                <div>
                    Last Name
                <input type="text" name="lastName" value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                 />
                </div>

                <div>
                    Age 
                <input type="text" name="age" value={age}
               onChange={(e)=>setAge(e.target.value)}
                 />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Add;
