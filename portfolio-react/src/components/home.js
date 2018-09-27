import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Home extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid  className="home-grid">
                    <Cell col={12}>
                        <img src="./img/portfolio.JPG" alt="me"
                        className="my-img" width="50" />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Home;