import React from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

const SessionForm = ({state, onSessionSubmit, onFormChange}) =>
  <Form inline onSubmit={(e)=>onSessionSubmit(e)}>
    <FormGroup controlId='date'>
      <ControlLabel>Date</ControlLabel>
       { ' ' }
       <FormControl type='text' placeholder='eg 10/12/2015' onChange={(e)=>onFormChange(e)} value={state.formState.date} />
    </FormGroup>
       { ' ' }
    <FormGroup controlId='hours'>
      <ControlLabel>Hours</ControlLabel>
       { ' ' }
      <FormControl type='text' placeholder='Hours' onChange={(e)=>onFormChange(e)} value={state.formState.hours} />
    </FormGroup>
       { ' ' }
    <FormGroup controlId='profit'>
      <ControlLabel>Profit</ControlLabel>
       { ' ' }
      <FormControl type='text' placeholder='eg 1000 or -1000' onChange={(e)=>onFormChange(e)} value={state.formState.profit} />
    </FormGroup>
    { ' ' }
    <Button type='submit' disabled={state.isSubmitting}>
      Add Session
    </Button>
  </Form>

export default SessionForm;
