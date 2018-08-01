import _ from 'lodash'
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:    
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      // {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
      return { ...events, [data.id]: data}
    case READ_EVENTS:
      // [
      //   {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
      //   {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
      // ]
      //
      // 上記の連想配列をlodashのmapKeysメソッドによる変換
      //
      // {
      //   1: {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
      //   2: {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
      // }
      return _.mapKeys(action.response.data, 'id') // 配列データを欲しいkeyを作成してオブジェクトに変換
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}
