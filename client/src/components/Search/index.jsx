import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Search = () => (
  <div>
    <SelectField
      floatingLabelText="Frequency"
      value="Front-end developer"
    >
      <MenuItem value="Front-end developer" primaryText="Front-end developer" />
    </SelectField>
    <SelectField
      floatingLabelText="Experience"
      value="3"
    >
      <MenuItem value="3" primaryText="3" />
    </SelectField>
    <SelectField
      floatingLabelText="English"
      value="Intermediate"
    >
      <MenuItem value="Intermediate" primaryText="Intermediate" />
    </SelectField>
    <RaisedButton label="Search" />
  </div>
);

export default Search;
