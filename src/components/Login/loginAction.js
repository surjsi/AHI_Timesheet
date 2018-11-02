import axios from 'axios';
import {baseUrl} from './../../contants';
let isAuthenticated = false
export function login(creds){
  console.log("in login action ",  creds)
      let data = new FormData();
      data.append('username', creds.username);
        data.append('password', creds.password);
      return (dispatch) => {
      axios({
          method : 'post' ,
          url:'http://localhost:6090/ahits/login',
          data
          
    }).then(response => {
            // console.log(response);
            dispatch({
            type: 'LOGIN_SUCCESS',
            isAuthenticated : true,
            data:response.data
        })
    })
  }
}

export function getLoggedUser(){
    return (dispatch) => {
        axios.get('http://localhost:6090/ahits/rest/user/userdetails')
        .then(response => {
            console.log("GET lOGGED USER ID" , response.status)
            dispatch({
                type : 'GET_LOGGED_USER_SUCCESS',
                data : response.data
            })
        }).catch(error  => {
            console.log(error);
            dispatch({
                type : 'GET_LOGGED_USER_ERROR'
            })
        })
    }
}





