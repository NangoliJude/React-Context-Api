import React, { Component,Fragment } from 'react';
import {AppContext} from '../context/context'


class CryptoCard extends Component{
    render(){
        return(  <section>
            <AppContext.Consumer>
                {(context)=>(
                    <Fragment>
                    <p> {context.state.name}</p>
                    <p> {context.state.age}</p>
                    <button onClick={context.addYears}>Click me</button>
                    </Fragment>
                )}
            </AppContext.Consumer>
        </section>)
    }
}

export default CryptoCard;