// takes a parameter url passes it to fetch()
//
//export default function myFetch(url){
  //  return fetch(url, { })
    // returns the entire request object
     //   .then(x=> x.json());
                    //^ reads stream (serialized) and deserializes it to a json object
//}
import { CurrentUser } from "./Users";

const api_root = "http://localhost:3000";

export default async function myFetch(url, data){

    let response;
    const headers = {};
    if(CurrentUser && CurrentUser.userId != null){
        headers.authorization = "bearer " + CurrentUser.userId
    }
    if(data){
        response = await fetch(api_root + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    }else{
        response = await fetch(api_root + url, { 
            headers
         });
    }

    if(response.ok){
        console.log({ success: true })
        return await response.json();
    }else{
        console.log({ success: response.statusText })
        throw await response.json();
    }
}