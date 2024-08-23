import { fakeMyListings } from "./fake-data";

export const updateListingRoute = {
    method:"POST",
    path:"/api/editListings/{id}",
    handler:(req,h) => {
        const { id } = req.payload;
        const { name, description, price } = req.payload;
        let listing =  fakeMyListings.find(listing => listing.id == id);
        const updatedlisting = {...listing,id,name,description,price};
        return updatedlisting;
    }
}