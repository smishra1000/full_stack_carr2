import React from "react"

class Lifecycle extends React.Component{
    constructor(props){
        console.log("mounting phase constructor")
        super(props)
        this.state = {
            name:"sameer",
            age:18,
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("mounting phase getDerivedStateFromProps")
        return {...state,address:props.address}

    }

     changeAge = ()=>{
        this.setState({age:this.state.age})
    }

    enterAge = (e)=>{
        this.setState({age:e.target.value})
    }

    render(){
        console.log("mounting phase render")
        return(
            <div>
                <h1>hello Lifecycle demo</h1>
                <h1>name: {this.state.name}</h1>
                <h1>age {this.state.age}</h1>
                <h1>address {this.state.address}</h1>
                <h1>adress props: {this.props.address}</h1>
                <input type="text" value={this.state.age} onChange={(e)=>this.enterAge(e)}></input>
                <button onClick={()=>this.changeAge()}>ChangeAge</button>

            </div>
        )
    }

    componentDidMount(){
        console.log("mounting phase componentDidMount")
        // setTimeout(()=>{
        //     console.log(this.state)
        //     this.setState({age:30})
        // },4000)

    }

    // update pahse methods 

    shouldComponentUpdate(prvProps,prevState,snapshot){
        console.log("update phase should component update")
        if(this.state.age===prevState.age) {
            return false
        }else{
            return true;
        }

    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevProps,prevState)
        return prevState

    }

    componentDidUpdate(state,props,snapshot){
        console.log(this.state,this.props,snapshot)

    }

    componentWillUnmount(){
        console.log("hi i am goint to remove")
    }
}

export default Lifecycle
