import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button, Form } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { SimpleTaskContext } from '../../context/SimpleTaskContext';

const SidebarButton = (props) => {
  const {
    addItem, items, editItem, updateItem, setEditItem,
  } = useContext(SimpleTaskContext);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [lastModified, setLastModified] = useState('');
  const [fileSize, setFileSize] = useState('');

  const handleClose = () => {
    console.log(items);
    setEditItem(null);
    setShow(false);
  };

  const initializeForm = () => {
    if (editItem) {
      setName(editItem.name);
      setOwner(editItem.owner);
      setLastModified(editItem.lastModified);
      setFileSize(editItem.fileSize);
    } else {
      setName('');
      setOwner('');
      setLastModified('');
      setFileSize('');
    }
  };

  const handleShow = () => {
    initializeForm();
    setShow(true);
  };

  const handleSubmit = () => {
    if (name === '' || owner === '' || lastModified === '' || fileSize === '') {
      alert('Please fill up the inputs.');
    } else {
      const item = {
        name, owner, lastModified, fileSize, id: uuid(),
      };

      if (editItem) {
        editItem.name = name;
        editItem.owner = owner;
        editItem.lastModified = lastModified;
        editItem.fileSize = fileSize;
        updateItem(editItem);
      } else {
        addItem(item);
      }

      handleClose();
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeOwner = (e) => {
    setOwner(e.target.value);
  };

  const handleChangeLastModified = (e) => {
    setLastModified(e.target.value);
  };

  const handleChangeFileSize = (e) => {
    setFileSize(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      handleShow();
    }
  }, [editItem]);

  return (
    <li className="nav-item active">
      <Button variant="primary" onClick={handleShow} className="nav-link btn btn-dark">
        <FontAwesomeIcon icon={props.data.icon} size="lg" />
        <span className="ml-3">{props.data.title}</span>
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" onChange={handleChangeName} value={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicOwner">
              <Form.Label>Owner</Form.Label>
              <Form.Control type="text" placeholder="Enter owner" onChange={handleChangeOwner} value={owner} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastModified">
              <Form.Label>Last modified</Form.Label>
              <Form.Control type="date" placeholder="Last modified" onChange={handleChangeLastModified} value={lastModified} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicFileSize">
              <Form.Label>File size</Form.Label>
              <Form.Control type="number" placeholder="File size" onChange={handleChangeFileSize} value={fileSize} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </li>
  );
};

export default SidebarButton;
