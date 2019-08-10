import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">

      <div className="App-header">
        <div className="container">
          <div className="row App-center">
            <div className="col-lg-6 mb-4">
              <h1>Hello World</h1>
              <p className="txt-content">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </p>
              <input className="btn btn-primary btn-lg" value="Getting Started" type="button"/>
            </div>
            <div className="col-lg-5 ml-auto">
              <div className="form-box mb-4">
                <label className="label-sign">Sign Up</label>
                <input className="form-control form-group" placeholder="Email Address" type="text"/>
                <input className="form-control form-group" placeholder="Password" type="text"/>
                <input className="form-control form-group" placeholder="Re-type Password" type="text"/>
                <input className="btn btn-primary" value="Submit" type="button"/>
              </div>            
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="features-box">
          <div className="card-deck">
            <div className="card">
              <div className="example-image">Image</div>
              <div className="card-body">
                <div className="card-title">Card Title</div>
                <p className="card-text txt-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            <div className="card">
            <div className="example-image">Image</div>
              <div className="card-body">
                <div className="card-title">Card Title</div>
                <p className="card-text txt-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            <div className="card">
            <div className="example-image">Image</div>
              <div className="card-body">
                <div className="card-title">Card Title</div>
                <p className="card-text txt-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="App-body">

      </div>
      <div className="App-footer"></div>
    </div>
  );
}

export default App;
