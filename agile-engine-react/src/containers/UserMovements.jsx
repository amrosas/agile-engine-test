import React from 'react';
import {getMovements} from '../api/server';
import Accordion from '../components/Accordion';

class UserMovements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      expanded: ''
    }
  }
  componentWillMount() {
    getMovements().then((res) => {
      this.setState({
        transactions: this.state.transactions.concat(res)
      })
    })
  }

  handleChange = (panel) => {
    const toggle = this.state.expanded !== panel ? panel : false;
    this.setState({
      expanded: toggle
    });
  };

  render() {
    const transactionsList = this.state.transactions.length > 0 && this.state.transactions.map(transaction => {
      return (<Accordion
        transaction= {transaction}
        isExpanded = {this.state.expanded}
        handleChange = {this.handleChange}
      />
        )
    });

    return (
      <div>
        {transactionsList}
      </div>
    )
  }
}

export default UserMovements;