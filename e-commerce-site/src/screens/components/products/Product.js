import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';

// import data from "../../../data";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';

import ProductDetailModal from "./ProductDetailModal";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 120,
        paddingTop: '56.25%', // 16:9
    },
    reviewsDiv: {
        width: '40%',
        margin: 'auto',
    },
}));



const Product = () => {
    const classes = useStyles();
    // console.log(data);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("/api/products");
            // console.log('API')
            // console.log(data)
            setProducts(data); 
        }
        fetchData()
       
    }, [])
console.log('products----',products)
    return (

        products.map((product) =>
            <Grid item xs={6} sm={3} key={product.id}>
                <Paper elevation={1} className={classes.paper}>
                    <CardMedia
                        className={classes.media}
                        image={product.image}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h6">
                            {`${product.name.substring(0, 6)}..`}
                        </Typography>
                        <Typography gutterBottom variant="caption" component="p">
                            {product.brand}
                        </Typography>
                        <Chip label={'Price : ' + product.price} />
                        <br />
                        <br />
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.description}
                        </Typography>
                    </CardContent>
                    <div>
                        <Chip
                            color="primary"
                            variant="outlined"
                            label={`${product.rating} reviews`}
                            avatar={<Avatar><GradeOutlinedIcon /></Avatar>}
                        />
                    </div>
                    <br />
                    <ProductDetailModal data={product} />
                </Paper>
            </Grid>

        )
    )
}

export default Product
