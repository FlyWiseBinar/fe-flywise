import Banner from '@/components/main-home/Banner'
import CardOrder from '@/components/main-home/CardOrder'

const MainHome = () => {
    return (
        <>
            <Banner />
            <div className="mt-[360px] absolute inset-0 z-30">
                <CardOrder />
            </div>
        </>
    )
}

export default MainHome