'use client'
import { TouchableOpacity as Button } from "react-native";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
export default function ProductPopUp(){
    const navigate = useNavigate()
    const [num, setNum] = React.useState(0)
    function sumMin(){
        if (num > 0) {
            setNum(num - 1)
        }
    }
    function sumPlus() {
        setNum(num + 1)
    }
    return(
        <div className="pt-16 bg-transparent">
            <div className="bg-[#ededed] w-screen h-screen flex flex-col gap-2 rounded-t-3xl">
                <div className="w-full h-full bg-white">
                    <div className="p-[16px]">
                        <div className="w-[35px] h-[35px] bg-[#ededed] rounded-full flex items-center justify-center">
                            <Button>
                                <img src={require('../img/BackDown.svg')} alt="" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full py-[8px] px-[16px] font-medium flex flex-col gap-[10px]">
                    <div className="font-semibold text-3xl">
                        Harga Product
                    </div>
                    <div>
                        <div className="text-xl">
                            Nama Product
                        </div>
                        <div className="text-xl">
                            Berat Product
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full px-[16px] font-medium flex flex-col gap-[10px] py-[10px]">
                    <div>
                        Detail Product
                    </div>
                    <div className="">
                        <div>
                            Merk : Ultrajaya
                        </div>
                        <div>
                            Unit : 1 Kotak
                        </div>
                        <div>
                            Exp : 5 November 2027
                        </div>
                        <div>
                            Deskripsi : -
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full p-[28px]">
                    <div className="pb-[20px] font-semibold">
                        Produk Lainnya
                    </div>
                    <ProductCard />
                </div>
            </div>
            <div className="w-full h-[90px] bg-[white]"></div>
            <div className="w-full h-[85px] bg-white fixed bottom-0 rounded-t-3xl shadow-2xl shadow-black">
                <div className="pb-[32px] pt-[10px] px-[16px] flex items-center justify-between">
                    <div className="flex items-center justify-center gap-4">
                        <Button>
                            <div className="w-10 h-10">
                                <img src={require('../img/Heart.svg')} alt="" className="h-full w-full object-cover" />    
                            </div>  
                        </Button>
                        <Button onPress={() => navigate('/cart')}>
                            <div className="w-10 h-10">
                                <img src={require('../img/Keranjang.svg')} alt="" className="h-full w-full object-cover" />    
                            </div>  
                        </Button>
                    </div>
                    <div className="border-2 border-[#FF6000] flex items-center justify-center gap-10 w-[158px] h-[40px] rounded">
                        <Button onPress={sumMin}>-</Button>
                        <div>{num}</div>
                        <Button onPress={sumPlus}>+</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}