import React, { Component } from 'react';
import { directive } from '@babel/types';

class Lista extends Component {

    constructor(){
        super();
    }


    render(){

        return(
            <div className="Lista">
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/"> Fisionat </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto text-center">
                            <li className="nav-item active">
                                <a class="nav-link" href="/Lista"> Lista de pacientes </a>
                            </li>
                            <li className="nav-item active">
                                <a class="nav-link" href="/Alta"> Añadir Paciente </a>
                            </li>
                        </ul>
                    </div>  
                </nav>

                <div className="container"> 
                    <div className="col md-12"> 
                        <p> Esta es una lista</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Lista;