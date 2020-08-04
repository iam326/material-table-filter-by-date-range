import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

type Props = {
  title: string;
};

const Header: React.FC<Props> = (props) => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography component="h1" variant="h6" color="inherit" noWrap>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
