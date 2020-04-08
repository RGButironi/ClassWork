// takes a parameter url passes it to fetch()
//
export default function myFetch(url){
    return fetch(url, { })
    // returns the entire request object
        .then(x=> x.json());
                    //^ reads stream (serialized) and deserializes it to a json object
}