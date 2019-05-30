import React from 'react';
//import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './analyticsdashboard.css';
//import RecruitmentsRepo from './recruitmentsRepo/RecruitmentsRepo';

// const onGenerateRecruitments = (e) => {
//     console.log("generating reports");
//     this.props.history.push("/recruitmentsRepo");
// }

// const onGenerateBestUsers = (e) => {
//     console.log("generating best users reports");
//     this.props.history.push("/bestUsersRepo");
// }

// const onGenerateCandidates = (e) => {
//     console.log("generating reports");
//     this.props.history.push("/CandidatesRepo");
// }

// const onGenerateUsers = (e) => {
//     console.log("generating reports");
//     this.props.history.push("/UsersRepo");
// }

// const onGenerateReasons = (e) => {
//     console.log("generating reports");
//     this.props.history.push("/RejectionReasonsRepo");
// }

// const onGenerateOutSource = (e) => {
//     console.log("generating reports");
//     this.props.history.push("/OutSourceRepo");
// }

class analyticsdashboard extends React.Component {
  render(){
  return (
    
    <div className="container">
    <h1 align="center">Reports</h1>


    

    <div className="analyticsdash">
      
      <h3 className="bold">Recruitments</h3>
      <p className="para">Recruitment statistic report</p>
      <hr/>
      <button onClick={this.onGenerateRecruitments}>Generate</button>
       
     
      
    </div>

    <div className="analyticsdash">
     
     <h3 className="bold">Candidates</h3>
     <p className="para">Candidate statistic report</p>
     <hr/>
     {/* <button onClick={this.onGenerateCandidates}>Generate</button> */}
    </div>

    <div className="analyticsdash">
     
     <h3 className="bold">Best Users</h3>
     <p className="para">User statistic report</p>
     <hr/>
     {/* <button onClick={this.onGenerateBestUsers}>Generate</button> */}
    </div>

    <div className="analyticsdash">
     
     <h3 className="bold">Users</h3>
     <p className="para">User activity report</p>
     <hr/>
     {/* <button onClick={this.onGenerateUsers}>Generate</button> */}
    </div>

    <div className="analyticsdash">
     
     <h3 className="bold">Rejection Reasons</h3>
     <p className="para">Summary of rejection reasons</p>
     <hr/>
     {/* <button onClick={this.onGenerateReasons}>Generate</button> */}
    </div>

    <div className="analyticsdash">
     
     <h3 className="bold">Outsource Projects</h3>
     <p className="para">User statistic report</p>
     <hr/>
     {/* <button onClick={this.onGenerateOutSource}>Generate</button> */}
    </div>
    
    </div>
  );
}
}

export default analyticsdashboard
