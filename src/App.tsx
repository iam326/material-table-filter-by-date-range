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
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import FilterDatePicker from './FilterDatePicker';

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
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <MaterialTable
                  options={{
                    search: false,
                    draggable: false,
                    filtering: true,
                  }}
                  columns={[
                    {
                      title: 'クーポン ID',
                      field: 'couponId',
                      filtering: false,
                    },
                    { title: '店舗', field: 'storeName', filtering: false },
                    {
                      title: 'クーポン名',
                      field: 'couponName',
                      filtering: false,
                    },
                    {
                      title: '割引率',
                      field: 'discountRate',
                      filtering: false,
                      cellStyle: { textAlign: 'right' },
                    },
                    {
                      title: '利用開始日',
                      field: 'startDate',
                      cellStyle: { textAlign: 'right' },
                      filterComponent: (props) => (
                        <FilterDatePicker
                          columnDef={props.columnDef}
                          onFilterChanged={props.onFilterChanged}
                          label={'から'}
                        />
                      ),
                      customFilterAndSearch: (
                        filterValue: string | null,
                        rowData: { startDate: string }
                      ) => !filterValue || rowData.startDate >= filterValue,
                    },
                    {
                      title: '利用終了日',
                      field: 'endDate',
                      cellStyle: { textAlign: 'right' },
                      filterComponent: (props) => (
                        <FilterDatePicker
                          columnDef={props.columnDef}
                          onFilterChanged={props.onFilterChanged}
                          label={'まで'}
                        />
                      ),
                      customFilterAndSearch: (
                        filterValue: string | null,
                        rowData: { endDate: string }
                      ) => !filterValue || rowData.endDate <= filterValue,
                    },
                  ]}
                  data={[
                    {
                      couponId: '0001',
                      storeName: '秋葉原店',
                      couponName: '日用品 お得クーポン',
                      discountRate: 10,
                      startDate: '2020-08-01',
                      endDate: '2020-08-07',
                    },
                    {
                      couponId: '0002',
                      storeName: '秋葉原店',
                      couponName: '酒類 お得クーポン',
                      discountRate: 5,
                      startDate: '2020-08-10',
                      endDate: '2020-08-20',
                    },
                    {
                      couponId: '0003',
                      storeName: '秋葉原店',
                      couponName: '食料品 お得クーポン',
                      discountRate: 8,
                      startDate: '2020-08-01',
                      endDate: '2020-08-31',
                    },
                    {
                      couponId: '0004',
                      storeName: '秋葉原店',
                      couponName: '化粧品 お得クーポン',
                      discountRate: 15,
                      startDate: '2020-08-21',
                      endDate: '2020-08-31',
                    },
                    {
                      couponId: '0004',
                      storeName: '秋葉原店',
                      couponName: '全商品 お得クーポン',
                      discountRate: 3,
                      startDate: '2020-08-25',
                      endDate: '2020-08-26',
                    },
                  ]}
                  title="クーポン一覧"
                />
              </MuiPickersUtilsProvider>
            </Paper>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;
