import React,{ Component } from 'react'
import Main from './components/Main';
import AppProvider from './components/context/appProvider';




class App extends Component{  
    render(){
        return(
            <AppProvider>
                <div>
                   <Main/>
                </div>
            </AppProvider>
        )
    }
};

export default App;