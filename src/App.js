import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import FeatureInputFields from './FeatureInputFields';
import FeatureHistory from './FeatureHistory';


const styles = theme => ({
  root: {
    margin: '10px',
    height: 400,
    width: 300,
    padding: '0 30px',
    overflowY: 'scroll',
  },
});

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      field1: '',
      field2: '',
      field3: '',
      fieldHistory: [["", "", "", ""]]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.restoreState = this.restoreState.bind(this);
  }

  updateField(fieldName, newValue) {
    console.log('Updating field data in store');
    this.setState({
        [fieldName]: newValue
    });
  }

  handleSubmit() {
    console.log(this.state)
    this.setState({
      fieldHistory: [...this.state.fieldHistory, [this.state.field1, this.state.field2, this.state.field3, Date()]]
    });
  }

  restoreState(index) {
    this.setState({
      field1: this.state.fieldHistory[index][0],
      field2: this.state.fieldHistory[index][1],
      field3: this.state.fieldHistory[index][2]
    })
  }

  render () {
    const { classes } = this.props;
    return (
        <Grid container spacing={0}>
          <Grid item>
            <Paper className={classes.root}>
              <FeatureInputFields fieldValues={ this.state } handleChange={ (fieldName, fieldValue) => this.updateField(fieldName, fieldValue) } handleSubmit={this.handleSubmit}/>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.root}>
              <FeatureHistory fieldHistory={ this.state.fieldHistory } restoreState={ this.restoreState }/>
            </Paper>
          </Grid>          
        </Grid>
    );
  }
}
export default withStyles(styles)(App);