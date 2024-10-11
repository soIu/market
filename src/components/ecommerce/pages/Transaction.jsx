'use client'
import { TouchableOpacity as Button } from "react-native"
import TransactionDay from "../components/TransactionDay"
import TransactionMonth from "../components/TransactionMonth"
import Header from "../components/Header"
import React from "react"

export default function Transaction() {
    const [transaction, setTransaction] = React.useState("Day")
    return (
        <>  
            <Header title="Transaksi" />
            <div className="flex gap-[10px] justify-center">
                {
                    transaction === "Day" ? (
                        <Button>
                            <div className="w-[170px] h-[40px] bg-[#fabe78] flex items-center justify-center rounded-xl text-xl font-bold">Harian</div>
                        </Button>
                    ) : (
                        <Button onPress={() => setTransaction("Day")}>
                            <div className="w-[170px] h-[40px] bg-[#ededed] flex items-center justify-center rounded-xl text-xl font-bold">Harian</div>
                        </Button>
                    )
                }
                 {
                    transaction === "Month" ? (
                        <Button>
                            <div className="w-[170px] h-[40px] bg-[#fabe78] flex items-center justify-center rounded-xl text-xl font-bold">Bulanan</div>
                        </Button>
                    ) : (
                        <Button onPress={() => setTransaction("Month")}>
                            <div className="w-[170px] h-[40px] bg-[#ededed] flex items-center justify-center rounded-xl text-xl font-bold">Bulanan</div>
                        </Button>
                    )
                }
            </div>
            {transaction === "Day" ? 
            <TransactionDay />
            :  
            <TransactionMonth />
            }
        </>
    )
}