import { TouchableOpacity as Button } from "react-native";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
export default function Cart (){
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
        <div>
            <Header title="Keranjang" />
            <div className="p-[20px]">
                <div className="bg-[#fabe78] w-full gap-1 flex rounded-lg py-2 px-2">
                    <div className="p-1">
                        <img src={require('../img/InfoIcon.svg')} alt=""/>
                    </div>
                    <div className="font-bold">
                        Pastikan terlebih dahulu item pembelian anda sudah sesuai sebelum menekan tombol konfirmasi pembelian.
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[10px]">
                <div>
                    <div className=''>
                        <div className="flex justify-between items-center py-2.5 px-5 w-full gap-20">
                            <div className='flex gap-2'>
                                <div className="w-[100px] h-[100px] bg-[#ededed]"></div>
                                <div className="flex flex-col justify-between font-extrabold">
                                    <div>
                                        Product
                                    </div>
                                    <div>
                                        Product
                                    </div>
                                    <div className="border-2 border-[#FF6000] flex items-center justify-center gap-10 w-[135px] h-[30px] rounded font-bold">
                                        <Button onPress={sumMin}>-</Button>
                                        <div>{num}</div>
                                        <Button onPress={sumPlus}>+</Button>
                                    </div>
                                </div>
                            </div>
                            <Button>
                                <div className='bg-[#FF6000] w-[25px] h-[25px] flex justify-center items-center rounded'>
                                    <img src={require('../img/Trash.svg')} alt="" />
                                </div>
                            </Button>
                        </div>
                        <div className='border-2'></div>
                    </div>
                </div>
                <div className="bg-[#ededed] flex flex-col gap-2 w-full pt-[10px] pb-[25px]">
                    <div className="px-[20px] font-extrabold text-lg">Rincian Belanja</div>
                    <div className="flex justify-between px-[20px] font-semibold">
                        <div>Subtotal</div>
                        <div>Rp 17.000</div>
                    </div>
                    <div className="flex justify-between px-[20px] font-semibold">
                        <div>Ongkos Kirim</div>
                        <div>Rp 4.500</div>
                    </div>
                    <div className="px-[20px]">
                        <hr className="border-black border-dashed"/>
                    </div>
                    <div className="flex justify-between px-[20px] font-black">
                        <div>Total</div>
                        <div>Rp 21.500</div>
                    </div>
                </div>
                <div className="bg-[#ededed] flex justify-between items-center px-[20px] w-full h-[50px] font-bold">
                    <div>
                        Pilih Voucher
                    </div>
                    <Button>
                        <div>
                            <img src={require('../img/Next.svg')} alt="" />
                        </div>
                    </Button>
                </div>
                <div className="fixed bottom-0 w-full">
                    <Button>
                        <div className="p-[20px]">
                            <div className="w-full bg-[#ff6000] flex items-center justify-center h-[50px] font-bold text-xl text-white rounded-lg">
                                Konfirmasi Pembelian
                            </div>
                        </div>
                    </Button>
                </div>
            </div>
            <Loading />
        </div>
    )
}