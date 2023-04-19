import React from 'react';
import './App.css';
import { Header } from '../Header/index';
import { Nav } from '../Nav';
import { ContainerHeader } from '../Header/Container';
import { Pharse } from '../Phrase';
import { Services } from '../Services';
import { Contact } from '../Contact/index';
import { Footer } from '../Footer';
import { Proyectos } from '../Projects';
import { SobreMi } from '../AboutMe';

function App() {
  return (
    <React.Fragment>

      <Nav/>
      <Header>
        <ContainerHeader/>
      </Header>
    
      <Pharse/>
      <Services/>
      <Proyectos/>
      <SobreMi/>
      <Contact/>

      <Footer/>

    </React.Fragment>
  )
}

export default App;