import { fakeMyListings } from "./fake-data";

export const deleteListingRoute = {
    method:'DELETE',
    path:"/api/listing/{id}",
    handler:(req,h) => {
        const id = req.params.id;
        const result = fakeMyListings.filter(listing => listing.id != id);
        return result;
    }
}