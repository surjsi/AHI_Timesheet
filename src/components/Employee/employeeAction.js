import axios from 'axios';
import {baseUrl} from './../../contants';

function getEmployeesApi(dispatch){
    axios({
      method: 'get',
      url:  `${baseUrl}ahits/rest/user/users`
    })
      .then((response) => {
        dispatch({
          type: 'GET_EMPLOYEES_SUCCESS',
          data: response.data
        })
      });
}


  export function getEmployees() {
    return (dispatch) => {
        getEmployeesApi(dispatch)
    }
  }


  export function addEmployee(formData,userId) {
   
    let data = {
      'id':formData.id,
      'loginId': formData.loginId,
      'firstName': formData.firstName,
      'lastName': formData.lastName,
      'dob': formData.dob,
      'designation': formData.designation,
      'joiningDate': formData.joiningDate,
      'role': formData.role,
      'supervisorId': formData.supervisorId,
      'location': formData.location
      } 
      console.log("IN ADD EMPL ",data,userId);
      // TODO: MAKE AN API CALL TO BACKEND SERVER
      return (dispatch) => {
        axios({
          method: 'post',
          url: 'http://localhost:6090/ahits/rest/user/adduser/'+userId,
          data
        })
          .then((response) => {
            console.log("adding employee ..... ", response.data)
            // On Success Trigger this action
            getEmployeesApi(dispatch)
          });
          
      }
  }
  