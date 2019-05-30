import React from 'react';
import Plot from 'react-plotly.js';
import './RecruitmentsRepo.css'

class RecruitmentsRepo extends React.Component {
  render() {
    return (
      <Plot className="pl"
        data={[
          {
            values: [19, 26, 50,5],
  labels: ['Residential', 'Non-Residential', 'Utility','er'],
  type: 'pie',
  domain:{
    row:0,
    column:0
  }
},{
  values: [20, 25, 50,5],
  labels: ['Resi', 'Non-Resi', 'Uti','e'],
  type: 'pie',
  domain:{
    row:0,
    column:1
}
            
        }]}
        layout={
          {height: 900,
          width: 1500,
          grid:{rows:2,columns:2}
        }}
      />
      
    );
  }
}
export default  RecruitmentsRepo