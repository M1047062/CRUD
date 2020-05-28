import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/modal';
import EditForm from './EditForm';
import AddForm from './AddForm';
export default function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="flex-large">
            {props.edit?(
              <EditForm 
              setEdit={props.setedit}
              currentUser={props.currentuser}
              updateuser={props.updateuser}
              />
            ):(
          <div>
            <h2>Add user</h2>
            <AddForm addusers={props.addusers} onHide={props.onHide}/>
            </div>
            )}
             </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  