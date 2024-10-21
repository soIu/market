import { TouchableOpacity as Button } from "react-native";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { Suspense } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import ProductCardCart from "../components/ProductCardCart";

const { useCache } = (await import('../../../utils')).default;

export default function Cart (){
  const loading = useSelector((state) => state.loading.loading)
  // const dispatch = useDispatch()
  //const cart = useStore().getState().cart.cart;
  const cart = useSelector(state => state.cart.cart)
  //const cart = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).cart)).cart;
  // console.log(cart)
  // console.log(ids)
  return(
    <>
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
				<div className="flex flex-col gap-[10px] overflow-scroll">
				  <Suspense fallback={<Loading force/>}>
						{useCache(() => ProductCardCart(cart), [cart.length])}
					</Suspense>
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
					<div className="w-full h-[85px] bg-white"></div>
					<div className="fixed bottom-0 w-full">
						<div className="p-[20px]">
							<Button>
								<div className="w-full bg-[#ff6000] flex items-center justify-center h-[50px] font-bold text-xl text-white rounded-lg">
									Konfirmasi Pembelian
								</div>
							</Button>
						</div>
					</div>
				</div>
    </>
  )
}