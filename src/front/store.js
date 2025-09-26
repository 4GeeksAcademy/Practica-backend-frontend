export const initialStore=()=>{
  return{
    message: null,
    user_profile: null,
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_hello':
      return {
        ...store,
        message: action.payload
      };
      
    case 'set_user_profile':
      return {
        ...store,
        user_profile: action.payload
      };
    
    default:
      throw Error('Unknown action.');
  }    
}
