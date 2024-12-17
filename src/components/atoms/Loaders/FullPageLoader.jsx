import { useState, useEffect } from 'react'
import { Spin } from "antd";
import { ReloadOutlined } from '@ant-design/icons';

const FullPageLoader = () => {
    const [isLoader, setIsLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoader(false)
        }, 3000)
    }, [isLoader])
  return (
    <>
        {isLoader &&
            <div className='w-full fixed top-0 right-0 left-0 bottom-0 h-[100vh] z-50 bg-white flex justify-center items-center'>
                <Spin indicator={<ReloadOutlined className='text-primary animate-spin' />} size="large" />
            </div>
        }
    </>
  )
}

export default FullPageLoader
