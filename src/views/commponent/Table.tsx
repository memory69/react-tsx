import * as React from 'react';

import { Table } from 'antd';

export interface Props {}

export interface State {
  columns: any;
  data: any;
}

class Table1 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          filters: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Jim',
              value: 'Jim',
            },
            {
              text: 'Submenu',
              value: 'Submenu',
              children: [
                {
                  text: 'Green',
                  value: 'Green',
                },
                {
                  text: 'Black',
                  value: 'Black',
                },
              ],
            },
          ],
          // specify the condition of filtering result
          // here is that finding the name started with `value`
          onFilter: (value: any, record: any) => record.name.indexOf(value) === 0,
          sorter: (a: any, b: any) => a.name.length - b.name.length,
          sortDirections: ['descend'],
        },
        {
          title: 'Age',
          dataIndex: 'age',
          defaultSortOrder: 'descend',
          sorter: (a: any, b: any) => a.age - b.age,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          filters: [
            {
              text: 'London',
              value: 'London',
            },
            {
              text: 'New York',
              value: 'New York',
            },
          ],
          filterMultiple: false,
          onFilter: (value: any, record: any) => record.address.indexOf(value) === 0,
          sorter: (a: any, b: any) => a.address.length - b.address.length,
          sortDirections: ['descend', 'ascend'],
        },
      ],
      data: [],
    };
    fetch('/mock/table.json').then((res) => {
      res.json().then((item) => {
        this.setState({
          data: item.data.list,
        });
      });
    });
  }

  onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  render() {
    return (
      <div>
        <Table
          columns={this.state.columns}
          dataSource={this.state.data}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Table1;
