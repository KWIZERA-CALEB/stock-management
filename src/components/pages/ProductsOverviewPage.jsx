import TopNavigation from "../molecules/Navigations/TopNavigation"
import { Input, Modal, Button, Spin, Empty, Typography } from "antd";
import { useState, useEffect } from 'react'
import { ReloadOutlined } from '@ant-design/icons';
import { getAllProducts, deleteProduct } from "../../services/productservice";


const ProductsOverviewPage = () => {
    const [open, setOpen] = useState(false);
    const [isFetchingProducts, setIsFetchingProducts] = useState(true)
    const [products, setProducts] = useState([])

    const [searchKeyword, setSearchKeyword] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);

    const fetchProducts = async() => {
        try {
            const response = await getAllProducts()
            setProducts(response.products || [])
            setIsFetchingProducts(false)
        } catch(error) {
            console.log(error)
            throw error
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const filteredProducts = (products || []).filter(product => {
        // Check product name matches the keyword
        const matchesName = product.productName
            .toLowerCase()
            .includes(searchKeyword.toLowerCase());
    
        // Check product price is within the range
        const matchesPrice = product.productPrice >= minPrice && product.productPrice <= maxPrice;
    
        // Both conditions must be true
        return matchesName && matchesPrice;
    });


    // useEffect(() => {
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const productId = urlParams.get("id");

    //     if (productId) {
    //         fetchProductDetails(productId);
    //     }
    // }, [open]);

    // const fetchProductDetails = async (id) => {
    //     try {
    //         const response = await getProductById(id);
    //         setSelectedProduct(response.product);
    //     } catch (error) {
    //         console.log("Error fetching product details:", error);
    //     }
    // };


    const handleDeleteProduct = async () => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const productId = urlParams.get("id");

            const response = await deleteProduct(productId)
            setOpen(false);
            fetchProducts()
        } catch(error) {
            console.log(error)
        }

        
    }

    const handleProductCardOnClick = (id) => {
        const newUrl = `${window.location.pathname}?id=${id}`;
        window.history.pushState({ path: newUrl }, "", newUrl);

        setOpen(true);
    }

    const resetUrl = () => {
        const newUrl = `${window.location.pathname}`;
        window.history.replaceState({ path: newUrl }, "", newUrl);
    };


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
                    <div className='flex justify-between items-center'>
                        <Input placeholder='Search Product' value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)} className='pl-[12px] font-roboto w-[400px] pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] focus:border-[#000] hover:border-[#000] border-[#000]' />
                        <div className='flex space-x-[20px]'>
                            <Input
                                placeholder='Min Price'
                                type='number'
                                value={minPrice}
                                onChange={(e) => setMinPrice(Number(e.target.value))}
                                className='pl-[12px] font-roboto w-[150px] pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] focus:border-[#000] hover:border-[#000] border-[#000]'
                            />
                            <Input
                                placeholder='Max Price'
                                type='number'
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className='pl-[12px] font-roboto w-[150px] pt-[6px] pb-[6px] rounded-[10px] border-solid border-[1px] focus:border-[#000] hover:border-[#000] border-[#000]'
                            />
                        </div>
                    </div>
                    {isFetchingProducts ? 
                        <div className='w-full h-[120px] flex justify-center items-center'>
                            <Spin indicator={<ReloadOutlined className='text-primary animate-spin' />} size="large" />
                        </div>
                        :
                        <div className='grid grid-cols-4 mt-[10px] gap-[4px]'>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product, index) => (
                                    <div key={product._id || index} onClick={() => handleProductCardOnClick(product._id)} className='border-solid border-[1px] rounded-[15px] cursor-pointer p-[20px]'>
                                        <div className='w-full flex justify-center'>
                                            <img src="/movit.jpg" className='w-[200px] rounded-[15px]' alt={product.productName} />
                                        </div>
                                        <div>
                                            <p className='font-roboto text-[14px] cursor-pointer'>{product.productName}</p>
                                            <h4 className='font-roboto font-bold text-[14px] cursor-pointer'>{product.productPrice} Rwf</h4>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className='w-full text-center text-gray-500 flex justify-center items-center h-[120px]'>
                                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}
                                        description={
                                            <Typography.Text>
                                              No Products
                                            </Typography.Text>
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    }
                </div>

            </div>
        </div>

        {/* manage product modal */}
        <Modal
            centered
            open={open}
            onOk={() => {
                setOpen(false);
                resetUrl();
            }}
            onCancel={() => {
                setOpen(false);
                resetUrl();
            }}
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
                            <Button color="danger" onClick={handleDeleteProduct} className='font-roboto' variant="filled">
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
