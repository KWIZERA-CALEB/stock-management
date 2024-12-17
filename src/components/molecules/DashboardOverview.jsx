import { Button, Table, Tag, Modal, Input } from "antd";
import { useState } from 'react'

const columns = [
    {
      title: 'Product Image',
      dataIndex: 'productimage',
      key: 'productimage',
    },
    {
      title: 'Product Name',
      dataIndex: 'productname',
      key: 'productname',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
];

const dataSource = Array.from({
    length: 28,
  }).map((_, i) => ({
    key: i,
    productimage: <img src='/movit.jpg' className='w-[40px]' alt='Movit Herbal Jerry'/>,
    productname: <p className='font-roboto cursor-pointer'>Movit Herbal Jerry</p>,
    price: <p className='font-roboto cursor-pointer'>2000 Rwf</p>,
    quantity: <Tag className='bg-green-500 p-[5px] border-0 cursor-pointer font-roboto font-bold text-white'>20 in Stock</Tag>,
}));

const DashboardOverview = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
        <div className='w-full'>
            <div>
                <h4 className='font-roboto font-bold text-[16px] dark:text-white cursor-pointer'>Dashboard</h4>
                <p className='font-roboto text-[14px] cursor-pointer dark:text-white'>Overview of your Stock</p>
            </div>
            <div className='w-full mt-[20px] border-t-[2px] border-solid pt-[10px]'>
                <div className='grid grid-cols-4 gap-[4px]'>
                    {/* card */}
                    <div className='border-solid border-[1px] rounded-[15px] cursor-pointer flex flex-row justify-between p-[20px]'>
                        <div>
                            <p className='font-roboto text-[14px] dark:text-white cursor-pointer'>Total Products</p>
                            <h4 className='font-roboto font-bold dark:text-white text-[14px] cursor-pointer'>230</h4>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" width="20" height="20">
                                <path d="M15.0049 2.00281C17.214 2.00281 19.0049 3.79367 19.0049 6.00281C19.0049 6.73184 18.8098 7.41532 18.4691 8.00392L23.0049 8.00281V10.0028H21.0049V20.0028C21.0049 20.5551 20.5572 21.0028 20.0049 21.0028H4.00488C3.4526 21.0028 3.00488 20.5551 3.00488 20.0028V10.0028H1.00488V8.00281L5.54065 8.00392C5.19992 7.41532 5.00488 6.73184 5.00488 6.00281C5.00488 3.79367 6.79574 2.00281 9.00488 2.00281C10.2001 2.00281 11.2729 2.52702 12.0058 3.35807C12.7369 2.52702 13.8097 2.00281 15.0049 2.00281ZM11.0049 10.0028H5.00488V19.0028H11.0049V10.0028ZM19.0049 10.0028H13.0049V19.0028H19.0049V10.0028ZM9.00488 4.00281C7.90031 4.00281 7.00488 4.89824 7.00488 6.00281C7.00488 7.05717 7.82076 7.92097 8.85562 7.99732L9.00488 8.00281H11.0049V6.00281C11.0049 5.00116 10.2686 4.1715 9.30766 4.02558L9.15415 4.00829L9.00488 4.00281ZM15.0049 4.00281C13.9505 4.00281 13.0867 4.81869 13.0104 5.85355L13.0049 6.00281V8.00281H15.0049C16.0592 8.00281 16.923 7.18693 16.9994 6.15207L17.0049 6.00281C17.0049 4.89824 16.1095 4.00281 15.0049 4.00281Z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* card */}
                    {/* card */}
                    <div className='border-solid border-[1px] rounded-[15px] cursor-pointer flex flex-row justify-between p-[20px]'>
                        <div>
                            <p className='font-roboto text-[14px] dark:text-white cursor-pointer'>Total Products</p>
                            <h4 className='font-roboto font-bold dark:text-white text-[14px] cursor-pointer'>230</h4>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" width="20" height="20">
                                <path d="M15.0049 2.00281C17.214 2.00281 19.0049 3.79367 19.0049 6.00281C19.0049 6.73184 18.8098 7.41532 18.4691 8.00392L23.0049 8.00281V10.0028H21.0049V20.0028C21.0049 20.5551 20.5572 21.0028 20.0049 21.0028H4.00488C3.4526 21.0028 3.00488 20.5551 3.00488 20.0028V10.0028H1.00488V8.00281L5.54065 8.00392C5.19992 7.41532 5.00488 6.73184 5.00488 6.00281C5.00488 3.79367 6.79574 2.00281 9.00488 2.00281C10.2001 2.00281 11.2729 2.52702 12.0058 3.35807C12.7369 2.52702 13.8097 2.00281 15.0049 2.00281ZM11.0049 10.0028H5.00488V19.0028H11.0049V10.0028ZM19.0049 10.0028H13.0049V19.0028H19.0049V10.0028ZM9.00488 4.00281C7.90031 4.00281 7.00488 4.89824 7.00488 6.00281C7.00488 7.05717 7.82076 7.92097 8.85562 7.99732L9.00488 8.00281H11.0049V6.00281C11.0049 5.00116 10.2686 4.1715 9.30766 4.02558L9.15415 4.00829L9.00488 4.00281ZM15.0049 4.00281C13.9505 4.00281 13.0867 4.81869 13.0104 5.85355L13.0049 6.00281V8.00281H15.0049C16.0592 8.00281 16.923 7.18693 16.9994 6.15207L17.0049 6.00281C17.0049 4.89824 16.1095 4.00281 15.0049 4.00281Z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* card */}
                    {/* card */}
                    <div className='border-solid border-[1px] rounded-[15px] cursor-pointer flex flex-row justify-between p-[20px]'>
                        <div>
                            <p className='font-roboto text-[14px] dark:text-white cursor-pointer'>Total Products</p>
                            <h4 className='font-roboto font-bold dark:text-white text-[14px] cursor-pointer'>230</h4>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" width="20" height="20">
                                <path d="M15.0049 2.00281C17.214 2.00281 19.0049 3.79367 19.0049 6.00281C19.0049 6.73184 18.8098 7.41532 18.4691 8.00392L23.0049 8.00281V10.0028H21.0049V20.0028C21.0049 20.5551 20.5572 21.0028 20.0049 21.0028H4.00488C3.4526 21.0028 3.00488 20.5551 3.00488 20.0028V10.0028H1.00488V8.00281L5.54065 8.00392C5.19992 7.41532 5.00488 6.73184 5.00488 6.00281C5.00488 3.79367 6.79574 2.00281 9.00488 2.00281C10.2001 2.00281 11.2729 2.52702 12.0058 3.35807C12.7369 2.52702 13.8097 2.00281 15.0049 2.00281ZM11.0049 10.0028H5.00488V19.0028H11.0049V10.0028ZM19.0049 10.0028H13.0049V19.0028H19.0049V10.0028ZM9.00488 4.00281C7.90031 4.00281 7.00488 4.89824 7.00488 6.00281C7.00488 7.05717 7.82076 7.92097 8.85562 7.99732L9.00488 8.00281H11.0049V6.00281C11.0049 5.00116 10.2686 4.1715 9.30766 4.02558L9.15415 4.00829L9.00488 4.00281ZM15.0049 4.00281C13.9505 4.00281 13.0867 4.81869 13.0104 5.85355L13.0049 6.00281V8.00281H15.0049C16.0592 8.00281 16.923 7.18693 16.9994 6.15207L17.0049 6.00281C17.0049 4.89824 16.1095 4.00281 15.0049 4.00281Z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* card */}
                    {/* card */}
                    <div className='border-solid border-[1px] rounded-[15px] cursor-pointer flex flex-row justify-between p-[20px]'>
                        <div>
                            <p className='font-roboto text-[14px] dark:text-white cursor-pointer'>Total Products</p>
                            <h4 className='font-roboto font-bold dark:text-white text-[14px] cursor-pointer'>230</h4>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" width="20" height="20">
                                <path d="M15.0049 2.00281C17.214 2.00281 19.0049 3.79367 19.0049 6.00281C19.0049 6.73184 18.8098 7.41532 18.4691 8.00392L23.0049 8.00281V10.0028H21.0049V20.0028C21.0049 20.5551 20.5572 21.0028 20.0049 21.0028H4.00488C3.4526 21.0028 3.00488 20.5551 3.00488 20.0028V10.0028H1.00488V8.00281L5.54065 8.00392C5.19992 7.41532 5.00488 6.73184 5.00488 6.00281C5.00488 3.79367 6.79574 2.00281 9.00488 2.00281C10.2001 2.00281 11.2729 2.52702 12.0058 3.35807C12.7369 2.52702 13.8097 2.00281 15.0049 2.00281ZM11.0049 10.0028H5.00488V19.0028H11.0049V10.0028ZM19.0049 10.0028H13.0049V19.0028H19.0049V10.0028ZM9.00488 4.00281C7.90031 4.00281 7.00488 4.89824 7.00488 6.00281C7.00488 7.05717 7.82076 7.92097 8.85562 7.99732L9.00488 8.00281H11.0049V6.00281C11.0049 5.00116 10.2686 4.1715 9.30766 4.02558L9.15415 4.00829L9.00488 4.00281ZM15.0049 4.00281C13.9505 4.00281 13.0867 4.81869 13.0104 5.85355L13.0049 6.00281V8.00281H15.0049C16.0592 8.00281 16.923 7.18693 16.9994 6.15207L17.0049 6.00281C17.0049 4.89824 16.1095 4.00281 15.0049 4.00281Z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* card */}
                </div>
                <div className='mt-[20px] w-full'>
                    <div className='flex justify-end'>
                        <Button onClick={() => setOpen(true)} color="default" className='font-roboto' variant="filled">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" width="20" height="20">
                                <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                            </svg>
                            Add New Product
                        </Button>
                    </div>
                    <div className='border-solid mt-[10px] p-[10px] dark:bg-primary rounded-[15px] border-[1px]'>
                        <Table pagination={{ pageSize: 5 }}   dataSource={dataSource} columns={columns} />
                    </div>
                </div>
            </div>
        </div>

        {/* add product modal */}
        <Modal
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
            footer={null}
        >
            <div>
                <p className='font-roboto text-[14px] cursor-pointer'>Add Product</p>
                <h4 className='font-roboto font-bold text-[14px] cursor-pointer'>The details you put will update the product</h4>
            </div>
            <div className='mt-[15px] flex flex-row w-full border-t-[1px] border-solid p-[8px] space-x-[10px]'>
                <div className='bg-[#FAF9F8] p-[15px]'>
                    <img src="/movit.jpg" className='w-[200px] rounded-[15px]' alt="Movit" />
                    <Button color="danger" className='font-roboto w-full' variant="filled">
                        Select Image
                    </Button>
                </div>
                <div className='flex-1'>
                    <div>
                        <p className='font-roboto text-[14px] cursor-pointer'>Product Details</p>
                    </div>
                    <div className='mt-[10px] flex flex-col space-y-[6px]'>
                        <Input placeholder='Product Name' className='pl-[12px] font-roboto pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] w-full focus:border-[#000] hover:border-[#000] border-[#000]' />
                        <Input placeholder='Product Price' className='pl-[12px] font-roboto pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] w-full focus:border-[#000] hover:border-[#000] border-[#000]' />
                        <Input placeholder='Quantity In Stock' className='pl-[12px] font-roboto pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] w-full focus:border-[#000] hover:border-[#000] border-[#000]' />
                        <Button color="default" className='font-roboto' variant="solid">
                            Add Product
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
        {/* add product modal */}

    </>
  )
}

export default DashboardOverview
