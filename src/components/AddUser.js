import { Modal, Form, Button, Input, SelectPicker } from 'rsuite';
import {useState, forwardRef} from 'react';
const selectData = ['MALE', 'FEMALE'].map(item => ({
    label: item,
    value: item
  }));
  
  const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);



export const AddUser = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
    textarea: ''
  });
  const handleClose = () => setOpen(false);

  return (
    <>
        
        <Button size="lg" onClick={() => handleOpen('lg')}>
          + Add User
        </Button>

      <Modal size={size} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form fluid onChange={setFormValue} formValue={formValue}>
            <Form.Group controlId="name-9">
              <Form.ControlLabel>First Name</Form.ControlLabel>
              <Form.Control name="name" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="name-9">
              <Form.ControlLabel>Last Name</Form.ControlLabel>
              <Form.Control name="name" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="email-9">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control name="email" type="email" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password-9">
              <Form.ControlLabel>Image Url</Form.ControlLabel>
              <Form.Control name="password" type="password" autoComplete="off" />
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Gender</Form.ControlLabel>
              <Form.Control name="select" data={selectData} accepter={SelectPicker} />
            </Form.Group>
            
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
