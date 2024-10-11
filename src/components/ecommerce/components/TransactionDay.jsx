'use client'
import React from "react"

export default function TransactionDay () {
    return (
        <>  
            <div className="p-[20px]">
                <div className="w-full flex flex-col justify-between gap-3 p-5 bg-[#ededed]">               
                        <div className="font-bold">
                            15 Agustus 2024
                        </div>
                        <div className="flex justify-between">
                            <div className="font-bold text-xl">Transaksi-M0001</div>
                            <div className="font-bold text-xl">Rp 350.000</div>
                        </div>
                </div>
            </div>
        </>
    )
}