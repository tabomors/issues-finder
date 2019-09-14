import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import UISelect from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(() => ({
  input: {
    width: '100%',
    padding: 40,
    marginTop: 100
  }
}));

interface IOptions {
  value: string;
  disabled?: boolean;
  label: string;
}

interface ISelectProps {
  name?: string;
  value: string;
  handleChange: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode
  ) => void;
  options: IOptions[];
  helperText?: string;
}

export const BaseSelect: React.FC<ISelectProps> = ({
  name,
  value,
  handleChange,
  helperText,
  options
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.input}>
      <UISelect value={value} onChange={handleChange} name={name} displayEmpty>
        {options.map(({ value: optionValue, disabled = false, label }) => {
          return (
            <MenuItem value={optionValue} disabled={disabled} key={value}>
              {label}
            </MenuItem>
          );
        })}
      </UISelect>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

interface ILanguageSelect {
  language: string;
  handleLanguageSelect: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode
  ) => void;
}

export const LanguageSelect: React.FC<ILanguageSelect> = ({
  language,
  handleLanguageSelect
}) => {
  return (
    <BaseSelect
      value={language}
      handleChange={handleLanguageSelect}
      options={[
        { value: '', disabled: true, label: 'Choose issue language' },
        { value: 'javascript', label: 'JavaScript' },
        { value: 'java', label: 'Java' }
      ]}
      helperText={'Choose issue language'}
    />
  );
};
