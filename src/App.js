import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const BasicExample = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">首頁</Link>  
        </li>
        <li>
          <Link to="/about">關於</Link>
        </li>
        {/* <li>
          <Link to="/topics">主題</Link>
        </li> */}
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* <Route path="/topics" component={Topics} /> */}
    </nav>
  </Router>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2> 
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>測試1</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>測試2</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route path={`${match.url}/rendering`} component={Home} />
    <Route path={`${match.url}/components`} component={Home} />
    <Route exact  path={match.url}  render={() => <h3>請輸入路徑</h3>}
    />
  </div>
);


const Topic = ({ match }) => (
  <div>
    <h3>{match.url}</h3>
  </div>
);

const Home = ({match}) => (
  <div>
    <section>
      <h2>
        section
      </h2>
    </section>
    <section>
      <h2>
        section
      </h2>
    </section>
    <section>
      <h2>
        section
      </h2>
    </section>
    {console.table(match)}
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);



export default BasicExample;

