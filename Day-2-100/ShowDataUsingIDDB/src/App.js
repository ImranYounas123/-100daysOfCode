import React from 'react'
import './app.css'
import "bootstrap/dist/css/bootstrap.min.css"
import MainUseState from './Practise/UseState/MainUseState'
import MainUseEffect from './Practise/UseEffect-Excercise/MainUseEffect'
import MainLocalSession from './Practise/LocalVsSession/MainLocalSession'
import ArrayMain from './Practise/ArrayMethods/ArrayMain'
import Card from './Projects/Project#1/Card'
import Calculator from './Projects/Calculater/Calculator'
import MainUseRef from './Practise/UseRef/MainUseRef'
import Main from './Projects/ShowDataUsingIDDB/Main'
import Timer from './Projects/Timer/Timer'
const App = () => {
    return (
        <div className='App'>
        <Timer />

        {/* <Card /> */}
        {/* <MainUseRef /> */}
        {/* <Main /> */}
        {/* <Calculator/> */}
        {/* <h1>Hello</h1> */}
        {/* <MainUseEffect /> */}
  {/* <MainUseState /> */}
        {/* <MainLocalSession /> */}
        {/* <ArrayMain /> */}
        </div>
    )
}
export default App;