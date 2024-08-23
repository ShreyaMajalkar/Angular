import { fakeMyListings } from "./fake-data";

export const getMyListingsRoute = {
    method:'GET',
    path:'/api/userListings',
    handler:(req,h) => {
        return fakeMyListings;
    }
}