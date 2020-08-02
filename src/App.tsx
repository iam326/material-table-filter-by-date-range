import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MaterialTable from 'material-table';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute">
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <MaterialTable
                columns={[
                  { title: "Adı", field: "name" },
                  { title: "Soyadı", field: "surname" },
                  { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
                  {
                    title: "Doğum Yeri",
                    field: "birthCity",
                    lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
                  },
                ]}
                data={[
                  {
                    name: "Mehmet",
                    surname: "Baran",
                    birthYear: 1987,
                    birthCity: 63,
                  },
                ]}
                title="Demo Title"
              />
            </Paper>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;
