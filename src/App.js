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

const backgroundImages = [
  "https://i.ibb.co/MBz9R2c/burger-patties-hor.jpg",
  "https://i.ibb.co/sVwwVH1/Food-Photographed-by-Valeria-Aksakova-Image-via-Shutterstock-750x375.png",
  "https://i.ibb.co/z8dbr3h/home-compare-02.jpg",
  "https://i.ibb.co/c1bnJr6/lti0lqb4ej2erjgpx9yj.jpg",
  "https://i.ibb.co/bR9SFyy/twenty20-c9afd8f5-12c5-4fd1-b42d-dd0767ca53c0.jpg",
  "https://i.ibb.co/s6kSc1j/videos-for-learning-how-to-cook.jpg",
];

const style = {
  backgroundImage: `url(${backgroundImages[Math.floor(Math.random() * backgroundImages.length)]})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

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
    <div className="App" style={style}>
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
