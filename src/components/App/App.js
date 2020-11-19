import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import logo from '../../logo.svg'
import './App.css'
import Restaurants from '../Restaurants/Restaurants'
import Layout from '../Layout/Layout'

function App() {
  return (
    <Layout>
      <img src={logo} className='App-logo' alt='logo' />
      <Restaurants />
    </Layout>
  )
}

export default App
