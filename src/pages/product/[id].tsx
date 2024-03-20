import { cache } from "react";
import { TProduct } from "../index.js";
import CustomLink from "../../components/custom-link.js";

const getOneProduct = cache(async(id:string) => {
    const resource = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const product = await resource.json();
    return product;
})





const Product = async({id}:any) => {
    const product:TProduct = await getOneProduct(id);

    return (
        <div className=" w-full min-h-screen px-[30px]  flex items-center justify-center flex-col flex-wrap gap-4">
            <title>{product.title}</title>
            {/*border-2 border-red-600 */}
            <img alt="a product image" className="w-full h-[500px] object-cover object-center" src={product.images[0]}/>
            <h1 className="py-2">{product.title}</h1>
            <CustomLink to="/cart" prefetch={false} params={{
    id:product.id,
    title:product.title,
    image:product.images[0],
    price:20.00,
    availableInStock:5,
    

    
   }} >Add to Cart</CustomLink>

        </div>
    )
}
export default Product;

export const getConfig = async () => {
    return {
      render: 'dynamic',
    };
  };