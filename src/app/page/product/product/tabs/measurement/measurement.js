import React, {useState} from 'react';
import Select from 'react-select';

// Screens
import BottomMeasurement from './bottom-measurement';
import FeetMeasurement from './feet-measurement';
import TopMeasurement from './top-measurement';
import FullBodyMeasurement from './full-body-measurement';



// measurement options
const measurementOptions = [
    { 'value': 'top', 'label': 'Top Measurement' },
    { 'value': 'bottom', 'label': 'Bottom Measurement' },
    { 'value': 'fullbody', 'label': 'Full Body Measurement' },
    { 'value': 'feet', 'label': 'Feet Measurment' }
];



export default function MeasurementOption({handleSelection, selectedOption, form, handleChange }) {
    return (
        <div>
            <Select
                // fullWidth
                // label="Select Measurement Option"
                // name="measurementOption"
                // SelectProps={{ native: true }}
                value={selectedOption.option}
                // variant="outlined"
                // required
                // select
                options={measurementOptions}
                onChange={handleSelection}
            />

            { selectedOption.value === "bottom" && ( <BottomMeasurement form={form} handleChange={handleChange}/> )}
            { selectedOption.value === "top" && ( <TopMeasurement form={form} handleChange={handleChange}/> )}
            { selectedOption.value === "feet" && ( <FeetMeasurement form={form} handleChange={handleChange}/> )}
            { selectedOption.value === "fullbody" && ( <FullBodyMeasurement form={form} handleChange={handleChange}/> )}
        </div>
    )
}
