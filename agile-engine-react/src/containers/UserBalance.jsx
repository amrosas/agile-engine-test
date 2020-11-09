import React from 'react';
import {getBalance} from '../api/server';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({

  heading: {
    fontSize: '40px',
    fontWeight: '600'
  },
  currency: {
    fontSize: '16px'
  }
});

class UserBalance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0
    }
  }
  componentWillMount(){
    getBalance().then((res) => {
      this.setState({
        balance: res
      })
    });
  }

  render() {
    return (
    <Typography>

      Hi Bob! This is your current balance
      <br/> 
      <Typography className={this.props.classes.heading}>
        {this.state.balance}
        <label className={this.props.classes.currency}> USD</label>
        </Typography>

      </Typography>
    )
  }
}

export default withStyles(styles)(UserBalance);
