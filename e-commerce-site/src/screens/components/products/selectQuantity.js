import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color: 'white'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        color: 'white'
    },
    clr: {
        color: 'white'
    },
    root: {
        color: 'white',
        borderColor: 'white'
    }
}));

export default function SimpleSelect() {
    const classes = useStyles();
    const [quantity, setQuantity] = React.useState('');

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <div className={classes.clr}>
            <ThemeProvider theme={theme}>

                <FormControl
                    color="primary"
                    variant="outlined"
                    className={classes.formControl}
                >
                    <InputLabel className={classes.clr} id="quantity">Quantity</InputLabel>
                    <Select
                        labelId="quantity"
                        id="demo-simple-select-outlined"
                        value={quantity}
                        onChange={handleChange}
                        label="Quantity"
                        className={classes.clr}
                        autoWidth
                    >
                        
                        <MenuItem dense value={10}>Ten</MenuItem>
                        <MenuItem dense value={20}>Twenty</MenuItem>
                        <MenuItem dense value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </ThemeProvider>
        </div>
    );
}
