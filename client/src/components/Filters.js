import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export const Filters = ({onSelectChange}) =>
  <div id='filters-column'>
    <FormGroup
      controlId="formControlsSelect"
      onChange={(e) => onSelectChange(e)}
    >
      <ControlLabel>Date Filters</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">None</option>
        <option value="currentMonth">Current Month</option>
        <option value="threeMonths">Three Months</option>
        <option value="sixMonths">Six Months</option>
        <option value="currentYear">Current Year</option>
      </FormControl>
    </FormGroup>
  </div>


