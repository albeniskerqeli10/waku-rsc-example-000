import { Link } from "waku";

export const Header = () => {
  return (
    <header className="bg-black w-full sticky top-0 left-0 right-0 bottom-0 min-h-[70px] flex items-center justify-between px-[35px] py-[10px] flex-wrap">
      <Link unstable_prefetchOnEnter={false} to="/" className="text-lg font-bold shadow-lg">Dresey</Link>
      <Link to="/add-product" className="bg-blue-600  px-3 py-2 border-none font-bold active:bg-blue-700">Add Product</Link>
    </header>
    // <header className="fixed left-0 top-0 p-6">
    //   <h2 className="text-lg font-bold tracking-tight">Waku starter</h2>
    // </header>
  );
};
