// "use client"
// import { Link } from "waku";
import CustomLink from "./custom-link.js";

export const Header = () => {
  return (
    <header className="bg-black border-none border-red-700 w-full sticky top-0 left-0 right-0 bottom-0 min-h-[70px] flex items-center justify-between px-[35px] py-[10px] flex-wrap">
      <CustomLink prefetch={true} to="/" className="text-lg font-bold shadow-lg">SlickStore</CustomLink>
     <div className="flex flex-wrap gap-5">
     <CustomLink to="/cart" prefetch={false} className="bg-blue-600 text-sm  px-3 py-1.5 b border-none font-bold active:bg-blue-700 flex items-center justify-between gap-4 rounded-sm ">
     <i className="mr-[-10px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /> </svg></i> 
      <span>Cart</span>
     
      </CustomLink>
     <CustomLink to="/login-page" prefetch={false} className="px-3 py-1.5 rounded-sm border border-neutral-800 font-bold active:bg-blue-600 bg-neutral-950 shadow-lg">Sign In</CustomLink>
     </div>
    </header>
    // <header className="fixed left-0 top-0 p-6">
    //   <h2 className="text-lg font-bold tracking-tight">Waku starter</h2>
    // </header>
  );
};

export const getConfig = async () => {
  return {
    render: 'static',
   };
 };