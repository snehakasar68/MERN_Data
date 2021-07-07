//    import{createStore} from 'redux'
// import cakeReducer from './cake/CakeReducer'
// const store=createStore(cakeReducer)
// export default store   

  /* import{createStore} from 'redux'
import rootReducer from './rootReducer'

const store=createStore(rootReducer)
export default store */  

/*   import{createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const store=createStore(rootReducer,applyMiddleware(logger))
export default store  */ 

  /* import{createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer'

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))
export default store  */ 


import{createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

const store=createStore(rootReducer,applyMiddleware(thunk))
export default store  

