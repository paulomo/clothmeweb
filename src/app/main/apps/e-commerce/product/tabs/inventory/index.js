import React from 'react';
import { Button, Tab, Tabs, TextField, InputAdornment, InputLabel, Icon, Typography, Radio, OutlinedInput, MenuItem, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';



export default function Inventory ({ form, handleChange}) {
    return (
        <div>

            <TextField
                className="mt-8 mb-16"
                required
                label="SKU"
                autoFocus
                id="sku"
                name="sku"
                value={form.sku}
                onChange={handleChange}
                variant="outlined"
                fullWidth
            />

            <TextField
                className="mt-8 mb-16"
                label="Quantity"
                id="quantity"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                variant="outlined"
                type="number"
                fullWidth
            />
        </div>
    )
} 