import { randomUUID } from 'crypto';


export const createNewListingRoute = {
    method:"POST",
    path:"/api/listings",
    handler:(req,h) => {
        const id = randomUUID();
        const {name='',description='',price = 0} = req.payload;
        return {id,name,description,price};
    }
};