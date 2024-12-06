import React from 'react';
import { Button, Tab, Tabs, TextField, InputAdornment, InputLabel, Icon, Typography, Radio, OutlinedInput, MenuItem, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';


function FeetMeasurement({ form, handleChange }) {

    return (
      <div className="mt-60">
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

          <div className="flex">
              <TextField
                  className="mt-8 mb-16 mr-8"
                  label="Width"
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


              <div className="flex">
                  <TextField
                      className="mt-8 mb-16 mr-8"
                      label="Width"
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

      </div>
    )
}

export default FeetMeasurement;
