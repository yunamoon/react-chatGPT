
export function reducer(state, action) {

    let nextState;
  
    switch(action.type) {
      case 'INIT':
        return action.data;
      case 'CREATE':
       { nextState = [action.data, ...state];
        break; 
      }
      case 'UPDATE':
        {nextState =  state.map((item)=> String(item.id) === String(action.data.id)? action.data : item);
        break; }
      case 'DELETE':
        {nextState = state.filter((item)=> String(item.id) !== String(action.id));
        break; }
    }
  
    localStorage.setItem('diary', JSON.stringify(nextState));
    return nextState;
  }
  