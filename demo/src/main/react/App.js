import React, {Component} from "react";
import ReactDom from "react-dom";
import AppContainer from "./Container/AppContainer"

export class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            object: "Ball",
            count: 0
        }
    }

    render(){
//        const object ="Ball"
        const {object, count} = this.state
        const increment = () => {
            this.setState({count: this.state.count + 1})
        }
        return(
            <AppContainer
                name="Jose"
                color="Green"
                object={object}
                count={count}
                increment={increment}
            />
        )
    }
}

ReactDom.render(<App />, document.querySelector("#app"));





/*useEffect(()=>{

/},[props.ans, props.foo]) equivelnt of component did mount only runs once */