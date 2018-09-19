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
          <li>游戏列表 近页面拿一次，websocket可能推送新数据过来，加个主动刷新游列表按钮</li>
          <li>发货类型不需要了</li>
          <li>玩家名称 大部分是点聊天记录自动和输入进去 或者运营复制进去 不需要远程自动完成</li>
          <li>点数类型改成货币类型 进入请求后台给 单选框 有元宝 钻石 </li>
          <li>发送数量改成发送金额 后台告诉我元宝比例 xx个/元 前端只需要输入发送金额 旁边显示换算出的对应的元宝数量。还有钻石比例 换算出对应的钻石数量</li>
          <li>快设数量和元宝比例不需要了</li>
          <li>聊天室改成工作台 旁边显示新消息数量 工作台只有聊天记录 点击玩家姓名出抽屉  抽屉有发货表单 聊天输入 三种表格</li>
          <li>三种表格最近发我</li>
          <li>发货账单 回收账单？下次再讨论</li>
        </ul>
      </Form>
    )
  }
}

const WrappedDelivery = Form.create()(Delivery)
export default WrappedDelivery
