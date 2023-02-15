import React, { Component }  from 'react';
import error from '../assets/error404.jpg'

export default class Error extends Component {
    render(){
    return (
        
        <div className='error404'>            
            <img src={error} alt='melting ice cream cone' height={600} width={800} />
           <p className='backhome'><a href="/Home">Back Home</a></p>
        </div>
       
       
    )};
}