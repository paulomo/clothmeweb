import React from 'react';
import { Button, Tab, Tabs, TextField, InputAdornment, InputLabel, Icon, Typography, Radio, OutlinedInput, MenuItem, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import { FuseAnimate, FusePageCarded, FuseChipSelect, Utils } from 'Common';



export default function BasciInfo({ form, handleChange, handleChipChange }) {
    return (
        <div>
            <TextField
                className="mt-8 mb-16"
                error={form.name === ''}
                required
                label="Name"
                autoFocus
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
            />

            <TextField
                className="mt-8 mb-16"
                id="description"
                name="description"
                onChange={handleChange}
                label="Description"
                type="text"
                value={form.description}
                multiline
                rows={5}
                variant="outlined"
                fullWidth
            />

            <FuseChipSelect
                className="mt-8 mb-24"
                value={
                    form.categories.map(item => ({
                        value: item,
                        label: item
                    }))
                }
                onChange={(value) => handleChipChange(value, 'categories')}
                placeholder="Select multiple categories"
                textFieldProps={{
                    label: 'Categories',
                    InputLabelProps: {
                        shrink: true
                    },
                    variant: 'outlined'
                }}
                isMulti
            />

            <FuseChipSelect
                className="mt-8 mb-16"
                value={
                    form.tags.map(item => ({
                        value: item,
                        label: item
                    }))
                }
                onChange={(value) => handleChipChange(value, 'tags')}
                placeholder="Select multiple tags"
                textFieldProps={{
                    label: 'Tags',
                    InputLabelProps: {
                        shrink: true
                    },
                    variant: 'outlined'
                }}
                isMulti
                required
            />

            <FuseChipSelect
                className="mt-8 mb-16"
                value={
                    form.tags.map(item => ({
                        value: item,
                        label: item
                    }))
                }
                onChange={(value) => handleChipChange(value, 'tags')}
                placeholder="Select multiple tags"
                textFieldProps={{
                    label: 'Tags',
                    InputLabelProps: {
                        shrink: true
                    },
                    variant: 'outlined'
                }}
                isMulti
                required
            />

            <FuseChipSelect
                className="mt-8 mb-16"
                value={
                    form.tags.map(item => ({
                        value: item,
                        label: item
                    }))
                }
                onChange={(value) => handleChipChange(value, 'tags')}
                placeholder="Select multiple tags"
                textFieldProps={{
                    label: 'Tags',
                    InputLabelProps: {
                        shrink: true
                    },
                    variant: 'outlined'
                }}
                isMulti
                required
            />

            <FuseChipSelect
                className="mt-8 mb-16"
                value={
                    form.tags.map(item => ({
                        value: item,
                        label: item
                    }))
                }
                onChange={(value) => handleChipChange(value, 'tags')}
                placeholder="Select multiple tags"
                textFieldProps={{
                    label: 'Tags',
                    InputLabelProps: {
                        shrink: true
                    },
                    variant: 'outlined'
                }}
                isMulti
                required
            />
        </div>
    )
}