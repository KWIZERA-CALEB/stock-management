import FullPageLoader from "../atoms/Loaders/FullPageLoader"
import TopNavigation from "../molecules/Navigations/TopNavigation"
import DashboardOverview from "../molecules/DashboardOverview"

const DashboardPage = () => {
  return (
    <>
        <FullPageLoader />
        <div className='w-full bg-white dark:bg-primary'>
            <TopNavigation />
            <div className='p-[20px] w-full'>
                <DashboardOverview />
            </div>
        </div>
    </>
  )
}

export default DashboardPage
