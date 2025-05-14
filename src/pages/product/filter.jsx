import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Filter =({handleFilter})=> {
    
    
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Filters</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="default"
        name="radio-buttons-group"
        onChange={(e) => handleFilter(e)}
      >
        <FormControlLabel value="default" control={<Radio />} label="Default" />
        <FormControlLabel value="asc" control={<Radio />} label="Low To High" />
        <FormControlLabel value="desc" control={<Radio />} label="High To Low" />
      </RadioGroup>
    </FormControl>
  );
}
export default Filter