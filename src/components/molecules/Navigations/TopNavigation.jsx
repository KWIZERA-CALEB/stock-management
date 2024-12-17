import { Button, Dropdown } from "antd";
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from "../../contexts/authContext";
import { useTheme } from "../../contexts/themeContext";



const TopNavigation = () => {
    const currentPath = useLocation()
    const { logout, user } = useAuth()
    const { theme, changeTheme } = useTheme()

    const items = [
        {
          label: (
            <div onClick={() => changeTheme('light')}>
                <div>Light Theme</div>
            </div>
          ),
          key: '0',
        },
        {
          label: (
            <div onClick={() => changeTheme('dark')}>
                <div>Dark Theme</div>
            </div>
          ),
          key: '1',
        },
        {
          label: (
            <div onClick={() => changeTheme('system')}>
                <div>System</div>
            </div>
          ),
          key: '2',
        },
    ];
  return (
        <div className='w-full h-[60px] border-b-[2px] border-solid bg-white dark:bg-primary p-[6px] flex flex-row justify-between items-center'>
            <div className='flex flex-row space-x-[30px] items-center'>
                <div>
                    <Button color="default" className='font-roboto' variant="dashed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" width="20" height="20">
                            <path d="M21 13.2422V20H22V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422ZM19 13.9725C18.8358 13.9907 18.669 14 18.5 14C17.2409 14 16.0789 13.478 15.25 12.6132C14.4211 13.478 13.2591 14 12 14C10.7409 14 9.5789 13.478 8.75 12.6132C7.9211 13.478 6.75911 14 5.5 14C5.331 14 5.16417 13.9907 5 13.9725V20H19V13.9725ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z"></path>
                        </svg>
                        Stock Management
                    </Button>
                </div>
                <div>
                    <ul className='flex flex-row items-center space-x-[20px]'>
                        <li className={currentPath.pathname === '/' ? `font-roboto text-[14px] font-bold dark:text-white cursor-pointer` : `font-roboto text-[14px] dark:text-white cursor-pointer`}><Link to='/'>Dashboard</Link></li>
                        <li className={currentPath.pathname === '/products' ? `font-roboto text-[14px] font-bold dark:text-white cursor-pointer` : `font-roboto text-[14px] dark:text-white cursor-pointer`}><Link to='/products'>Products</Link></li>
                        <li className={currentPath.pathname === '/register' ? `font-roboto text-[14px] font-bold dark:text-white cursor-pointer` : `font-roboto text-[14px] dark:text-white cursor-pointer`}><Link to='/register'>Add New Manager</Link></li>
                        <li onClick={logout} className='font-roboto text-[14px] text-red-500 cursor-pointer'>Logout</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-row items-center space-x-[20px]'>
                <Dropdown menu={{ items }} placement="bottomRight">
                    <Button onClick={(e) => e.preventDefault()} className='font-roboto capitalize dark:bg-white dark:text-primary bg-[#0000000f]' variant="filled">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" width="20" height="20">
                            <path d="M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z"></path>
                        </svg>
                        {theme}
                    </Button>
                </Dropdown>

                <div className='flex flex-row space-x-[6px] items-center'>
                    <div className='font-roboto text-[14px] p-[3px] text-white dark:bg-white dark:text-primary bg-primary flex justify-center items-center w-[30px] h-[30px] rounded-full cursor-pointer uppercase'>{user.slice(0,2)}</div>
                    <div>
                        <p className='font-roboto text-[14px] dark:text-white text-primary cursor-pointer'>{user}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TopNavigation
