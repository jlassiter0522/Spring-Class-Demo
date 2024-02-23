import React, {useState, useEffect} from 'react'

// const AppContainer = (name, color, object) => {
const AppContainer = (props) => {
    const {name, color, object, count, increment} = props
    const [count2, setCount2] = useState(0)
    const [xkcdCurrent, setxkcdCurrent] = useState({})
    useEffect(() =>{
        axios.get('/xkcd/current')
        .then(function(response){
            //handle success
            setxkcdCurrent(response.data);
            console.log(response);
        })
        .catch(function(error) {
            //handle error
            console.log(error);
        })
    })


    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        {name} {count2}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => setCount2(count2 + 1)}>{count2}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => increment()}>{count}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h1>Hello, world!</h1>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </>
    )
}

export default AppContainer

//    // componentDidMount and componentDidupdate
//    useEffect(() => {
//
//        })
//    //componentDidMount
//    useEffect(() => {
//
//    },[])
//    //componentDidUpdate
//    useEffect(() => {
//        // run every time count changes
//    },[count])
//    //componentDidMount and componentDidupdate and componentWillUnmount
//    useEffect(() => {
//
//     return function cleanup(){
//        // cancel subscriptions
//     }
//    })