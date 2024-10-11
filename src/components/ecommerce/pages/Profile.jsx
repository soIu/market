import Header from "../components/Header";
import { TouchableOpacity as Button } from "react-native";
import { useNavigate } from "react-router-dom";
import React from "react";
import PopupLogout from "../components/PopupLogout";
export default function Profile (){
    const [showPopup, setShowPopup] = React.useState(false)
    const navigate = useNavigate()  
    return (
        <>
            <Header title="" />
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row-reverse px-20">
                <Button>
                    <div className="bg-[#ededed] w-[25px] h-[25px] rounded-full flex items-center justify-center">
                        <img src={require('../img/Edit.svg')} alt="" />
                    </div>
                </Button>
                    <div className="bg-[#ededed] w-[100px] h-[100px] rounded-full"></div>
                </div>
                <div className="font-semibold">
                    Bagus Sucipto
                </div>
            </div>
            <div className="px-[20px] flex flex-col gap-6">
                <div className="bg-[#e1964b] flex justify-between p-4 rounded-xl">
                    <div className="font-semibold">
                        Plafon Amount
                    </div>
                    <div className="font-extrabold">
                        IDR 2,000,000
                    </div>
                </div>
                <div className="flex flex-col gap-5 p-4 border-2 rounded-xl shadow-lg">
                    <div>
                        <div className="font-semibold">
                            Billing Information
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <div>
                                Due Date
                            </div>
                            <div>
                                28 Agustus 2024
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                Payment Amount
                            </div>
                            <div>
                                IDR 500,000
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <Button onPress={() => navigate('/detailProfile')}>
                        <div className="flex gap-4 p-4 bg-[#d9d9d9] rounded-xl">
                            <div>
                                <img src={require('../img/Profile.svg')} alt="" />
                            </div>
                            <div className="font-semibold">
                                Detail Akun
                            </div>
                        </div>
                    </Button>
                    <Button onPress={() => navigate('/changePin')}>
                        <div className="flex gap-4 p-4 bg-[#d9d9d9] rounded-xl">
                            <div>
                                <img src={require('../img/PinCode.svg')} alt="" />
                            </div>
                            <div className="font-semibold">
                                Ubah Pin
                            </div>
                        </div>
                    </Button>
                    <Button>
                        <div className="flex gap-4 p-4 bg-[#d9d9d9] rounded-xl">
                            <div>
                                <img src={require('../img/PrivacyPolicy.svg')} alt="" />
                            </div>
                            <div className="font-semibold">
                                Privacy & Policy
                            </div>
                        </div>
                    </Button>
                    <Button onPress={() => setShowPopup(true)}>
                        <div className="flex gap-4 p-4 bg-[#d9d9d9] rounded-xl">
                            <div>
                                <img src={require('../img/Logout.svg')} alt="" />
                            </div>
                            <div className="font-semibold">
                                Keluar
                            </div>
                        </div>
                    </Button>
                </div>
            </div>
            <PopupLogout show={showPopup} setShow={setShowPopup}/>
        </>
    )
}