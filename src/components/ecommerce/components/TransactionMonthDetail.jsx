'use client'
import Header from './Header'
export default function TransactionDayDetail () {
    return (
        <div>
            <Header title="Transaksi Bulanan" />
            <div className='flex justify-center py-10'>
                <img src={require('../img/Transaction.svg')} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
                <div className='w-full bg-[#ededed] h-[100px] flex items-center justify-between px-[20px]'>
                    <div className='flex items-center gap-5'>
                        <div className='border-2 w-[50px] h-[50px] border-[#ff6000] flex items-center justify-center rounded-full text-[#ff6000]'>75%</div>
                        <div>Total Transaksi</div>
                    </div>
                    <div>
                        Rp 750.000
                    </div>
                </div>
                <div className='w-full bg-[#ededed] h-[100px] flex items-center justify-between px-[20px]'>
                    <div className='flex items-center gap-5'>
                        <div className='border-2 w-[50px] h-[50px] border-[#fabe78] flex items-center justify-center rounded-full text-[#fabe78]'>25%</div>
                        <div>Sisa Kredit</div>
                    </div>
                    <div>
                        Rp 250.000
                    </div>
                </div>
            </div>
        </div>
    )
}