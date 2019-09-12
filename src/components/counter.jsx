import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
        <React.Fragment>
            {/* <img src={this.state.imageUrl} alt=""/> */}
            <span style = {{ fontSize:15}} className = {this.getBadgeClasses()}>{this.formatCount()}</span> 
            <button onClick={() => this.props.onIncrement(this.props.counter)} 
                className = "btn btn-secondary btn-sm">Increment
            </button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2">Delete</button>
            <br/>
        </React.Fragment>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-4 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;