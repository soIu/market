'use client'
import { useDispatch, useSelector } from 'react-redux'
export default function TotalPriceCart (props) {
  const {price} = props
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart) 
  const ids = []
  const qty = []
  
  cart.map((item) => {
    ids.push(item.id)
    qty.push(Number(item.quantity))
  })
  let sum = 0;
  for(let i=0; i< qty.length; i++) {
    sum += qty[i]*price[i];
  }
  const shippingCost = sum / 20
  return (
    <>
      <div className="bg-[#ededed] flex flex-col gap-2 w-full pt-[10px] pb-[25px]">
        <div className="px-[20px] font-extrabold text-lg">Rincian Belanja</div>
        <div className="flex justify-between px-[20px] font-semibold">
          <div>Subtotal</div>
          <div>{sum || "-"}</div>
        </div>
        <div className="flex justify-between px-[20px] font-semibold">
          <div>Ongkos Kirim</div>
          <div>{shippingCost || "-"}</div>
        </div>
        <div className="px-[20px]">
          <hr className="border-black border-dashed"/>
        </div>
        <div className="flex justify-between px-[20px] font-black">
          <div>Total</div>
          <div>{sum + shippingCost || "-"}</div>
        </div>
      </div>
    </>
  )
}