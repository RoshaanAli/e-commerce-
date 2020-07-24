import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 120,
        paddingTop: '56.25%', // 16:9
    },
}));

const HomeProducts = () => {
    const classes = useStyles();

    return (
        // <>
        //   <Product />  
        // </>
        <React.Fragment>
            {/* <CssBaseline /> */}
            <Container maxWidth="lg">
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Product />
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default HomeProducts;