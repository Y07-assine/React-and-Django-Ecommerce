const localhost ="http://localhost:8000";

const apiURL = "/api";

export const endpoint = `${localhost}${apiURL}`;

export const productURL=`${endpoint}/products/`;

export const listproductURL=`${endpoint}/listproducts/`;

export const ProductFlavorURL =`${endpoint}/flavor/`;

export const addToCartURL = `${endpoint}/add-to-cart/`;

export const removeFormCartURL= id =>`${endpoint}/remove-from-cart/${id}/`;

export const updateOrderProductURL = `${endpoint}/update-order-product/`;

export const userIdURL =`${endpoint}/userid/`;

export const orderSummaryURL = `${endpoint}/order-summary`;

export const userIDURL = `${endpoint}/user-id/`;

export const singleProductURL = `${endpoint}/product`;

export const loginURL =`${localhost}/login`;
