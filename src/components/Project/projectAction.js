import axios from 'axios';
import {baseUrl} from './../../contants';

export function addProject(formData) {
  console.log("IN ADD PROJ ",formData);
  let data = {
    'projectId': formData.projectId,
    'projectName': formData.projectName,
    'projectDescription': formData.projectDescription,
    'headedByUserId': formData.headedByUserId
    } 
    // console.log("ADD PROJECT DATA" , data)
    // TODO: MAKE AN API CALL TO BACKEND SERVER
    return (dispatch) => {
      axios({
        method: 'post',
        url: `${baseUrl}ahits/api/projects/`,
        data
      })
        .then((response) => {
          // console.log("adding project ..... ", response.data)
          getProjectsApi(dispatch)
        });
        
    }
}


function getProjectsApi(dispatch){
  axios({
    method: 'get',
    url: `${baseUrl}ahits/api/projects/all`
  })
    .then((response) => {
      // console.log("getting projects ", response.data)
      dispatch({
        type: 'GET_PROJECTS_SUCCESS',
        data: response.data
      })
    });
}
export function getProjects() {
  return (dispatch) => {
    getProjectsApi(dispatch)
  }
}


export function getUsers(){
  return (dispatch) => {
  axios({
    method: 'get',
    url: `${baseUrl}ahits/rest/user/users`
  })
    .then((response) => {
      // console.log("getting users ", response.data)
      dispatch({
        type: 'GET_USERS_SUCCESS',
        data: response.data
      })
    });
  }
}

export function deleteProject(id){
  return (dispatch) => {
  axios({
    method: 'get',
    url: `${baseUrl}ahits/api/projects/delete?projectIds=${id}`,
  })
    .then((response) => {
      console.log("deleting project ", response.data)
      getProjectsApi(dispatch)
    });
  }
}

