import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    
    constructor(){
        super();
        this.state = {
            usuario:'',
            contraseña:''            
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5 caja">
                    <div className="wrapper fadeInDown border border-light rounded-pill pt-4 pb-4">
                        <div id="formContent">
                            <form>
                                <label className="badge badge-pill badge-secondary"> USUARIO </label>
                                <br/>
                                <input type="text" id="usuario" className="fadeIn second" name="usuario" placeholder="Usuario"/>
                            </form>
                            <form className="mt-3">
                                <label className="badge badge-pill badge-secondary"> CONTRASEÑA </label>
                                <br/>
                                <input type="password" id="contraseña" className="fadeIn third" name="contraseña" placeholder="Contraseña"/>
                            </form>
                            <br/>
                            <a className="btn btn-success" href="/Lista"> Acceder </a>            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Login;