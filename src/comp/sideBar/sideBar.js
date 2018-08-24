import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

export default class SideBar extends React.Component {
  constructor (props, context) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Menu
          defaultSelectedKeys={['home']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="home">
            <Link to="/home" replace>
              <Icon type="pie-chart" />
              <span>home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="todos">
            <Link to="/todos" replace>
              <Icon type="desktop" />
              <span>todos</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="shopcart">
            <Link to="/shopcart" replace>
              <Icon type="desktop" />
              <span>shopcart</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
