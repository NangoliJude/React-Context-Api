import React, { Component } from 'react';
import { AppContext } from './context'

class AppProvider extends Component{
    state = {
        name: 'Eric',
        age: 25
    }

    addYears = ()=>{
        this.setState({age: this.state.age +1 })
    }
    render(){
        return(
            <AppContext.Provider value={{
                 state: this.state,
                 addYears: this.addYears }} >
              {this.props.children}
            </AppContext.Provider>
        )
    }
};

export default AppProvider;