import TopNavigation from "../molecules/Navigations/TopNavigation"
import { Input, Modal, Button, Spin } from "antd";
import { useState, useEffect } from 'react'
import { ReloadOutlined } from '@ant-design/icons';


const ProductsOverviewPage = () => {
    const [open, setOpen] = useState(false);
    const [isFetchingProducts, setIsFetchingProducts] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsFetchingProducts(false)
        }, 3000)
    }, [isFetchingProducts])
  return (
    <>
        <div className='w-full bg-white'>
            <TopNavigation />
            <div className='p-[20px] w-full'>
                <div>
                    <h4 className='font-roboto font-bold text-[16px] cursor-pointer'>Products</h4>
                    <p className='font-roboto text-[14px] cursor-pointer'>Overview of your Products</p>
                </div>
                <div className='w-full mt-[20px] border-t-[2px] border-solid pt-[10px]'>
                    <div className='flex justify-start'>
                        <Input placeholder='Search Product' className='pl-[12px] font-roboto w-[400px] pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] focus:border-[#000] hover:border-[#000] border-[#000]' />
                    </div>
                    {isFetchingProducts ? 
                        <div className='w-full h-[120px] flex justify-center items-center'>
                            <Spin indicator={<ReloadOutlined className='text-primary animate-spin' />} size="large" />
                        </div>
                        :
                        <div className='grid grid-cols-4 mt-[10px] gap-[4px]'>
                            {/* card */}
                            {Array.from({ length: 10 }).map((_, i) => (
                                <div key={i} onClick={() => setOpen(true)} className='border-solid border-[1px] rounded-[15px] cursor-pointer p-[20px]'>
                                    <div className='w-full flex justify-center'>
                                        <img src="/movit.jpg" className='w-[200px] rounded-[15px]' alt="Movit" />
                                    </div>
                                    <div>
                                        <p className='font-roboto text-[14px] cursor-pointer'>Movit Herbal Jerry</p>
                                        <h4 className='font-roboto font-bold text-[14px] cursor-pointer'>2300 Rwf</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>

            </div>
        </div>

        {/* manage product modal */}
        <Modal
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
            footer={null}
        >
            <div>
                <p className='font-roboto text-[14px] cursor-pointer'>Update or Delete Product</p>
                <h4 className='font-roboto font-bold text-[14px] cursor-pointer'>The details you put will update the product</h4>
            </div>
            <div className='mt-[15px] flex flex-row w-full border-t-[1px] border-solid p-[8px] space-x-[10px]'>
                <div className='bg-[#FAF9F8] p-[15px]'>
                    <img src="/movit.jpg" className='w-[200px] rounded-[15px]' alt="Movit" />
                    <div className='mt-[10px]'>
                        <p className='font-roboto text-[14px] cursor-pointer'>Movit Herbal Jerry</p>
                        <h4 className='font-roboto font-bold text-[14px] cursor-pointer'>2300 Rwf</h4>
                    </div>
                </div>
                <div className='flex-1'>
                    <div>
                        <p className='font-roboto text-[14px] cursor-pointer'>Update Product</p>
                    </div>
                    <div className='mt-[10px] flex flex-col space-y-[6px]'>
                        <Input placeholder='Product Name' className='pl-[12px] font-roboto pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] w-full focus:border-[#000] hover:border-[#000] border-[#000]' />
                        <Input placeholder='Product Price' className='pl-[12px] font-roboto pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] w-full focus:border-[#000] hover:border-[#000] border-[#000]' />
                        <Input placeholder='Quantity In Stock' className='pl-[12px] font-roboto pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] w-full focus:border-[#000] hover:border-[#000] border-[#000]' />
                        <Button color="default" className='font-roboto' variant="solid">
                            Update Product
                        </Button>
                        <div className='mt-[20px]'>
                            <p className='font-roboto text-[14px] cursor-pointer'>You will remove the product when click delete</p>
                            <Button color="danger" className='font-roboto' variant="filled">
                                Delete Product
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
        {/* manage product modal */}
    </>
  )
}

export default ProductsOverviewPage
