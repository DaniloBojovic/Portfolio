import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 2 };
  }
  render() {
    let color = 'white';
    let size = '20px';
    let content = {
        0: '7/10',
        1: '6/10',
        2: '5/10',
        3: '2/10',
        4: '6/10',
    }
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img src="./img/rsz-portfolio.jpg" alt="me" className="my-img" />
            <div className="job-description">
              <h2>Software Developer</h2>
              <div className="demo-tabs">
                <Tabs
                  activeTab={this.state.activeTab}
                  onChange={(e) => this.setState({ activeTab: e })}
                  ripple
                >
                  <Tab style={{ color, "fontSize":size, "width":"100%" }}>C#</Tab>
                  <Tab style={{ color, "fontSize":size, "width":"100%" }}>HTML/CSS</Tab>
                  <Tab style={{ color, "fontSize":size, "width":"100%"  }}>JAVASCRIPT</Tab>
                  <Tab style={{ color, "fontSize":size, "width":"100%" }}>REACT</Tab>
                  <Tab style={{ color, "fontSize":size, "width":"100%"  }}>MSSQL</Tab>
                </Tabs>
                <section>
                  <div className="content">{content[this.state.activeTab]}</div>
                </section>
              </div>
            </div>
          </Cell>
          <Cell col={12}>
            <div className="links">
              <a href="https://www.google.rs/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" />
              </a>
              <a href="https://www.google.rs/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-square" />
              </a>
              <a href="https://www.google.rs/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-codepen" />
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
