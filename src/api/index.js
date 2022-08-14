import axios from 'axios'
// import { method } from 'lodash';
const baseUrl = 'http://vuecourse.zent.edu.vn';

export const apiAxios = axios.create({
    baseURL:`${baseUrl}/api`,
    headers: {
      post: {
        'Content-Type': 'application/json'
      }
    }
  })

  export default{
    getlistProducts(){
        return apiAxios({
            method: 'get',
            url:'/products'
        })
    },
    // saveProducts(){
    //     return apiAxios({
    //         method: 'post',
    //         url:'/products'
    //     })
    // },
  }

