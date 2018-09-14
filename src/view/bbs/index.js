import React, { Component } from 'react'
import { Row, Col, Input } from 'antd'
import s from './index.css'

export default class Bbs extends Component {
  constructor (props, context) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={18} xl={18} className={s.wrap}>
            <div>
              <Input.Search
                placeholder="搜索与他的聊天记录"
                enterButton="搜索"
                onSearch={value => console.log(value)}
              />
            </div>
            <div style={{
              height: '550px',
              overflowY: 'scroll',
              margin: '10px 0',
              border: '1px solid #ebedf0',
              borderRadius: '5px' }}>
              <ul>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
                <li style={{ margin: '20px 0px' }}>1212333</li>
              </ul>
            </div>
            <div>
              <Input addonBefore="发送给xxx：" />
            </div>
            <div>
              <Input.TextArea rows={4} autosize={{minRows: 4, maxRows: 4}} />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
