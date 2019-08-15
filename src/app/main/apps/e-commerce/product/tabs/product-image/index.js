import React from 'react';
import { Button, Tab, Tabs, TextField, InputAdornment, InputLabel, Icon, Typography, Radio, OutlinedInput, MenuItem, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import { FuseAnimate, FusePageCarded, FuseChipSelect, FuseUtils } from '@fuse';
import clsx from 'clsx';


export default function ProductImage({ form, classes, handleUploadChange, setFeaturedImage }) {
    return (
        <div>
        <input
            accept="image/*"
            className="hidden"
            id="button-file"
            type="file"
            onChange={handleUploadChange}
        />
        <div className="flex justify-center sm:justify-start flex-wrap">
            <label
                htmlFor="button-file"
                className={
                    clsx(
                        classes.productImageUpload,
                        "flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5"
                    )}
            >
                <Icon fontSize="large" color="action">cloud_upload</Icon>
            </label>
            {form.images.map(media => (
                <div
                    onClick={() => setFeaturedImage(media.id)}
                    className={
                        clsx(
                            classes.productImageItem,
                            "flex items-center justify-center relative w-128 h-128 rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5",
                            (media.id === form.featuredImageId) && 'featured')
                    }
                    key={media.id}
                >
                    <Icon className={classes.productImageFeaturedStar}>star</Icon>
                    <img className="max-w-none w-auto h-full" src={media.url} alt="product" />
                </div>
            ))}
        </div>
    </div>)
}

