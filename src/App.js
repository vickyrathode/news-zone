import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

class App extends Component {
  pageSize = 5
  apiKey=process.env.REACT_APP_NEWZ_API;
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      
    };
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };



  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <LoadingBar color='#f11946' progress={this.state.progress} height={2} />
          <Routes basename="/news-zone">
            <Route path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} key='business' category='business' />} />
            <Route path='/entertainment' element={<News setProgress={this.setProgress}apiKey={this.apiKey} pageSize={this.pageSize} key='entertainment' category='entertainment' />} />
            <Route path='/general' element={<News setProgress={this.setProgress}apiKey={this.apiKey} pageSize={this.pageSize} key='general' category='general' />} />
            <Route path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey}pageSize={this.pageSize} key='health' category='health' />} />
            <Route path='/science' element={<News setProgress={this.setProgress}apiKey={this.apiKey} pageSize={this.pageSize} key='science' category='science' />} />
            <Route path='/sports' element={<News setProgress={this.setProgress}apiKey={this.apiKey} pageSize={this.pageSize} key='sports' category='sports' />} />
            <Route path='/technology' element={<News setProgress={this.setProgress}apiKey={this.apiKey} pageSize={this.pageSize} key='technology' category='technology' />} />
            <Route path='/news-zone' element={<News setProgress={this.setProgress}apiKey={this.apiKey} pageSize={this.pageSize} key='general' category='general' />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
