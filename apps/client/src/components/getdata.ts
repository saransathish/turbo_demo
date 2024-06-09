import { useQuery } from '@apollo/client';
import {  demodata } from './job-interface';
import { GetJobs } from './queries';

function getData(){
    const { loading, error, data } = useQuery<demodata>(GetJobs);
    if (loading){
       console.log("loading")
    }
    if (error){
        console.log(error);
    }
    if (data){
        console.log(data.ext_id)
    return data

    }
}
 
export default getData
