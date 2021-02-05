import * as React from 'react';
// import { Component } from 'react';

import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const customFormat = (value: any) => `custom format: ${value.format(dateFormat)}`;

export interface Props {}

export interface State {}

class DatePicker1 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // this.state = { :  };
  }

  handle = (value: any) => {
    // console.log(value);
    value.map((res: any) => {
      console.log(moment(res._d).format('YYYY-MM-DD'));
    });
  };
  render() {
    return (
      <div>
        {' '}
        <Space direction="vertical" size={12}>
          <DatePicker
            defaultValue={moment('2015/01/01', dateFormat)}
            format={dateFormat}
          />
          <DatePicker
            defaultValue={moment('01/01/2015', dateFormatList[0])}
            format={dateFormatList}
          />
          <DatePicker
            defaultValue={moment('2015/01', monthFormat)}
            format={monthFormat}
            picker="month"
          />
          <RangePicker
            defaultValue={[
              moment('2015/01/01', dateFormat),
              moment('2015/01/01', dateFormat),
            ]}
            format={dateFormat}
            onChange={this.handle}
          />
          <DatePicker
            defaultValue={moment('2015/01/01', dateFormat)}
            format={customFormat}
          />
        </Space>
      </div>
    );
  }
}

export default DatePicker1;
