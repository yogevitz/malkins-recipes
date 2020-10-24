import React from 'react';
import './App.css';

import { Button, Slider, FormControlLabel, Checkbox } from '@material-ui/core';
import { CheckBoxOutlined, CheckBoxOutlineBlankOutlined } from '@material-ui/icons';

function App() {
  const [hunger, setHunger] = React.useState(40);
  const [complexity, setComplexity] = React.useState(60);
  const [hamburger, setHamburger] = React.useState(false);

  const renderTitle = () => (
    <div className="title">
      <h2>Malkin's Recipes</h2>
    </div>
  );

  const renderSettings = () => (
    <div className="settings">
      {renderHunger()}
      {renderComplexity()}
      {renderHamburger()}
    </div>
  );

  const renderGenerate = () => (
    <Button onClick={() => {}} variant="contained" color="secondary">
      Generate!
    </Button>
  );

  const renderHunger = () => (
    <div className="hunger">
      Hunger
      <Slider
        value={hunger}
        onChange={(event, newValue) => setHunger(newValue)}
        step={20}
        color="secondary"
      />
    </div>
  );

  const renderComplexity = () => (
    <div className="complexity">
      Complexity
      <Slider
        value={complexity}
        onChange={(event, newValue) => setComplexity(newValue)}
        step={20}
        color="secondary"
      />
    </div>
  );

  const renderHamburger = () => (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            value={hamburger}
            onChange={(event, newValue) => setHamburger(newValue)}
            icon={<CheckBoxOutlineBlankOutlined />}
            checkedIcon={<CheckBoxOutlined />}
          />
        }
        label="Hamburger"
        className="hamburger"
      />
    </div>
  );

  return (
    <div className="App">
      {renderTitle()}
      {renderSettings()}
      {renderGenerate()}
    </div>
  );
}

export default App;
