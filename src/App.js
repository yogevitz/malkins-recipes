import React from 'react';
import './App.css';

import {
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Switch,
  Card,
  CardContent,
} from '@material-ui/core';

function App() {
  const [isHeavy, setIsHeavy] = React.useState(true);
  const [isDairy, setIsDairy] = React.useState(false);
  const [isMeat, setIsMeat] = React.useState(true);

  const renderTitle = () => (
    <div className="title">
      <h2>Malkin's Recipes</h2>
    </div>
  );

  const renderSettings = () => (
    <div className="settings">
      {renderWeightLevel()}
      {renderyType()}
    </div>
  );

  const renderGenerate = () => (
    <Button
      onClick={() => alert(`Generate ${isHeavy ? 'Heavy' : 'Light'}${isDairy ? ', Dairy' : ''}${isMeat ? ', Meat' : ''}!`)}
      variant="contained"
      color="secondary"
      className="generate"
    >
      Generate!
    </Button>
  );

  const renderWeightLevel = () => (
    <div className="weight">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Light</Grid>
        <Grid item>
          <Switch checked={isHeavy} onChange={(event, newValue) => setIsHeavy(newValue)} />
        </Grid>
        <Grid item>Heavy</Grid>
      </Grid>
    </div>
  );

  const renderyType = () => (
    <div className="type">
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={isDairy} onChange={(event, newValue) => setIsDairy(newValue)} />}
          label="Dairy"
        />
        <FormControlLabel
          control={<Checkbox checked={isMeat} onChange={(event, newValue) => setIsMeat(newValue)} />}
          label="Meat"
        />
      </FormGroup>
    </div>
  );

  return (
    <div className="App">
      <Card className="card">
        <CardContent>
          {renderTitle()}
          {renderSettings()}
          {renderGenerate()}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
