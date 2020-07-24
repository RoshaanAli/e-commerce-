import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
// import IconButton from '@material-ui/core/IconButton';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SelectQuantity from "./selectQuantity";


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    background: {
        backgroundColor: 'rgba(0,0,0, 0.5)',
        height: 'auto',
        width: '55%',
        borderRadius: '20px',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 0 32px rgba(0,0,0,0.8)',
    },
    paper: {
        color: 'white',
        position: 'relative',
        padding: theme.spacing(2, 4, 3),
        overflow: 'auto'
    },
    imgDiv: {
        // width: 'auto',
        // height: '35%',
        backgroundColor: 'red',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function ProductDetailModal(props) {
    const classes = useStyles();
    let { data } = props;
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleOpen} size="small" color="primary" className={classes.margin}>
                Details
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.background}>
                        <div className={classes.paper}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Image
                                        src={`${data.image}`}
                                    // imageStyle={{ width: 'auto', height: 'auto' }}
                                    />
                                    <br />
                                    <Chip
                                        color="primary"
                                        // variant="contained"
                                        label={`${data.rating} reviews`}
                                        avatar={<Avatar><GradeOutlinedIcon /></Avatar>}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Grid item xs={12} sm={12}>
                                        <h1 id="transition-modal-title">{data.name}</h1>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <h3>Brand Name : {data.brand}</h3>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <p id="transition-modal-description">{data.description}</p>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <p>State : Instock</p>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <p>Quatntity:</p><SelectQuantity/>
                                    </Grid>
                                    {/* <Grid item xs={12} sm={12}>
                                        <Button
                                            variant="contained"
                                            onClick={() => alert(data.id)}
                                            size="small"
                                            color="primary"
                                        >
                                            Add to cart  <AddShoppingCartIcon style={{ marginLeft: '5px' }} />
                                        </Button>
                                    </Grid> */}
                                </Grid>
                            </Grid>

                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}