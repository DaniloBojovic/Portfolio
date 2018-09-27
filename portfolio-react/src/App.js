import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader>
          <Header title={<span><span style={{ color: '#ddd' }}>Resume / </span><strong>Danilo Bojović</strong></span>}>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Danilo">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/">Resume</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Contact</Link>
            </Navigation>
          </Drawer>
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
    );
  }
}

export default App;
