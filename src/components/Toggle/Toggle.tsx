import React from 'react';

import { Button } from './Styles';

interface IToggle {
  theme: any;
  toggleTheme(): any;
}

const Toggle = ({ theme, toggleTheme }: any) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

export default Toggle;
