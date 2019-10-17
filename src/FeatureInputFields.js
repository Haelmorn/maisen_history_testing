import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    //marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 200,
  }
});

function FeatureInputFields(props) {
    const { classes } = props;
    return (
      <div>
          <h3>Input Fields</h3>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TextField
              id="standard-name"
              label="Field1"
              className={classes.textField}
              value={props.fieldValues.field1}
              onChange={(event) => props.handleChange('field1', event.target.value)}
              onBlur={(props.fieldValues.fieldHistory[props.fieldValues.fieldHistory.length-1][0] != props.fieldValues.field1 ? props.handleSubmit : null)}
              margin="normal"
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
              id="standard-name"
              label="Field2"
              className={classes.textField}
              value={props.fieldValues.field2}
              onChange={(event) => props.handleChange('field2', event.target.value)}
              onBlur={(props.fieldValues.fieldHistory[props.fieldValues.fieldHistory.length-1][1] != props.fieldValues.field2 ? props.handleSubmit : null)}
              margin="normal"
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
              id="standard-name"
              label="Field3"
              className={classes.textField}
              value={props.fieldValues.field3}
              onChange={(event) => props.handleChange('field3', event.target.value)}
              onBlur={(props.fieldValues.fieldHistory[props.fieldValues.fieldHistory.length-1][2] != props.fieldValues.field3 ? props.handleSubmit : null)}
              margin="normal"
            />
            </Grid>
          </Grid>
      </div>
    )
};

export default withStyles(styles)(FeatureInputFields);