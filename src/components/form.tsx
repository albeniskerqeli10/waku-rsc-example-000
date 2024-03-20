const Form = () => {
// const action = () => {
// return alert('fffff');
// }



    return(
        <form className="w-[360px]  bg-[#1b1b1d] min-h-[400px] flex items-center flex-col justify-center gap-7 px-3 py-4 flex-wrap shadow-lg  border border-neutral-800 rounded-sm" >
            {/*[border-color:rgb(27, 27, 29)]  */}
<h1 className="font-bold">Login</h1>
<label className="w-full flex flex-col flex-wrap gap-2.5 ">
<span className="text-sm">E-mail</span>
<input className="w-full bg-neutral-950 border-none text-white shadow-lg py-2.5 px-1 rounded-sm" type="text" placeholder="Your e-mail" />
</label>
<label className="w-full flex flex-col flex-wrap gap-2.5 ">
<span className="text-sm">Password</span>
<input className="w-full bg-neutral-950 border-none text-white shadow-lg py-2.5 px-1 rounded-sm" type="text" placeholder="Your password" />
</label>
{/* <label className="w-full flex flex-col flex-wrap gap-2 ">
<span className="text-sm">Birthday</span>
<input  className="w-full [color-scheme:dark;] bg-neutral-950 border-none text-white shadow-lg py-2.5 px-3" type="date" placeholder="Your birthday" />
</label> */}
<span className="self-start text-xs text-neutral-200">Don't have an account? <a href="#00" className="text-underline  text-xs text-neutral-200">Register here</a></span>

<button type="submit" className="w-full bg-blue-700 border-none text-white py-2.5 rounded-sm">Submit</button>
</form>
    )
}
export default Form;