import { TouchableOpacity as Button } from "react-native";
import SearchInputHeader from "../components/SearchInputHeader";
import SlidersPage from "../components/SlidersPage";
export default function ProductPage (){
    return(
        <>
            <SearchInputHeader/>
            <SlidersPage/>
            {/* <div className="w-full h-[210px] bg-[#d9d9d9]">
            </div> */}
            <div className=''>
                <div className="flex justify-between items-center py-2.5 px-5 w-full gap-20">
                    <div className='flex gap-2'>
                        <div className="w-[100px] h-[100px] bg-[#d9d9d9]"></div>
                        <div className="flex flex-col gap-2 font-bold py-2">
                            <div>
                                Product
                            </div>
                            <div>
                                Product
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#FF6000] w-[25px] h-[25px] flex justify-center items-center rounded'>
                        <img src={require('../img/Plus.svg')} alt="" />
                    </div>
                </div>
                <div className='border-2'></div>
            </div>
            <div className='fixed bottom-3 right-3'>
                <Button>
                    <div className='bg-black w-[130px] h-[40px] flex justify-center items-center rounded-lg'>
                        <div className='p-2'>
                            <img src={require('../img/FoodIconWhite.svg')} alt="" />
                        </div>
                        <div className='text-white'>
                            Rp 32.000
                        </div>
                    </div>
                </Button>
            </div>
        </>
    )
}