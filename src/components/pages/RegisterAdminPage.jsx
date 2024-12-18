import { Input, Modal, Button } from "antd";
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import { ReloadOutlined } from '@ant-design/icons';
import { addNewManager } from "../../services/authservice";

const RegisterAdminPage = () => {
    const { control, handleSubmit, formState: {errors, isSubmitting} } = useForm()
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            const response = await addNewManager(data)
            if (response.error) {
                toast.error(response.error, { 
                    position: 'bottom-center',
                    duration: 5000,            
                    className: 'font-roboto text-[12px] font-bold cursor-pointer',
                    style: {
                        color: '#fff',        
                        backgroundColor: '#CC2B52',
                        padding: '6px 20px', 
                    },
                });
            } else {
                toast.success(response.message, { 
                    position: 'bottom-center',
                    duration: 5000,            
                    className: 'font-roboto text-[12px] font-bold cursor-pointer',
                    style: {
                        color: '#fff',        
                        backgroundColor: '#15B392',
                        padding: '6px 20px', 
                    },
                });

                navigate('/dashboard')
            }
        } catch(error) {
            console.log(error)
            toast.error("An unexpected error occurred", { 
                position: 'bottom-center',
                duration: 5000,            
                className: 'font-roboto text-[12px] font-bold cursor-pointer',
                style: {
                    color: '#fff',        
                    backgroundColor: '#CC2B52',
                    padding: '6px 20px', 
                },
            });
        }
    }
  return (
    <div className='w-full h-[100vh] bg-[#FAF9F8] flex justify-center items-center'>
        <div className='rounded-[15px] p-[20px] w-[400px] bg-white'>
            <Link to='/dashboard'>
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-[10px] flex flex-col space-y-[6px]'>
                    <Controller
                        name="fullName"
                        control={control}
                        rules={{
                            required: 'Manager Name is required'
                        }}
                        render={({ field }) => (
                            <Input {...field} placeholder='Manager Name' className='pl-[12px] font-roboto pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] w-full focus:border-[#000] hover:border-[#000] border-[#000]' />
                        )}
                    />
                    {errors.fullName && (
                        <p className='font-roboto text-[12px] text-[#FF204E]'>{errors.fullName.message}</p>
                    )}
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: 'Email is required'
                        }}
                        render={({ field }) => (
                            <Input {...field} placeholder='Manager Email' className='pl-[12px] font-roboto pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] w-full focus:border-[#000] hover:border-[#000] border-[#000]' />
                        )}
                    />
                    {errors.email && (
                        <p className='font-roboto text-[12px] text-[#FF204E]'>{errors.email.message}</p>
                    )}
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: 'Password is required'
                        }}
                        render={({ field }) => (
                            <Input.Password {...field} placeholder='Password' className='pl-[12px] font-roboto pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] w-full focus:border-[#000] hover:border-[#000] border-[#000]' />
                        )}
                    />
                    {errors.password && (
                        <p className='font-roboto text-[12px] text-[#FF204E]'>{errors.password.message}</p>
                    )}
                    {isSubmitting ? 
                        <Button disabled color="default" className='flex flex-row space-x-[5px] items-center font-roboto' variant="solid">
                            <ReloadOutlined className='text-primary animate-spin w-[20px]' />
                            Adding
                        </Button>
                        :
                        <Button disabled={isSubmitting} htmlType="submit" color="default" className='font-roboto' variant="solid">
                            Add Manager
                        </Button>
                    }
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterAdminPage
