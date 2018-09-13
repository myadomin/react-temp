import React, { Component } from 'react'
import style from './index.css'
import { Form, Select, InputNumber, Button, AutoComplete, Radio } from 'antd'
const FormItem = Form.Item
const Option = Select.Option

class Delivery extends Component {
  constructor (props, context) {
    super(props)
    this.state = {
      nameList: []
    }
  }

  handleSearchName = (value) => {
    this.setState({
      nameList: !value.trim() ? [] : [
        value,
        value + value,
        value + value + value
      ]
    })
  }

  render () {
    const { nameList } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="游戏服"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 14 }}
        >
          <Select
            showSearch
            placeholder="请选择或搜索游戏服"
            optionFilterProp="children"
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </FormItem>
        <FormItem
          label="发送类型"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 14 }}
        >
          <Select
            placeholder="请选择发送类型"
            onChange={this.handleSelectChange}
          >
            <Option value="deliver">发货</Option>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </FormItem>
        <FormItem
          label="玩家姓名"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 14 }}
        >
          <AutoComplete
            dataSource={nameList}
            onSearch={this.handleSearchName.bind(this)}
            placeholder="请输入玩家姓名 是否需要远程搜索自动完成？"
          />
        </FormItem>
        <FormItem
          label="点数类型"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 14 }}
        >
          <Select
            placeholder="请选择点数类型"
            onChange={this.handleSelectChange}
          >
            <Option value="yuanbao">元宝</Option>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </FormItem>
        <FormItem
          label="发送数量"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 14 }}
        >
          <InputNumber min={1} precision={0} defaultValue={1} />
        </FormItem>
        <FormItem
          label="快设数量"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 14 }}
        >
          <Radio.Group name="radiogroup" defaultValue={300}>
            <Radio value={50}>50元</Radio>
            <Radio value={100}>100元</Radio>
            <Radio value={200}>200元</Radio>
            <Radio value={300}>300元</Radio>
            <Radio value={500}>500元</Radio>
            <Radio value={1000}>1000元</Radio>
            <Radio value={2000}>2000元</Radio>
            <Radio value={5000}>5000元</Radio>
            <Radio value={8000}>8000元</Radio>
          </Radio.Group>
        </FormItem>
        <FormItem
          label="元宝比例"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 14 }}
        >
          <InputNumber min={1} step={50} defaultValue={100} />
        </FormItem>
        <FormItem
          wrapperCol={{ span: 14, offset: 5 }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </FormItem>
        <ul>
          <li>游戏列表一般有多少个 刷新请求过来 前端搜索？</li>
          <li>发货有哪几个类型？</li>
          <li>玩家名称 关键字远程请求后端输出数组 前端出现select列表？</li>
          <li>点数类型哪几个？</li>
          <li>发送数量快设数量元宝比例：假如元宝200 意思是元宝200元/个？ 如果元宝比例设置是200 选择了200元快设数量 数量就自动变成1？</li>
          <li>发送数量 step=1？</li>
          <li>元宝比例 step=？？</li>
          <li>布局前后顺序变化下？</li>
        </ul>
      </Form>
    )
  }
}

const WrappedDelivery = Form.create()(Delivery)
export default WrappedDelivery
