import IconProduct from "../components/IconProduct";
import ProductCard from "../components/ProductCard";
import SearchInputHeader from "../components/SearchInputHeader";
import { TouchableOpacity as Button } from "react-native";

export default function ProductPageList (){
    return(
        <>
            <SearchInputHeader />
            <IconProduct />
            <div>
                <div className="w-full h-[2px] my-5 bg-slate-600"></div>
                <div className="flex items-center w-full">
                    <div className="px-[20px]">Sub Kategori</div>
                    <div className="flex gap-5 items-center justify-between overflow-scroll">
                        <div className="border-2 rounded-full flex">
                            <div className="m-2">
                                Semua Makanan
                            </div>
                        </div>
                        <div className="border-2 rounded-full flex">
                            <div className="m-2">
                                Snack
                            </div>
                        </div>
                        <div className="border-2 rounded-full flex">
                            <div className="m-2">
                                Makanan
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[2px] my-5 bg-slate-600"></div>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-10">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </>
    )
}