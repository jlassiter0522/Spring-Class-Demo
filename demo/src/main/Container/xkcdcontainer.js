import React from 'react'
import axios from 'axios'

const xkcdcontainer = () => {
    const {xkcdResponse, setXkcdResp} = useState({})
    useEffect (() =>{
        //runs once when component first loads this is component did mount
        axios.get('https://xkcd.com/info.0.json').then(function (response){
            console.log(response);
        })
        .catch(function (error){
            //handle error
            console.log(error);
        })
    },[])
}
//xkcdResponse holds info and set allows us to modify the info
export default xkcdcontainer