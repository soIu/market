'use client'
import HeaderProfile from "../components/HeaderProfile";
import React from "react";
import { TouchableOpacity as Button } from "react-native";
export default function ChangePin () {
    const [showPin, setShowPin] = React.useState(true)
    const [showPin2, setShowPin2] = React.useState(true)
    const [change, setChange] = React.useState(true)
    return(
        <>
            <HeaderProfile title="Ubah PIN" />
                {
                    change ? 
                    <div className="p-[20px]">
                    <Button onPress={() => setChange(false)}>
                        <div className="flex p-4 bg-[#d9d9d9] rounded-xl justify-between items-center">
                            <div className="flex gap-2">
                                <div>
                                    <img src={require('../img/PinCode.svg')} alt="" />
                                </div>
                                <div className="font-semibold">
                                    Ubah Pin anda
                                </div>
                            </div>
                            <div>
                                <img src={require('../img/Next.svg')} alt="" />
                            </div>
                        </div>
                    </Button>
                    </div>
                    :
                    <>
                        <div className="p-[20px]">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1 font-semibold">
                                    <div>
                                        Masukan Pin Baru Anda
                                    </div>
                                    <div className="bg-[#d9d9d9] p-4 rounded-xl w-full flex items-center justify-between">
                                        <input type={showPin ? 'password' : 'text'} className="bg-transparent w-full h-full outline-none" defaultValue={'249809'}/>
                                        {showPin ?
                                        <Button onPress={() => setShowPin(false)}>
                                            <div>
                                                <img src={require('../img/ClosePin.svg')} alt="" />
                                            </div>
                                        </Button>
                                        :
                                        <Button onPress={() => setShowPin(true)}>
                                            <div>
                                                <img src={require('../img/ShowPin.svg')} alt="" />
                                            </div>
                                        </Button>
                                        }
                                    </div>
                                </div>               
                                <div className="flex flex-col gap-1 font-semibold">
                                    <div>
                                        Masukan Pin Baru Anda
                                    </div>
                                    <div className="bg-[#d9d9d9] p-4 rounded-xl w-full flex items-center justify-between">
                                        <input type={showPin2 ? 'password' : 'text'} className="bg-transparent w-full h-full outline-none" defaultValue={'249809'}/>
                                        {showPin2 ?
                                        <Button onPress={() => setShowPin2(false)}>
                                            <div>
                                                <img src={require('../img/ClosePin.svg')} alt="" />
                                            </div>
                                        </Button>
                                        :
                                        <Button onPress={() => setShowPin2(true)}>
                                            <div>
                                                <img src={require('../img/ShowPin.svg')} alt="" />
                                            </div>
                                        </Button>
                                        }
                                    </div>
                                </div>               
                            </div>
                        </div>
                        <div className="fixed bottom-0 w-full">
                            <Button>
                                <div className="p-[20px]">
                                    <div className="w-full bg-[#ff6000] flex items-center justify-center h-[50px] font-bold text-xl text-white rounded-lg">
                                        Simpan Perubahan
                                    </div>
                                </div>
                            </Button>
                        </div>
                    </>
                }
        </>
    )
}