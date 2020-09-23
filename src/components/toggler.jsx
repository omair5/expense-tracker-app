import React,{useContext} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import {TransactionContext} from '../context/globalState'
const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.common.white,
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor:  'rgb(88, 180, 241)',
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:  'rgb(88, 180, 241)',
    },
    checked: {},
}))(Switch);


export default function Toggler() {
    const{ToggleState,setToggleState}=useContext(TransactionContext)
    const handleChange = (event) => {
        setToggleState({ ...ToggleState, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup>
            <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>Rs</Grid>
                    <Grid item>
                        <AntSwitch checked={ToggleState.checkedC} onChange={handleChange} name="checkedC" />
                    </Grid>
                    <Grid item>$</Grid>
                </Grid>
            </Typography>
        </FormGroup>
    );
}
