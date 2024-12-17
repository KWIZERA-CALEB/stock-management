import { Input, Modal, Button } from "antd";
import { Link } from 'react-router-dom'


const RegisterAdminPage = () => {
  return (
    <div className='w-full h-[100vh] bg-[#FAF9F8] flex justify-center items-center'>
        <div className='rounded-[15px] p-[20px] w-[400px] bg-white'>
            <Link to='/'>
                <div className='bg-primary rounded-full flex justify-center items-center p-[3px] w-[30px] h-[30px] mb-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="20" height="20">
                        <path d="M20 10.0003L20.0002 19.0001L18.0002 19.0002L18 12.0002L11.8282 12.0002L15.7779 15.9499L14.3637 17.3641L7.99976 11.0001L14.3637 4.63617L15.7779 6.05038L11.8282 10.0002L20 10.0003ZM8.74958 4.63617L10.1638 6.05038L5.21405 11.0001L10.1638 15.9499L8.74958 17.3641L2.38562 11.0001L8.74958 4.63617Z"></path>
                    </svg>
                </div>
            </Link>
            <div>
                <p className='font-roboto text-[14px] cursor-pointer'>Add New Manager</p>
                <h4 className='font-roboto font-bold text-[14px] cursor-pointer'>The details you put will update the product</h4>
            </div>
            <div className='mt-[10px] flex flex-col space-y-[6px]'>
                <Input placeholder='Manager Name' className='pl-[12px] font-roboto pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] w-full focus:border-[#000] hover:border-[#000] border-[#000]' />
                <Input placeholder='Manager Email' className='pl-[12px] font-roboto pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] w-full focus:border-[#000] hover:border-[#000] border-[#000]' />
                <Input placeholder='Password' className='pl-[12px] font-roboto pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] w-full focus:border-[#000] hover:border-[#000] border-[#000]' />
                <Button color="default" className='font-roboto' variant="solid">
                    Add Manager
                </Button>
            </div>
        </div>
    </div>
  )
}

export default RegisterAdminPage
