import React from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

const SessionForm = ({onSessionSubmit, onFormChange}) =>
  <Form inline onSubmit={(e)=>onSessionSubmit(e)}>
    <FormGroup controlId='date'>
      <ControlLabel>Date</ControlLabel>
       { ' ' }
       <FormControl type='text' placeholder='eg 10/12/2015' onChange={(e)=>onFormChange(e)} />
    </FormGroup>
       { ' ' }
    <FormGroup controlId='hours'>
      <ControlLabel>Hours</ControlLabel>
       { ' ' }
      <FormControl type='text' placeholder='Hours' onChange={(e)=>onFormChange(e)}/>
    </FormGroup>
       { ' ' }
    <FormGroup controlId='profit'>
      <ControlLabel>Profit</ControlLabel>
       { ' ' }
      <FormControl type='text' placeholder='eg 1000 or -1000' onChange={(e)=>onFormChange(e)}/>
    </FormGroup>
    { ' ' }
    <Button type='submit'>
      Create Session
    </Button>
  </Form>

export default SessionForm;
