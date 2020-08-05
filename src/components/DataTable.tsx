import React from 'react';
import MaterialTable from 'material-table';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import jaLocale from 'date-fns/locale/ja';

import FilterDatePicker from './FilterDatePicker';

const tableData = [
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
    storeName: '浅草店',
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
    storeName: '浅草店',
    couponName: '日用品 お得クーポン',
    discountRate: 15,
    startDate: '2020-09-01',
    endDate: '2020-09-30',
  },
  {
    couponId: '0005',
    storeName: '秋葉原店',
    couponName: '全商品 お得クーポン',
    discountRate: 3,
    startDate: '2020-09-10',
    endDate: '2020-09-24',
  },
];

const DataTable: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
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
          },
          { title: '店舗', field: 'storeName' },
          {
            title: 'クーポン名',
            field: 'couponName',
          },
          {
            title: '割引率',
            field: 'discountRate',
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
        data={tableData}
        title="クーポン一覧"
      />
    </MuiPickersUtilsProvider>
  );
};

export default DataTable;
