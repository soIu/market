import HeaderProfile from "../components/HeaderProfile";
import { TouchableOpacity as Button } from "react-native";

export default function DetailProfile() {
    return (
        <>
            <HeaderProfile title="Detail Akun" />
            <div className="p-[20px] flex flex-col gap-2">
                <div className="flex flex-col gap-1 font-semibold">
                    <div>
                        Nama
                    </div>
                    <input type="text" defaultValue={'Bagus Sucipto'} className="bg-[#d9d9d9] p-4 rounded-xl w-full"/>
                </div>
                <div className="flex flex-col gap-1 font-semibold">
                    <div>
                        No. Handphone
                    </div>
                    <input type="text" defaultValue={'081342354289'} className="bg-[#d9d9d9] p-4 rounded-xl w-full"/>
                </div>
                <div className="flex flex-col gap-1 font-semibold">
                    <div>
                        Kode Pelanggan
                    </div>
                    <input type="text" defaultValue={'STKA154110001'} className="bg-[#d9d9d9] p-4 rounded-xl w-full"/>
                </div>
                <div className="flex flex-col gap-1 font-semibold">
                    <div>
                        Nama Perusahaan
                    </div>
                    <input type="text" defaultValue={''} className="bg-[#d9d9d9] p-4 rounded-xl w-full"/>
                </div>
                <div className="flex flex-col gap-1 font-semibold">
                    <div>
                        Kode Referral Perusahaan
                    </div>
                    <input type="text" defaultValue={''} className="bg-[#d9d9d9] p-4 rounded-xl w-full"/>
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
    )
}