import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { HashRouter, Route, Link } from 'react-router-dom'
import s from './index.css'
import GlobalHeader from './GlobalHeader'
import Home from '@src/view/home'
import Todos from '@src/view/todos/todos'
import Shopcart from '@src/view/shopcart/shopcart'

export default class App extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      current: 'home'
    }
  }

  componentWillMount () {
    const current = window.location.hash.replace(/#\//, '')
    this.setState({
      current
    })
  }

  render () {
    const { Header, Content, Footer, Sider } = Layout
    const { SubMenu } = Menu
    const imgUrl = require('@src/assets/logo.svg')
    return (
      <HashRouter>
        <Layout style={{ height: '100vh' }}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            // onBreakpoint={(broken) => { console.log(broken) }}
            // onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
          >
            <div className={s.logo}>
              <img src={imgUrl} className={s.logoSvg}></img>
              <h1 className={s.h1}>游戏发货平台</h1>
            </div>
            <Menu theme="dark" mode="inline"
              defaultSelectedKeys={[this.state.current]}
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
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span className="nav-text">斯芬斯蒂芬</span>
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
                <Route exact path="/" activeStyle={{color: 'red'}} component={Home} />
                <Route path="/home" activeStyle={{color: 'red'}} component={Home} />
                <Route path="/todos" activeStyle={{color: 'red'}} component={Todos} />
                <Route path="/shopcart" activeStyle={{color: 'red'}} component={Shopcart} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              xxxx ©2018 Created by xxxxx
            </Footer>
          </Layout>
        </Layout>
      </HashRouter>
    )
  }
}
