import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'




const Login = () => {
    const navigation = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    useEffect(() => {
        //Verificar el token
        const token = localStorage.getItem('token-hotel');
        if(token){
            navigation("/");
        }
    },[])

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
        const response = await axios.post("http://localhost:4000/customer/login",{email,password})
        setError('');
        navigation("/");
        localStorage.setItem('token-hotel',response.data.token);
    }catch(err){
        if(err.message == 'Network Error'){
            setError("Error in the conection");
        }
        setError(err.response.data.msg);
    }
  }

  return (
    <div className='divBackground'>
        <div className='container-login'>
            <p className='textoLogo'>Hotel <span className='textoLogoDer'>Posada Real</span></p>
            <h3>Iniciar Sesion</h3>
            <form className='form-login' onSubmit={handleLogin}>
                <div className='divLogin'>
                <label>Correo</label>
                <input className='inputLogin' type="text" placeholder="Correo" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='divLogin'>
                <label>Contraseña</label>
                <input className='inputLogin' type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <input className='inputButton' type="submit" placeholder='Iniciar sesion' />
            </form>
            <a href='/signup' className='textReg'>
                <label>Aun no tienes una cuenta? Registrar</label>
            </a>
            {error !== ''
                ?<label>{error}</label>
                :null
            }
        </div>
    </div>
  )
}

export default Login