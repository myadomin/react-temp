import React, { Component } from 'react'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import { changeSelectedType, getPostsIfNeed, refreshForce } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
  constructor (props, context) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  // 刷新进入页面
  componentDidMount () {
    const { dispatch, selectedType } = this.props
    dispatch(getPostsIfNeed(selectedType))
  }

  // 改变this.props.selectedType 触发下面
  componentWillReceiveProps (nextProps) {
    if (nextProps.selectedType !== this.props.selectedType) {
      const { dispatch, selectedType } = nextProps
      dispatch(getPostsIfNeed(selectedType))
    }
  }

  // 切换select 发dispatch改变state.selectedType mapStateToProps改变this.props.selectedType
  handleChange (selectedType) {
    this.props.dispatch(changeSelectedType(selectedType))
  }

  // 强制刷新当前类文章
  handleClick () {
    const { dispatch, selectedType } = this.props
    dispatch(refreshForce(selectedType))
    dispatch(getPostsIfNeed(selectedType))
  }

  render () {
    const { selectedType, posts, lastUpdated, isFetching } = this.props
    return (
      <div>
        <Picker onChange={this.handleChange} selectedType={selectedType} types={['react', 'frontend']} />
        <p style={{margin: '20px 0px'}}>
          {lastUpdated ? `Last updated at ${new Date(lastUpdated).toLocaleTimeString()}` : '---'} 
          {!isFetching && <button onClick={this.handleClick} style={{marginLeft: '10px'}}>Refresh</button>}
        </p>
        {isFetching ? <h3>isLoading ... </h3>: <Posts posts={posts}/>}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { selectedType, postsWithType } = state
  const { isFetching, items, lastUpdated } = postsWithType[selectedType] || { isFetching: true, items: [] }
  return {
    isFetching,
    lastUpdated,
    posts: items,
    selectedType
  }
}

export default connect(
  mapStateToProps,
  null
)(App)