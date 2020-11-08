import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
      <section id="home" className="offset">


            <div id="my-carousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="2500">
                <ol className="carousel-indicators">
                    <li data-target="#my-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#my-carousel" data-slide-to="1"></li>
                    <li data-target="#my-carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="slide" src="assets/illustrations/landingslide1.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="slide" src="assets/illustrations/landingslide2.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="slide" src="assets/illustrations/landingslide3.png" alt="Third slide" />
                    </div>
                </div>

            </div>

            <div className="motto">
              <div className="motto-content rounded shadow-lg">
                <h1 className="title"> Your Home, <br /> How you want it </h1>
                <p className="land"> We understand the value of
      quality end products that will last generations and will be loved by all members of the community alike</p>
                <br />
              </div>
            </div>
          </section>
      </div>
    );
  }
}
export default App;
