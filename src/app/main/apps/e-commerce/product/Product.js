import React, { useEffect, useState } from "react";
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
import Select from "react-select";
import { FuseAnimate, FusePageCarded, FuseChipSelect, FuseUtils } from "@fuse";
import { useForm } from "@fuse/hooks";
// import {Link} from 'react-router-dom';
// import clsx from 'clsx';
import _ from "@lodash";
import { useDispatch, useSelector } from "react-redux";
import withReducer from "app/store/withReducer";
import * as Actions from "../store/actions";
import reducer from "../store/reducers";

// Tabs
import BasicInfo from "./tabs/basic-info";
import ProductImage from "./tabs/product-image";
import Pricing from "./tabs/pricing";
import Inventory from "./tabs/inventory";
import Shipping from "./tabs/shipping";
import MeasurementOption from "./tabs/measurement/measurement";

// styles
import { useStyles } from "./styles";

// ProductHeader
import ProductHeader from "./ProductHeader";

// Component Function
function Product(props) {
  const dispatch = useDispatch();
  const product = useSelector(({ eCommerceApp }) => eCommerceApp.product);

  const classes = useStyles(props);
  const [tabValue, setTabValue] = useState(0);
  const { form, handleChange, setForm } = useForm(null);

  // state for the measurement
  const [selectedOption, setSelectedOption] = useState({ option: null });

  function handleSelection(selectedOption) {
    setSelectedOption(selectedOption);
    console.log(selectedOption.value);
  }

  useEffect(() => {
    function updateProductState() {
      const params = props.match.params;
      const { productId } = params;

      if (productId === "new") {
        dispatch(Actions.newProduct());
      } else {
        dispatch(Actions.getProduct(props.match.params));
      }
    }
    updateProductState();
  }, [dispatch, props.match.params]);

  useEffect(() => {
    if (
      (product.data && !form) ||
      (product.data && form && product.data.id !== form.id)
    ) {
      setForm(product.data);
    }
  }, [form, product.data, setForm]);

  function handleChangeTab(event, tabValue) {
    setTabValue(tabValue);
  }

  function handleChipChange(value, name) {
    setForm(_.set({ ...form }, name, value.map(item => item.value)));
  }

  function setFeaturedImage(id) {
    setForm(_.set({ ...form }, "featuredImageId", id));
  }

  function handleUploadChange(e) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = () => {
      setForm(
        _.set({ ...form }, `images`, [
          {
            id: FuseUtils.generateGUID(),
            url: `data:${file.type};base64,${btoa(reader.result)}`,
            type: "image"
          },
          ...form.images
        ])
      );
    };

    reader.onerror = function() {
      console.log("error on load image");
    };
  }

  function canBeSubmitted() {
    return form.name.length > 0 && !_.isEqual(product.data, form);
  }

  return (
    <FusePageCarded
      classes={{
        toolbar: "p-0",
        header: "min-h-72 h-72 sm:h-136 sm:min-h-136"
      }}
      header={
        <ProductHeader
          form={form}
          canBeSubmitted={canBeSubmitted}
          dispatch={dispatch}
        />
      }
      contentToolbar={
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
      }
      content={
        form && (
          <div className="p-16 sm:p-24 max-w-2xl">
            {tabValue === 0 && (
              <BasicInfo
                form={form}
                handleChange={handleChange}
                handleChipChange={handleChipChange}
              />
            )}

            {tabValue === 1 && (
              <MeasurementOption
                form={form}
                handleChange={handleChange}
                handleSelection={handleSelection}
                selectedOption={selectedOption}
              />
            )}
            {tabValue === 2 && (
              <ProductImage
                form={form}
                classes={classes}
                handleUploadChange={handleUploadChange}
                setFeaturedImage={setFeaturedImage}
              />
            )}
            {tabValue === 3 && (
              <Pricing form={form} handleChange={handleChange} />
            )}
            {tabValue === 4 && (
              <Inventory form={form} handleChange={handleChange} />
            )}
            {tabValue === 5 && (
              <Shipping form={form} handleChange={handleChange} />
            )}
          </div>
        )
      }
      innerScroll
    />
  );
}

export default withReducer("eCommerceApp", reducer)(Product);
