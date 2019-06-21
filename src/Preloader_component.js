import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';

class Preloader_component extends React.Component {
    render() {
        return (
            <Preloader>
                <h1>Welcome to my app!</h1>
                <h2>It's being preloaded!</h2>
                <Placeholder>
                    <span>Loading...</span>
                </Placeholder>
            </Preloader>
        );
    }
}

export default Preloader_component;
