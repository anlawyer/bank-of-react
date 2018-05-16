import React, { Component } from 'react';
import axios from 'axios';

class DebitsList extends Component {
  state = {
    debits: []
  }

  componentDidMount() {
    console.log('mounted');
    axios.get('/debits')
      .then((response) => {
        this.setState({debits: response.data})
      })
  }

  render() {
    return (
      <div>
        <h3>Current debits: </h3>
        {this.state.debits.map((debs, i) =>
          <div key={i}>
            <p>{debs.description}</p>
            <p>{debs.amount}</p>
            <p>{debs.date}</p>
          </div>
        )}
      </div>
    )
  }
}

export default DebitsList;
