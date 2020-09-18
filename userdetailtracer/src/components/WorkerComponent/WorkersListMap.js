import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";
import { myContext } from "../../context";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
  },
  buttonMargin: {
    marginTop: 15,
    marginRight: 15,
  },
});
const WorkersListMap = ({ worker }) => {
  // console.log(worker)
  const { deleteWorker, OpenModal, isSuperUser ,user} = useContext(myContext);
  const classes = useStyles();

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {worker.f_name} {worker.l_name}
          </Typography>
          <Typography gutterBottom variant="h6" >
            {worker.code} 
          </Typography>

          <Typography className={classes.pos} variant="body1" component="p">
            Category: {worker.category}
          </Typography>
          <Typography className={classes.pos} variant="body1" component="p">
            Naike: {worker.naike_name}
          </Typography>
          <Typography className={classes.pos} variant="body1" component="p">
            Gender: {worker.gender}
          </Typography>
          <Typography className={classes.pos} variant="body1" component="p">
            Age: {worker.age}
          </Typography>

          <Typography className={classes.pos} variant="body1" component="p">
            District: {worker.district}
          </Typography>
          <Typography className={classes.pos} variant="body1" component="p">
            Municipality: {worker.municipality}
          </Typography>
          <Typography className={classes.pos} variant="body1" component="p">
            Ward: {worker.ward}
          </Typography>
          <Typography className={classes.pos} variant="body1" component="p">
            Phone: {worker.phone}
          </Typography>
          <Typography className={classes.pos} variant="body1" component="p">
            Kiln: {worker.kiln.name}
          </Typography>
          <Typography className={classes.pos} variant="body1" component="p">
            <span>Children :</span>
            {/* {worker.children} */}
            {worker.children ? (
              worker.children.map((e,i)=><span key={i} style={{ marginLeft:'10px', borderBottom: '1px solid' }} >{e.join('/')}</span>)
            ) : null}
          </Typography>

          <Typography className={classes.pos} variant="body1" component="div">
            <span>Paid By: </span>

            {worker.extra && worker.extra.payment? (
              <div style={{display:"inline"}}>
                <strong>{worker.extra.payment.amountpayer.username}</strong> from 
               <strong> {worker.extra.payment.amountpayer.ngo.name}</strong>
              </div>
            ) : 'None'}
          </Typography>

          <Typography className={classes.pos} variant="body1" component="div">
            <span>Paid Amount:  </span>

            {worker.extra && worker.extra.payment ? (
              <Typography variant="subtitle2" display="inline">Rs.{worker.extra.payment.amount}</Typography>
            ) : 'Not Paid'}
          </Typography>



          <span>
            {isSuperUser() ? (
              <span>
                <Link to={`/workers/${worker.id}/`}>
                  <Button
                    className={classes.buttonMargin}
                    variant="contained"
                    color="primary"
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    deleteWorker(worker.id);
                    scrollToElement("Home");
                  }}
                  className={classes.buttonMargin}
                  variant="contained"
                  color="secondary"
                >
                  Delete
                </Button>
              </span>
            ) : null}{" "}
          </span>
{
  user.ngo ?
          <span>
            <Button
              onClick={() => OpenModal(worker.id)}
              variant="contained"
              color="secondary"
              className={classes.buttonMargin}
            >
              Payment
            </Button>
          </span>
            : ''
} 
        </CardContent>
      </Card>
    </Grid>
  );
};

export default WorkersListMap;
