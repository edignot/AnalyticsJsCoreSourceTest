import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import Restaurants from '../Restaurants/Restaurants'
import Layout from '../Layout/Layout'
import Form from '../Form/Form'

function App() {
  return (
    <Layout>
      <Form />
      <Restaurants />
    </Layout>
  )
}

export default App
