import * as React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { connect } from 'react-redux';

export interface Props {
  list: any;
}

export interface State {
  // handle:any
  //   onClick: any;
}

class Breadcrumb1 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // this.state = { :  };
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/DatePicker1">
            <HomeOutlined />
          </Breadcrumb.Item>
          {this.props.list.map((res) => {
            return <Breadcrumb.Item href={res.spell}>{res.name}</Breadcrumb.Item>;
          })}
        </Breadcrumb>
      </div>
    );
  }
}

const stateToProps = (state: any) => {
  return {
    list: state.list,
  };
};

export default connect(stateToProps, null)(Breadcrumb1);
