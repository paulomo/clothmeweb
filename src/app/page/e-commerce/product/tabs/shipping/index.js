import React from 'react';
import { Button, Tab, Tabs, TextField, InputAdornment, InputLabel, Icon, Typography, Radio, OutlinedInput, MenuItem, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';



export default function Shipping ({ form, handleChange }) {
    return (
        <div>
            <div className="flex">
                <TextField
                    className="mt-8 mb-16 mr-8"
                    label="Width"
                    autoFocus
                    id="width"
                    name="width"
                    value={form.width}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />

                <TextField
                    className="mt-8 mb-16 mr-8"
                    label="Height"
                    id="height"
                    name="height"
                    value={form.height}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />

                <TextField
                    className="mt-8 mb-16 mr-8"
                    label="Depth"
                    id="depth"
                    name="depth"
                    value={form.depth}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                />

            </div>

            <TextField
                className="mt-8 mb-16"
                label="Weight"
                id="weight"
                name="weight"
                value={form.weight}
                onChange={handleChange}
                variant="outlined"
                fullWidth
            />

            <TextField
                className="mt-8 mb-16"
                label="Extra Shipping Fee"
                id="extraShippingFee"
                name="extraShippingFee"
                value={form.extraShippingFee}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}
                fullWidth
            />
        </div>
    )
}