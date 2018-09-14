import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Route, Link, withRouter } from 'react-router-dom'
import s from './index.css'
import GlobalHeader from './GlobalHeader'
import Home from '@src/view/home'
import Todos from '@src/view/todos/todos'
import Shopcart from '@src/view/shopcart/shopcart'
import Delivery from '@src/view/delivery'

class App extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      current: ''
    }
  }

  render () {
    const { Header, Content, Footer, Sider } = Layout
    const { SubMenu } = Menu
    const imgUrl = require('@src/assets/logo.svg')
    // withRouter(App)以后 this.props就有location等路由相关信息了
    // 每次刷新 切换导航 重新输入url等都会进入这里 重新算出current给到selectedKeys
    // this.props.history.push(a) 动态跳转
    const current = this.props.location.pathname.replace(/\//, '') || 'home'
    console.log(current)
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          // onBreakpoint={(broken) => { console.log(broken) }}
          // onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
        >
          <div className={s.logo}>
            <img src={imgUrl} className={s.logoSvg}></img>
            <h1 className={s.h1}>啊啊啊啊附带</h1>
          </div>
          <Menu theme="dark" mode="inline"
            selectedKeys={[current]}
            defaultOpenKeys={['1']}
          >
            <SubMenu key="1" title={<span><Icon type="appstore" /><span>Examples</span></span>}>
              <Menu.Item key="home">
                <Link to="/home" replace>
                  <span className="nav-text">home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="todos">
                <Link to="/todos" replace>
                  <span className="nav-text">todos</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="shopcart">
                <Link to="/shopcart" replace>
                  <span className="nav-text">shopcart</span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="delivery">
              <Link to="/delivery" replace>
                <Icon type="desktop" />
                <span className="nav-text">发货操作</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span className="nav-text">方方法分</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">撒旦法</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <GlobalHeader />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/todos" component={Todos} />
              <Route path="/shopcart" component={Shopcart} />
              <Route path="/delivery" component={Delivery} />
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
