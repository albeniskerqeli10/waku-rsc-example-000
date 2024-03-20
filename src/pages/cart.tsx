"use client"
const AddProduct = ({searchParams}:any) => {
  console.log(searchParams[0]);
  
const obj =[
  {
    id:'3#)#)#)##)',
    name:'3#)#)#)#)'
  }
]

console.log(obj);
  // const searchParams1 = new URLSearchParams(window.location.search);
// const ff = searchParams.get('selectedProduct');
// console.log(ff,'FF');
  return(
      <div className="min-h-[100vh] border-none border-blue-800 flex items-center justify-center">
         <div className="w-[800px] h-[500px] border border-neutral-900 flex items-center justify-center gap-5 flex-wrap">
        <aside className="flex-1 bg-neutral-950 border px-4 border-neutral-800 h-full text-white ">
          {/* <h1 className="font-bold text-xl  py-2 w-full border-b-2 border-neutral-800">Hello {searchParams && searchParams[0].title}</h1> */}
        </aside>
        <div className="flex w-[300px] bg-neutral-950 px-4 h-full border border-neutral-800  text-white">
          Delivery
        </div>
       </div>
      </div>
    )
}
export default AddProduct;


// export const getConfig = async () => {
//     return {
//       render: 'static',
//     };
//   };