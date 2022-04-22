import React from 'react'
import Input from '../common/Input'

const Singup = () => {
  return (
    <div>
        <div className='container-registro'>
            <p className='textoLogo'>Hotel <span className='textoLogoDer'>Posada Real</span></p>
            <h3>Registrar</h3>
            <form className='form-login'>
                <Input nombre={"Nombre(s)"} tipo={"Text"}/>
                <Input nombre={"Apellido(s)"} tipo={"Text"}/>
                <Input nombre={"Domicilio"} tipo={"Text"}/>
                <Input nombre={"Pais"} tipo={"Text"}/>
                <Input nombre={"Estado"} tipo={"Text"}/>
                <Input nombre={"Ciudad"} tipo={"Text"}/>
                <Input nombre={"Correo"} tipo={"Email"}/>
                <Input nombre={"Contraseña"} tipo={"password"}/>
                <Input nombre={"Numero celular"} tipo={"text"}/>
                <input className='inputButton' type="submit" placeholder='Iniciar sesion' />
            </form>
        </div>
    </div>
  )
}

export default Singup