import React, { Component }  from 'react';
import error from '../assets/error404.jpg'

function Error404() {
    return (
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <img src="../assets/error404.jpg" alt="melting ice cream cone" />
        </main>
    );
}

export default Error404;
