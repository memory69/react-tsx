import * as React from 'react';
import '@/css/Home.scss';
// import { Component } from 'react';
import { Link, Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { changeList } from '../store/actionCreated';

//图片

//antd组件
import { Layout, Menu, Avatar, Button } from 'antd';

//组价文件
import DatePicker1 from './commponent/DatePicker';
import Form1 from './commponent/Form';
import Transfer1 from './commponent/Transfer';
import Table1 from './commponent/Table';
import Grid1 from './commponent/Grid';
import Affix1 from './commponent/Affix';
import Breadcrumb1 from './commponent/Breadcrumb';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

export interface Props {
  handle: any;
}

export interface State {
  collapsed: boolean;
  list: any;
  count: number;
  isshow: string;
  key: any;
}

const { Header, Sider, Content } = Layout;

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapsed: false,
      list: [
        {
          id: '0',
          name: 'DatePicker日期选择框',
          icon: UserOutlined,
          spell: '/DatePicker1',
        },
        {
          id: '1',
          name: 'Form表单',
          icon: VideoCameraOutlined,
          spell: '/Form1',
        },
        {
          id: '2',
          name: 'Transfer穿梭框',
          icon: UploadOutlined,
          spell: '/Transfer1',
        },
        {
          id: '3',
          name: 'Table表格',
          icon: UploadOutlined,
          spell: '/Table1',
        },
        {
          id: '4',
          name: 'Grid栏格',
          icon: UploadOutlined,
          spell: '/Grid1',
        },
        {
          id: '5',
          name: 'Affix固钉',
          icon: UploadOutlined,
          spell: '/Affix1',
        },
        {
          id: '6',
          name: 'Breadcrumb面包屑',
          icon: UploadOutlined,
          spell: '/Breadcrumb1',
        },
      ],
      count: 66,
      isshow: 'none',
      key: sessionStorage.getItem('key'),
    };

    // console.log(this.state.key);
  }

  // componentWillReceiveProps(_nextProps: any) {
  //   this.setState({
  //     key: sessionStorage.getItem('key'),
  //   });
  //   console.log(this.state.key);
  // }

  //显示隐藏
  // handle = () => {
  //   if (this.state.isshow == 'none') {
  //     this.setState({
  //       isshow: 'block',
  //     });
  //   } else {
  //     this.setState({
  //       isshow: 'none',
  //     });
  //   }
  // };
  // state = {

  // };
  handleKey = ({ key }: any) => {
    sessionStorage.setItem('key', key);

    // if (key == '') {
    //   sessionStorage.setItem('key', '0');
    // } else {
    //   sessionStorage.setItem('key', key);
    // }
    // console.log(key);
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo">
                <p>nav</p>
              </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.key]}>
                {this.state.list.map((res: any, i: any) => {
                  // console.log(res.spell);

                  return (
                    <Menu.Item key={i} onClick={this.handleKey} icon={<res.icon />}>
                      <Link to={res.spell}>{res.name}</Link>
                    </Menu.Item>
                  );
                })}
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                <div style={{ float: 'right', marginRight: '20px' }}>
                  <Avatar size="large" icon={<UserOutlined />} />
                </div>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: 'trigger',
                    onClick: this.toggle,
                  }
                )}
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <Button type="primary" onClick={this.props.handle(this.state.list)}>
                  点击
                </Button>
                {/* 局部跳转 */}
                <Switch>
                  <Route path="/DatePicker1" component={DatePicker1}></Route>
                  <Route path="/Form1" component={Form1}></Route>
                  <Route path="/Transfer1" component={Transfer1}></Route>
                  <Route path="/Table1" component={Table1}></Route>
                  <Route path="/Grid1" component={Grid1}></Route>
                  <Route path="/Affix1" component={Affix1}></Route>
                  <Route path="/Breadcrumb1" component={Breadcrumb1}></Route>
                  <Redirect to="/DatePicker1"></Redirect>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </BrowserRouter>
        {/* <img src={timg} alt="" width="100px" height="100px" /> */}
      </div>
    );
  }
}

const dispatchToProps = (dispatch: any) => {
  return {
    handle(e: any) {
      let action = changeList(e);
      dispatch(action);
    },
  };
};

export default connect(null, dispatchToProps)(Home);
