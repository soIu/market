'use client'
import Header from './Header'
export default function TransactionDayDetail () {
    return (
        <div>
            <Header title="Transaksi Harian" />
            <div className='flex flex-col justify-center px-[20px]'>
                <div className='flex justify-between'>
                    <div>Status</div>
                    <div>Kamis, 15 Agu 2024</div>
                </div>
                <div className='flex justify-between'>
                    <div className='bg-[#fabe78] p-1 px-2 rounded-full'>Sukses</div>
                    <div>Order Transaksi-M001</div>
                </div>
            </div>
            <div className='px-[20px]'>
                <div>
                    INVOICE
                </div>
                <div className='w-full'>
                    <img src={require('../img/Invoice.svg')} className="w-full h-full" />
                </div> 
            </div>
        </div>
    )
}