import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UIStepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

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

interface IStepperRenderProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  classes: ReturnType<typeof useStyles>;
}

interface IStepperProps {
  steps: string[];
  children: (props: IStepperRenderProps) => JSX.Element | null;
}

const useSteps = (defaultStep = 0) => {
  const [activeStep, setActiveStep] = useState(defaultStep);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return { activeStep, handleNext, handleBack };
};

export const Stepper: React.FC<IStepperProps> = ({ steps, children }) => {
  const classes = useStyles();

  const { activeStep, handleNext, handleBack } = useSteps(0);

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
      {children({
        activeStep,
        handleNext,
        handleBack,
        classes
      })}
    </div>
  );
};
