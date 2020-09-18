import React, { useContext, useEffect } from "react";
import SummaryCard from './SummaryCard'
import { Button, Grid, Card, Typography, Box } from "@material-ui/core";
import styled from "styled-components";
import { myContext } from "../../context";

const SummaryKilnTotals = () => {
  const {TotalSummaryByKiln,TotalSummaryAmountPaid} = useContext(myContext);


  const max_amount = Math.max(
    ...Object.values(TotalSummaryByKiln).map((e) => e.totalamount)
  );

  const abcd = Object.keys(TotalSummaryByKiln).map(function (key) {
    return (
            <SummaryCard key={key} keys={key} totalSummary={TotalSummaryByKiln} max_amount={max_amount} OuterAmountBar={OuterAmountBar} CardTextFirst='People count in kiln' CardTextSecond='Total paid amount by kiln'/>  
    );
  });
  
  return (
    <div>
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h6" component="h1" >
          <Box component="div" mb={2} mt={4} className='Totalpaidamount'>
            {" "}
            Total Amount Paid : Rs. {TotalSummaryAmountPaid}
          </Box>
        </Typography>
      </Grid>

      <Grid container spacing={2}>
      
          {abcd}
      
      </Grid>
     
    </div>
  );
};

const OuterAmountBar = styled.div`
  width: ${(props) => (props.width ? props.width : '')};

  border-radius: 5px;
  margin: 10px 0;
  background-color: aliceblue;

  div {
    background-color: orange;
   height:15px;
    transition: 0.5s ease all;
    text-align: center;
    color: white;
    border-radius: 5px;
    padding: 3px 0;
  }
`;

export default SummaryKilnTotals;
