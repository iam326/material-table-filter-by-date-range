import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles(() => ({
  date: {
    marginTop: 0,
  },
}));

const FilterDatePicker = (props: {
  columnDef: any;
  onFilterChanged: (rowId: string, value?: string | null) => void;
  label?: string;
}) => {
  const { columnDef, onFilterChanged, label } = props;
  const classes = useStyles();
  return (
    <KeyboardDatePicker
      className={classes.date}
      disableToolbar
      id={`date-picker-${columnDef.tableData.id}`}
      variant="inline"
      inputVariant="standard"
      format="yyyy-MM-dd"
      margin="normal"
      error={false}
      helperText={null}
      value={columnDef.tableData.filterValue || null}
      onChange={(_, inputValue) => {
        onFilterChanged(columnDef.tableData.id, inputValue);
      }}
      label={label ? label : ''}
    />
  );
};

export default FilterDatePicker;
