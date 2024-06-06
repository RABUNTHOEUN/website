import Image from 'next/image';
import MainComponent from './MainComponent';

export const metadata = {
    title: "STORES",
};
export default function Stores() {
    const products = [
        {name: 'Mac', imagePath: '/images/store-card-13-mac-nav-202310.png'},
        {name: 'iPhone', imagePath: '/images/store-card-13-iphone-nav-202309_GEO_US .png'},
        {name: 'iPad', imagePath: '/images/store-card-13-ipad-nav-202210.png'},
        {name: 'Apple Watch', imagePath: '/images/store-card-13-watch-nav-202309.png'},
        {name: 'Apple Vision Pro', imagePath: '/images/store-card-13-vision-pro-nav-202401.png'},
        {name: 'AirPods', imagePath: '/images/store-card-13-airpods-nav-202209.png'},
        {name: 'AirTag', imagePath: '/images/store-card-13-airtags-nav-202108.png'},
        {name: 'Apple TV 4K', imagePath: '/images/store-card-13-appletv-nav-202210.png'},
        {name: 'HomePod', imagePath: '/images/store-card-13-homepod-nav-202301.png'},
        {name: 'Accessories', imagePath: '/images/store-card-13-accessories-nav-202403.png'},
        {name: 'Apple Gift Card', imagePath: '/images/store-card-13-holiday-giftcards-asit-agc-nav-202111.png'},
    ];


    return (
        <>
            <div className="bg-white-200 ">
                <div className="flex justify-center"
                     style={{backgroundColor: 'lightblue', color: 'black', padding: '20px'}}>
                    <div className="items-center">
                        <h1>Get $180–$630 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or
                            higher.3 Shop iPhone</h1>
                    </div>
                </div>
                <div className="flex-col justify-around"
                     style={{backgroundColor: 'lightgray', color: 'black', padding: '10px'}}>
                    <div className=" justify-around flex mb-12 mt-12">
                        <div className="text-2xl text-black max-w-sm">
                            Store. <span className=" text-gray-500">The best way to buy the products you love.</span>
                        </div>
                        <div>
                            <div className="items-center flex">
                                <Image
                                    className="rounded-circle m-2"
                                    src="/images/img.png"
                                    alt="My Image"
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <p>Need shopping help? </p>
                                    <a className="text-blue-500 underline text-sm" href="#">Ask a Specialist </a>
                                </div>
                            </div>
                            <div className="flex">
                                <Image
                                    className="rounded-circle m-2"
                                    src="/images/img.png"
                                    alt="My Image"
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <p>Visit an Apple Store</p>
                                    <a className="text-blue-500 underline text-sm" href="#">Find one near you </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 mb-12">
                        <MainComponent products={products}/>
                    </div>
                    <div className="text-2xl text-black">
                        The latest. <span className="text-gray-500">Take a look at what’s new, right now.</span>
                    </div>
                </div>

            </div>
        </>
    );
}
