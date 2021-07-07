import {createStore} from 'redux'
import cakeReducer from './CakeReducer'


const store=createStore(
    cakeReducer
)

export default store