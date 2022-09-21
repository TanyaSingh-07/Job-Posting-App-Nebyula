import { Button, ThemeProvider, makeStyles, Grid } from '@material-ui/core';
import { Height } from '@material-ui/icons';
import React from 'react'
import { useHistory } from "react-router-dom";
import theme from './theme/theme';



const useStyle = makeStyles((theme) => ({


  skillchip: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    fontSize: "5vh",
    borderRadius: "100px",
    cursor: "pointer",
    fontWeight: 1000,
    backgroundColor: "cyan",
    color: "black",
  },

}));



export default function LandingPage() {
  const classes = useStyle();
  const history = useHistory()

  const handleOnApplicants = () => {
    history.push("/Userlogin");

  }
  const handleOnTeraformer = () => {
    history.push("/login");
  }


  return (
    <ThemeProvider theme={theme} className="d-flex align-item-center justify-content-center" >
      
    <strong> <center>LAND YOUR DREAM JOB HERE--NBYULA JOBHUNT</center></strong>

    <p></p>
    <p></p>
    <p></p>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

<div className="container my-4" >
<img src="/download.jpg" alt="image" />
     
        <Grid item className='my-5' >
          <Button style={{ minWidth: "80vw", minHeight: "20vh" }} className={classes.skillchip} onClick={handleOnTeraformer} bgcolor="blue">
            <strong>Terraformer</strong>
          </Button>
        </Grid>



        <Grid item className='my-5' >
          <Button style={{ minWidth: "80vw", minHeight: "20vh" }} className={classes.skillchip} onClick={handleOnApplicants}>
            <strong>Applicant</strong>
          </Button>
        </Grid>

      </div>



    </ThemeProvider>
  )
}
