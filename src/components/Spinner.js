import React from 'react';
import Loader from 'react-loader-spinner';
import CountUp from 'react-countup';
import '../styles/spinner.css';

// This function return the loading spinner while a file is bein tranferred.
// Ideally this would be display the appropriate information from the backend.
// react-countup is used to simulate the upload progress
function Spinner() {
  return (
    <div className="spinner">
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={2000} //3 secs 
      />
      <CountUp
        className='spinner-count'
        end={100}
        duration={2} />
    </div>
  );
}

export default Spinner;
