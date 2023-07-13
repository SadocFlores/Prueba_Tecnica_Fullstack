import { Request, Response, Router } from "express";
import ProductsController from './controllers/cont_product';

const productRoutes = Router();
const productCtrl = new ProductsController

productRoutes.post('/register', async (req: Request, res: Response) => { 
    const body = req.body
    try{
        const response = await productCtrl.createProduct(body)
        return res.status(response.code).json(response)
    }catch(err: any){
        return res.status(err.code ? err.code : 500).json(err)
    }
})

productRoutes.get('/consultCategory', async( req: Request, res: Response)=>{
    const value: any =req.query.category
    try{
        const response = await productCtrl.readProductByCategory(value)
        return res.status(response.code).json(response)
    }catch(err: any){
        return res.status(err.code ? err.code : 500).json(err)
    }
})
productRoutes.get('/consultName', async( req: Request, res: Response)=>{
    const value: any =req.query.category
    try{
        const response = await productCtrl.readProductByName(value)
        return res.status(response.code).json(response)
    }catch(err: any){
        return res.status(err.code ? err.code : 500).json(err)
    }
})
module.exports = Router