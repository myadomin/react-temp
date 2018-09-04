// 扁平化数据
const reactData =  {
  byId: {
    1: {id: 1, "title": "react11 nisdfsdfsdfsdfdfsdfsd"},
    2: {id: 2, "title": "react22 nisdfsdfsdfsdfdfsdfsd"},
    3: {id: 3, "title": "react33 nisdfsdfsdfsdfdfsdfsd"},
    4: {id: 4, "title": "react44 nisdfsdfsdfsdfdfsdfsd"},
    5: {id: 5, "title": "react55 nisdfsdfsdfsdfdfsdfsd"}
  },
  postIds: [1, 2, 3, 4, 5]
}

const frontendData =  {
  byId: {
    1: {id: 1, "title": "frontend11 inisdfsdfsdfsdfdfsdfsd"},
    2: {id: 2, "title": "frontend22 inisdfsdfsdfsdfdfsdfsd"},
    3: {id: 3, "title": "frontend33 inisdfsdfsdfsdfdfsdfsd"},
    4: {id: 4, "title": "frontend44 inisdfsdfsdfsdfdfsdfsd"},
    5: {id: 5, "title": "frontend55 inisdfsdfsdfsdfdfsdfsd"}
  },
  postIds: [1, 2, 3, 4, 5]
}

const getMockDataByType = (type) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(type === 'react' ? reactData : frontendData)
    }, 1000)
  })
}

export default {
  getMockDataByType
}
