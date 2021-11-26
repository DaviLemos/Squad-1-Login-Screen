import React, {useEffect, useState} from 'react';
import {Route, IndexRoute} from 'react-router'
import {useJwt} from 'react-jwt';
import TimeLogout from '../Components/Time Logout/TimeLogout';
import Seconds from '../Components/Seconds/Seconds';
import Login from '../Screens/Login';
import App from '../App';


const ContadorLogout = () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhdmlAZnVyZy5jb20iLCJpYXQiOjE2Mzc4NzIyMTYsImV4cCI6MTYzNzg3MjgxNn0.cYV8OyRz2KPMuzaLf08LqJjWdKRAw7oIeIGOWwpsHyQ';
    //token recebe o token atualizado salvo no localstorage

    const {decodedToken, isExpired} = useJwt(token);
    const [contador, setContador] = useState()

    useEffect(() => {
        const intervalo = setInterval(() => {
            if (decodedToken){
                if(isExpired){
                    <Route component={App} path='/'>
                        <Route component={Login} path='Login' />    
                    </Route>
                }else{
                    const dataExp = new Date (decodedToken.exp*1000);
                    const dataAtual = new Date (); 
                    const a = [dataExp.getHours(), dataExp.getMinutes(), dataExp.getSeconds()];
                    const b = [dataAtual.getHours(), dataAtual.getMinutes(), dataAtual.getSeconds()];
                    var secondsA = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
                    var secondsB = (+b[0]) * 60 * 60 + (+b[1]) * 60 + (+b[2]);
                    setContador(secondsA - secondsB);
                }
            }
        }, 1000)
        return () => clearInterval(intervalo);  
    }, [decodedToken, isExpired])  
    return (
        <>
            <TimeLogout>
                {contador}
            </TimeLogout>
            <Seconds>Seconds</Seconds>
        </>
    );

};

export default ContadorLogout;