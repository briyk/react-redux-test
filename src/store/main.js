import {createStore} from 'redux'



const initState = {
     value: 0,
     toggle: true
}

const counterReducer = (state =initState , action) =>{
     if(action.type === "increase") {      
          return{
               ...state,
               value: state.value + action.payload
          }
     }
     if(action.type === "decrease") {
          return{
               ...state,
               value: state.value -  action.payload
          }
     }
     if(action.type === "toggle"){
          return {
               ...state,
               toggle : !state.toggle
          }
     }
     return state ;
}

const store = createStore(counterReducer) ;
export default store ;