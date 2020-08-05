import React, { useContext } from "react";
import WorkersListMap from "./WorkersListMap";
import {
  Grid,
 
  Typography,
  makeStyles,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Title from './Title'
import WorkerFilter from './FilterComponent/WorkerFilter'
import {Link, Redirect} from 'react-router-dom'
import '../App.css';
import { myContext } from "../context";


const isAuthenticated = () => {
  const token = localStorage.getItem("item");
  return token && token.length > 10;
};



const useStyles = makeStyles((theme) => ({
  pos: {
    marginTop: 30,
    width: "90%",
    margin: "auto",
   
  },
  addIcon: {
      width: "90%",
      marginTop: 30,
      margin: "auto",
      display: "flex",
      alignItems: "center",
      color: "primary",
  },
  
  AddIconLink:{
    display: "flex",
    alignItems: "center",
    textDecoration:'none'
  }
}));

const WorkersList = () => {
  const classes = useStyles();
  const isAlreadyAuthenticated = isAuthenticated();

  const { sortedWorkersInfo } = useContext(myContext);
  

  let sortedworkersInfoComp = sortedWorkersInfo.map((worker) => {
    return <WorkersListMap worker={worker} key={worker.id}/>;
  });

  return (
    <div>
{ isAlreadyAuthenticated ?
    
    <div>
      <span className={classes.addIcon}>
        <Link to='/' className={classes.AddIconLink}>
          <AddCircleIcon color="primary" fontSize="large" />
        <Typography className="addnewWorker" color="primary" component="h1" variant="h6">
          Add new worker
        </Typography>
        </Link>
      </span>

    <Title title='Workers List'/>
    <WorkerFilter/>
      <div className={classes.pos}>
        <Grid container spacing={2}>
          {sortedworkersInfoComp}
        </Grid>
      </div>
    </div> : <Redirect to={{ pathname:'/login' }}/> 
}
    </div>
  );
};

export default WorkersList;
