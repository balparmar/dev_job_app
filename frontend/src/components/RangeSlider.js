import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 400,
    },
});

function valuetext(value) {
    return `${value}K`;
}

const RangeSlider = () => {
    const classes = useStyles();
    const [value, setValue] = useState([20, 50]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} style={{margin: "10px auto"}}>
            <Typography id="range-slider" gutterBottom>
                Salary Range
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                min={0}
                max={200}
            />
            <p>{value[0]}K - {value[1]}K</p>
        </div>
    );
}

export default RangeSlider;