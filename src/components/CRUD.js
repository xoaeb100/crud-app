import { Box, Typography, makeStyles } from "@material-ui/core";
import w1 from "../Assets/images/w1.jpg";
import w2 from "../Assets/images/w2.jpg";

const useStyles = makeStyles({
  component: {
    margin: 50,
    "& > *": {
      marginTop: 50,
    },
  },
  image: {
    width: "50%",
    height: "50%",
  },
});

const CRUD = () => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Typography variant="h4">CRUD</Typography>
      <Box style={{ display: "flex" }}>
        <img src={w1} className={classes.image} />
        <img src={w2} className={classes.image} />
      </Box>
    </Box>
  );
};

export default CRUD;
