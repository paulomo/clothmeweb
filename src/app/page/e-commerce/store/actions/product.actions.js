import axios from "axios";
import { Utils } from "app/Common";
import { showMessage } from "app/store/actions/fuse";

// Type of Actions
export const GET_PRODUCT = "[E-COMMERCE APP] GET PRODUCT";
export const SAVE_PRODUCT = "[E-COMMERCE APP] SAVE PRODUCT";
export const PUBLISH_PRODUCT = "[E-COMMERCE APP] PUBLISH PRODUCT";
export const REMOVE_PRODUCT = "[E-COMMERCE APP] REMOVE PRODUCT";

// Get Actions
export function getProduct(params) {
  const request = axios.get("/api/e-commerce-app/product", { params });

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_PRODUCT,
        payload: response.data
      })
    );
}

// Save Product
export function saveProduct(data) {
  const request = axios.post("/api/e-commerce-app/product/save", data);

  return dispatch =>
    request.then(response => {
      dispatch(showMessage({ message: "Product Saved" }));

      return dispatch({
        type: SAVE_PRODUCT,
        payload: response.data
      });
    });
}

export function removeProduct({ params }) {}

export function publishProduct({ params }) {}

// New Product
// TODO: Make this for each type of Product (Cloth, Shoe, Accessosaries)
/*

isPublished: false;
isSave: fales;

*/
export function newProduct() {
  const data = {
    id: Utils.generateGUID(),
    name: "",
    handle: "",
    description: "",
    categories: [],
    tags: [],
    images: [],
    priceTaxExcl: 0,
    priceTaxIncl: 0,
    taxRate: 0,
    comparedPrice: 0,
    quantity: 0,
    sku: "",
    width: "",
    height: "",
    depth: "",
    weight: "",
    extraShippingFee: 0,
    active: true
  };

  return {
    type: GET_PRODUCT,
    payload: data
  };
}
