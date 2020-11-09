import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },

  debitBackground: {
    color: theme.palette.paymentMethods.debit,
    width: "200px",
    fontWeight: 500
  },

  creditBackground: {
    color: theme.palette.paymentMethods.credit,
    width: "200px",
    fontWeight: 500
  },

  container: {
    display: "flex",
    "flex-flow": "no wrap",
    "justify-content": "space-between"
  }

}));

export default function ControlledAccordions(props) {
  const {transaction, isExpanded, handleChange} = props;
  const {id, amount, type, effectiveDate} = transaction;
  const classes = useStyles();
  return id && (
    <div className={classes.root}>
      <Accordion expanded={isExpanded === id} onChange={() => handleChange(id)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className={classes.container}>
            <Typography className={type === 'debit' ? classes.debitBackground : classes.creditBackground}>{type}</Typography>
            <Typography className={classes.secondaryHeading}>{amount} USD</Typography>
          </div>

        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Typography>
              Transaction ID: 
              <div className={classes.secondaryHeading}>
                {id}
              </div>
            </Typography>
            <br/>
            <Typography>
              Date:
              <div className={classes.secondaryHeading}>
               {effectiveDate}
              </div>
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
