import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UIStepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

import { Select } from './Select';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '1100px',
    margin: '40px auto 0'
  },
  stepper: {
    padding: 0
  },
  buttonGroup: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-around'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ['Select issue language', 'Select issue labels'];
}

interface IStepperProps {
  name?: string;
  updatedLanguage: string;
  handleLanguageSelect: any;
}

export const Stepper: React.FC<IStepperProps> = ({
  updatedLanguage,
  handleLanguageSelect,
  children
}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  return (
    <div className={classes.root}>
      <UIStepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </UIStepper>
      {activeStep === 0 && (
        <Select
          updatedLanguage={updatedLanguage}
          handleLanguageSelect={handleLanguageSelect}
        />
      )}
      <div className={classes.buttonGroup}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        {activeStep === 0 && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={!updatedLanguage}
          >
            Next
          </Button>
        )}
      </div>
      {activeStep !== 0 && <>{children}</>}
    </div>
  );
};

Stepper.defaultProps = {
  updatedLanguage: ''
};
