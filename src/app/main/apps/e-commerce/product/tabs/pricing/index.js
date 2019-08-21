import React from 'react';
import { Button, Tab, Tabs, TextField, InputAdornment, InputLabel, Icon, Typography, Radio, OutlinedInput, MenuItem, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';


export default function Pricing ({ form, handleChange, }) {
    return (
        <div>

            <TextField
                className="mt-8 mb-16"
                label="Tax Excluded Price"
                id="priceTaxExcl"
                name="priceTaxExcl"
                value={form.priceTaxExcl}
                onChange={handleChange}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}
                type="number"
                variant="outlined"
                autoFocus
                fullWidth
            />

            <TextField
                className="mt-8 mb-16"
                label="Tax Included Price"
                id="priceTaxIncl"
                name="priceTaxIncl"
                value={form.priceTaxIncl}
                onChange={handleChange}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}
                type="number"
                variant="outlined"
                fullWidth
            />

            <TextField
                className="mt-8 mb-16"
                label="Tax Rate"
                id="taxRate"
                name="taxRate"
                value={form.taxRate}
                onChange={handleChange}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}
                type="number"
                variant="outlined"
                fullWidth
            />

            <TextField
                className="mt-8 mb-16"
                label="Compared Price"
                id="comparedPrice"
                name="comparedPrice"
                value={form.comparedPrice}
                onChange={handleChange}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}
                type="number"
                variant="outlined"
                fullWidth
                helperText="Add a compare price to show next to the real price"
            />

        </div>
    )
}