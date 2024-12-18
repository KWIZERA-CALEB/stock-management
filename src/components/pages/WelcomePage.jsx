import { Button } from "antd";
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
        <div className='w-full h-[100vh] bg-white flex flex-row justify-center items-center'>
            <div>
                <div>
                    <p className='font-roboto text-[14px] cursor-pointer'>Made For Stock Managers</p>
                    <h4 className='font-roboto font-bold text-[14px] cursor-pointer'>This is a stock management system for store managers</h4>
                </div>
                <div className='flex justify-center mt-[15px] w-full'>
                    <Button color='default' variant='solid'><Link to='/login'>Start Now</Link></Button>
                </div>
            </div>
        </div>
  )
}

export default WelcomePage
