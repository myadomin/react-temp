import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Route, Link, withRouter } from 'react-router-dom'
import GlobalHeader from './GlobalHeader'
import './index.styl'
import Mock from '@src/view/mock'
import Mobx from '@src/view/mobx'

class App extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { Header, Content, Footer, Sider } = Layout
    const imgUrl = require('@src/assets/logo.svg')
    // withRouter(App)以后 this.props就有location等路由相关信息了
    // 每次刷新 切换导航 重新输入url等都会进入这里 重新算出current给到selectedKeys
    // this.props.history.push(a) 动态跳转
    const current = this.props.location.pathname.replace(/\//, '') || 'mock'
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          // onBreakpoint={(broken) => { console.log(broken) }}
          // onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
        >
          <div className="layout-logo">
            <img src={imgUrl} className="layout-logoSvg"></img>
            <h1 className="layout-h1">啊啊啊啊附带</h1>
          </div>
          <Menu theme="dark" mode="inline"
            selectedKeys={[current]}
            defaultOpenKeys={['1']}
          >
            <Menu.SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="mock">
                <Link to="/mock" replace>
                  <span className="nav-text">mock</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="mobx">
                <Link to="/mobx" replace>
                  <span className="nav-text">mobx</span>
                </Link>
              </Menu.Item>
            </ Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <GlobalHeader />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Route exact path="/" component={Mock} />
              <Route path="/mock" component={Mock} />
              <Route path="/mobx" component={Mobx} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            xxxx ©2018 Created by xxxxx
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(App)
