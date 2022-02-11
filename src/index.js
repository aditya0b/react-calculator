import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Content } from './Components/Design';
var render = ReactDOM.render;
var _renderroot = document.querySelector('#root')


render(
    <>
        <Content />
        
    </>,
    _renderroot

)