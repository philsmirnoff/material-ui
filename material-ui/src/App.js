import logo from './logo.svg';
import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { ButtonGroup, FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import TextField  from '@material-ui/core/TextField';



const CheckBoxExample = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control= {<Checkbox
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField variant="filled" color="secondary" type="email" label="The Time" placeholder="" />
        <CheckBoxExample />
        <ButtonGroup variant="contained" color="primary">
        <Button
            startIcon={<SaveIcon />}
            >
          Save
        </Button>
        <Button
            startIcon={<DeleteIcon />}
            >
         Discard
        </Button>
        </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
