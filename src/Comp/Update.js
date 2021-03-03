import React,{useState , useEffect} from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
const Update = ({id}) => {

   console.log({id})
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   

    return (
        <div>
        


       



    <Button variant="primary" onClick={handleShow}>
      edit
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          
      <div>
        Name :  <input type="text"/>
          <br/>
       lastname :   <input type="text"/>
          <br/>
      age :    <input text="text"/>
      </div>
 

      </Modal.Body>
      <Modal.Footer>
      
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>



        </div>
    );
}

export default Update;
