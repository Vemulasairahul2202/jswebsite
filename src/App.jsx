import React from 'react';
import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Services from './Services';
import Trainings from './Trainings';
import Footer from './Footer';
import Topcont from './Topcont';
import Contact from './Contact';
import Training from './Trainingfeedback';
import Jobsupport from './Jobsupport';
import Etlsupport from './Jobsupportsubcomp/Etlsupport';


import { Routes, Route } from 'react-router-dom';
import BookDemoForm from './BookDemo';
import Seleniumsupport from './Jobsupportsubcomp/Seleniumsupport';
import Qasupport from './Jobsupportsubcomp/Qasupport';
import Manualsupport from './Jobsupportsubcomp/Manualsupport';
import Angularsupport from './Jobsupportsubcomp/Angularsupport';
import AngularJSsupport from './Jobsupportsubcomp/Angularjssupport';
import Reactsupport from './Jobsupportsubcomp/Reactsupport';
import Fjava from './Jobsupportsubcomp/Fjava';
import Dotnet from './Jobsupportsubcomp/Dotnet';
import Python from './Jobsupportsubcomp/Python';
import Uqorksupport from './Jobsupportsubcomp/Uqorksupport';
import Powerbisupport from './Jobsupportsubcomp/Powerbisupport';
import Tableau from './Jobsupportsubcomp/Tableau';
import Workday from './Jobsupportsubcomp/Workday';
import Pega from './Jobsupportsubcomp/Pega';
import Rpauipath from './Jobsupportsubcomp/Rpauipath';
import Rpaauto from './Jobsupportsubcomp/Rpaauto';
import Rpablue from './Jobsupportsubcomp/Rpablue';
import Tibco from './Jobsupportsubcomp/Tibco';
import RpaBlue from './Jobsupportsubcomp/Rpablue';
import Restapi from './Jobsupportsubcomp/Restapi';

function App() {
  return (
    <>
      <Topcont />
      <Nav />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Trainings />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookdemo" element={< BookDemoForm />} />
        <Route path="/training" element={< Training />} />
        <Route path='/jobsupport' element={<Jobsupport/>}/>
        <Route path='/etl_support' element={<Etlsupport/>}/>
        <Route path='/selenium_support' element={<Seleniumsupport/>} />
        <Route path='/qa_support' element={<Qasupport/>}/>
        <Route path="/manual_support" element={<Manualsupport/>} />
        <Route path='/angular_support' element={<Angularsupport/>} />
        <Route path='/angularjs_support' element={<AngularJSsupport/>} />
        <Route path="/react_support" element={<Reactsupport/>} />
        <Route path='/java_support' element={<Fjava/>} />
        <Route path='/dotnet_support' element={<Dotnet/>} />
        <Route path='/python_support' element={<Python/>} />
        <Route path='/Uncork_support' element={<Uqorksupport/>}  />
        <Route path='/PowerBi_support' element={<Powerbisupport/>} />
        <Route path='/Tableau_support' element={<Tableau/>} />
        <Route path='/WorkDay_support' element={<Workday/>} />
        <Route path='/Pega_support' element={<Pega/>} />
        <Route path="/RPAui_support" element={<Rpauipath/>}  />
        <Route path='/RPAauto_support' element={<Rpaauto/>}   />
        <Route path='/RPAblue_support' element={<RpaBlue/>}/>
        <Route path='/Tibco_support' element={<Tibco/>} />
        <Route path='/RestAPI_support' element={<Restapi/>}  />
      </Routes>

      <Footer />

    </>
  );
}

export default App;
