import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { getMyListingsRoute } from "./getMyListings";
import { deleteListingRoute } from "./deleteListing";
import { createNewListingRoute } from "./createNewListing.js";
import { updateListingRoute } from "./updateListing.js";

export default [
    getAllListingsRoute,
    getListingRoute,
    getMyListingsRoute,
    deleteListingRoute,
    createNewListingRoute,
    updateListingRoute
];