import React,{ Component } from 'react';
import  ReactDOM,{render} from 'react-dom';
/*import * as Com from './component';
console.log(Com);*/

import Button from './components/Button/Button';
class App extends  Component{

    render(){
        return (
            <div><h1>Hello dfdfdsfdsd world</h1></div>
        )
    }
}
let root = document.getElementById('app');

/*render(<App />,root);*/
ReactDOM.render( <Button />, root );