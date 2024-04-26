import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Library from '../component/Library'
import Home from "../component/Home"
import Entry from "../component/Entry"
import Details from '../component/Details';

const RouteComponent = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<Entry />} />
    <Route path="/show" element={<Library />}>
      <Route path="/show/:id" element={<Details />}/>
    </Route >       
    <Route path="*" element={<h1>Wrong url</h1>} />
  </Routes>
  )
}

export default RouteComponent