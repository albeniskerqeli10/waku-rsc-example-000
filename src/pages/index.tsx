
import { Link } from 'waku';

import { Counter } from '../components/counter.js';
import { cache } from 'react';


const getProducts = cache(async() => {
  const resource = await fetch(' https://api.escuelajs.co/api/v1/products');
  const data = await resource.json();
  return data;
})



export type TProduct = {
  id:number | string;
  title:string;
  images:Array<string>
}



export default async function HomePage() {
  // const data = await getData();
  const products = await getProducts();
  


  return (
    <div className='min-h-screen w-full  flex items-center justify-center flex-col'>
      {/*'border-2 border-red-600'*/}
{/* <h1 className='py-4 text-md font-bold text-white'>Hello</h1> */}
<div className='w-full min-h-[400px] flex items-center justify-center flex-row flex-wrap gap-10 py-2'>
  {products && products.map((product:TProduct) => (
   <Link to={`/product/${product.id}`}>
    <div className='w-[400px] bg-neutral-950 min-h-[400px] flex items-center flex-col flex-wrap   text-white shadow-xl border border-neutral-900'>
      {/*' gap-3 '*/}
      <img  src={product.images[0]} className='w-[400px] h-[350px] object-cover object-center'/>
      {/*onError={(e:any) => {
        e.target.src= "https://fakeimg.pl/600x400/0f0e0e/ffffff?text=Image&font=noto"
      }}*/}
     <div> <h1 className='py-4'>{product.title}</h1></div>

      </div>
   </Link>
  ))}
</div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  };
};

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
  };

  return data;
};
