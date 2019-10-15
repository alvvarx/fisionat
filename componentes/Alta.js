import React, { Component } from 'react';
import './Alta.css';

class Alta extends Component {

    render() {
        return(
            <div className="Alta">
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

            <br/>
            
            <div className="container">
                <div className="row"> 

                    <div className="col-8 datosPersonales"> 
                        <h3 className="text-light"> 1) Datos personales  </h3>
                        <br/>
                        <div className="form-group">
                            <label className="text-light mr-3"> ID del paciente </label>
                            <input type="text" placeholder="ID de paciente"/>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sexo
                            </button>
                            <div class="dropdown-menu mr-3" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#"> Hombre </a>
                                <a class="dropdown-item" href="#"> Mujer </a>
                                <a class="dropdown-item" href="#"> Prefiero no decirlo </a>
                            </div>                            
                        </div>
                        <br/>
                        <div className="form-group">
                            <label className="text-light mr-3"> Nombre </label>
                            <input size="25.7" type="text" placeholder="Introduzca nombre"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light mr-3"> Apellido 1 </label>
                            <input size="24" type="text" placeholder="Primer apellido"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light mr-3"> Apellido 2 </label>
                            <input size="24" type="text" placeholder="Segundo apellido" />
                        </div>
                        <div className="form-group">
                            <label className="text-light mr-3"> Teléfono fijo </label>
                            <input size="22" type="text" placeholder="Fijo" />
                        </div>
                        <div className="form-group">
                            <label className="text-light mr-3"> Teléfono móvil </label>
                            <input size="20" type="text" placeholder="Móvil" />
                        </div>
                        <div className="form-group">
                            <label className="text-light mr-3"> Fecha de nacimiento </label>
                            <input size="15" type="text" id="datetime" placeholder="dd/mm/yyyy"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light mr-3"> Teléfono móvil </label>
                            <input size="20" type="text" placeholder="Móvil" />
                        </div>
                        <div className="form-group">
                            <label className="text-light mr-3"> Correo electrónico </label>
                            <input size="17" type="text" placeholder="example@correo.com" />
                        </div>
                    </div>
                    
                    <div className="col-4 w-25 direccion"> 
                        <h3 className="text-light"> 2) Dirección  </h3>
                        <br/>
                        <div className="form-group">
                            <label className="text-light mr-3"> Calle </label>
                            <input type="text" placeholder="Calle"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light mr-3"> Portal </label>
                            <input size="19" type="text" placeholder="Portal"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light mr-3"> Escalera </label>
                            <input size="17" type="text" placeholder="Escalera"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light mr-3"> Piso </label>
                            <input type="text" placeholder="Piso"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light mr-3"> Letra </label>
                            <input type="text" placeholder="Letra"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light mr-3"> Poblacion </label>
                            <input size="16" type="text" placeholder="Poblacion"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light mr-3"> Provincia </label>
                            <input size="16" type="text" placeholder="Provincia"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light mr-3"> Codigo postal </label>
                            <input size="13" type="text" placeholder="Codigo postal"/>
                        </div>
                    </div>          
                </div>

                <br/>
                <br/> 
                <br/>

                <div className="row">
                    <div className="col col-12" align="center"> 
                        <button className="btn btn-success btn-large"> Dar de alta </button>
                    </div>
                </div>
                
            </div>
        </div>            
        )
    }
}

export default Alta;