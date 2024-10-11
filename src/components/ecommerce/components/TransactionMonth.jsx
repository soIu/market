'use client'
import { TouchableOpacity as Button } from 'react-native'
export default function Transaction() {
    return (
        <>  
            <div className="p-[20px]">
                <div className="w-full flex flex-row gap-5 p-5 bg-[#ededed]">               
                    <div>
                        <img src={require('../img/Transaction.svg')} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className='font-bold'>Transaksi</div>
                        <div className='font-bold text-lg'>Rp 1.000.000</div>
                        <div className='font-light'>1 Agustus - 31 Agustus</div>
                    </div>
                </div>
            </div>
        </>
    )
}  