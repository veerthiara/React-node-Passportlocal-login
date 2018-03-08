import axios from 'axios';
import { FETCH_USER} from './types';

export const fetchUser = () => async dispatch => {
      const res = await axios.get('/api/current_user');
      dispatch({type: FETCH_USER, payload: res.data });
};

export const submitlogin = (username=null, password=null, history) => async dispatch =>{
  try {
    const res = await axios.post('/api/login', {
    username: username,
    password:password,
  });
  history.push('/profile');
  dispatch({type: FETCH_USER, payload: res.data });

  }
  catch(error){
    console.log(error.response);
  }
};

export const submitsignup = (username=null, password=null, history) => async dispatch =>{
  try {
    const res = await axios.post('/api/signup', {
    username: username,
    password:password,
  });
  history.push('/success');
  dispatch({type: FETCH_USER, payload: res.data });
  }
  catch(error){
    console.log(error.response);
  }
};
