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

interface ISelectProps {
  name?: string;
  updatedLanguage: string;
  handleLanguageSelect: any;
}

export const Select: React.FC<ISelectProps> = ({
  updatedLanguage,
  handleLanguageSelect
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.input}>
      <UISelect
        value={updatedLanguage}
        onChange={handleLanguageSelect}
        name="languageSelect"
        displayEmpty
      >
        <MenuItem value="" disabled>
          Choose issue language
        </MenuItem>
        <MenuItem value="javascript">JavaScript</MenuItem>
        <MenuItem value="java">Java</MenuItem>
      </UISelect>
      <FormHelperText>Choose issue language</FormHelperText>
    </FormControl>
  );
};

Select.defaultProps = {
  updatedLanguage: ''
};
