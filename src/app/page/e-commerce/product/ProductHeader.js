import React from "react";
import { Button, Icon, Typography } from "@material-ui/core";
import { FuseAnimate } from "app/Common";
import { Link } from "react-router-dom";
import _ from "lodash";
import * as Actions from "../store/actions";

export default function ProductHeader({
  classes,
  form,
  canBeSubmitted,
  dispatch
}) {
  return (
    form && (
      <div className="flex flex-1 w-full items-center justify-between">
        <div className="flex flex-col items-start max-w-full">
          <FuseAnimate animation="transition.slideRightIn" delay={300}>
            <Typography
              className="normal-case flex items-center sm:mb-12"
              component={Link}
              role="button"
              to="/apps/e-commerce/products"
              color="inherit"
            >
              <Icon className="mr-4 text-20">arrow_back</Icon>
              Products
            </Typography>
          </FuseAnimate>

          <div className="flex items-center max-w-full">
            <FuseAnimate animation="transition.expandIn" delay={300}>
              {form.images.length > 0 && form.featuredImageId ? (
                <img
                  className="w-32 sm:w-48 mr-8 sm:mr-16 rounded"
                  src={_.find(form.images, { id: form.featuredImageId }).url}
                  alt={form.name}
                />
              ) : (
                <img
                  className="w-32 sm:w-48 mr-8 sm:mr-16 rounded"
                  src="assets/images/ecommerce/product-image-placeholder.png"
                  alt={form.name}
                />
              )}
            </FuseAnimate>
            <div className="flex flex-col min-w-0">
              <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                <Typography className="text-16 sm:text-20 truncate">
                  {form.name ? form.name : "New Product"}
                </Typography>
              </FuseAnimate>
              <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                <Typography variant="caption">Product Detail</Typography>
              </FuseAnimate>
            </div>
          </div>
        </div>
        <FuseAnimate animation="transition.slideRightIn" delay={300}>
          <Button
            className="whitespace-no-wrap"
            variant="contained"
            disabled={!canBeSubmitted()}
            onClick={() => dispatch(Actions.saveProduct(form))}
          >
            Save
          </Button>
        </FuseAnimate>
        <Button
          className="whitespace-no-wrap"
          variant="contained"
          disabled={!canBeSubmitted()}
          onClick={() => {}}
        >
          Publish
        </Button>
      </div>
    )
  );
}
