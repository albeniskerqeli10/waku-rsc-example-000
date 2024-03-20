import Form from "../components/form.js";

const LoginPage = () => {
    return(
       <div className="w-full  min-h-screen border-none border-red-700 flex items-center flex-row justify-center flex-wrap"> 
<Form/>
       </div>
    )
}
export default LoginPage;


export const getConfig = async () => {
    return {
      render: 'static',
    };
  };