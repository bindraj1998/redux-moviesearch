


  let init={movies:[]}

export const reducer=(state=init,action)=>{

    switch(action.type){
        case "add":{
            return {...state,movies:action.payload}
        }
        default:{return state}
    }

}