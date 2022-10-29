import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <div className="container">
      <Application />
  </div>
  , document.getElementById('root')
);


export default function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App project={'applications'} />} />
        <Route path='/applications' element={<App project={'applications'} />} />
        <Route path='/nuget' element={<App project={'nuget_builds'} />} />
        <Route path='/build-definitions' element={<App project={'applications'} />} />
      </Routes>
    </BrowserRouter>
  );
}