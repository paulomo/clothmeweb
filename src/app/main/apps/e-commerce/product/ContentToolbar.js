import React from "react";
import {
  Button,
  Tab,
  Tabs,
  TextField,
  InputAdornment,
  InputLabel,
  Icon,
  Typography,
  Radio,
  OutlinedInput,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@material-ui/core";

export default function ContentToolbar({ tabValue, handleChangeTab, classes }) {
  return (
    <Tabs
      value={tabValue}
      onChange={handleChangeTab}
      indicatorColor="secondary"
      textColor="secondary"
      variant="scrollable"
      scrollButtons="auto"
      classes={{ root: "w-full h-64" }}
    >
      <Tab className="h-64 normal-case" label="Basic Info" />
      <Tab className="h-64 normal-case" label="Measurement" />
      <Tab className="h-64 normal-case" label="Product Images" />
      <Tab className="h-64 normal-case" label="Pricing" />
      <Tab className="h-64 normal-case" label="Inventory" />
      <Tab className="h-64 normal-case" label="Shipping" />
    </Tabs>
  );
}
