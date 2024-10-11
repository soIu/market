'use client';
import { Suspense } from 'react';
import { TouchableOpacity as Button } from "react-native";
import SlidersPage from "../components/SlidersPage";
import SearchInput from "../components/SearchInput";
import IconProduct from "../components/IconProduct";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Home (){
  const navigate = useNavigate();
  return(
    <div className="h-max overflow-x-hidden">
      <div className="bg-[#FF6000] w-screen h-[106px]">
        <div className="flex flex-row items-center justify-between pt-14 pb-4 px-3">
          <div className="w-[188px] h-[32px]">
            <img src={require('../img/Locate.svg')}/>
          </div>
          <div className="flex flex-row items-center justify-center gap-2.5">
            <div className="w-8 h-8 bg-white rounded-full">
              <Button onPress={() => navigate('/cart')}>
                <img src={require('../img/Keranjang.svg')} alt="" className="object-xcover w-full h-full" />
              </Button>
            </div>
            <div className="w-8 h-8 bg-white rounded-full">
              <Button>
                <img src={require('../img/Notifikasi.svg')} alt="" className="object-cover w-full h-full" />
              </Button>
            </div>
            <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
              <Button onPress={() => navigate('/profile')}>
                <img src={require('../img/Profil.svg')} alt="" className="object-center w-full h-full" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <SlidersPage />
      <SearchInput style={{marginTop: -18}} onFocus={() => navigate('/search')}/>
      {/*<Suspense>
        {IconProduct()}
      </Suspense>*/}
      <div className="bg-[#9AC6C5] w-full h-[350px] flex items-center justify-evenly">
        <div>
          <div>
            <img src={require('../img/HomeText.svg')} alt="" />
          </div>
        </div>
        <div className="">
          <div className="bg-white w-[150px] h-[285px] rounded-lg p-2 relative">
            <div className="w-[135px] h-[135px] bg-[#c4c4c4]"></div>
            <div className="flex flex-col gap-3 py-2">
              <div className="font-bold">Nama Produk</div>
              <div className="flex flex-col gap-2">
                <div className="font-thin">Nama Produk</div>
                <div className="font-bold">Nama Produk</div>
              </div>
            </div>
            <Button>
             <div className="border-2 absolute -top-2 right-0 border-[#FF6000] rounded-md w-8 h-8 flex items-center justify-center">
                <img src={require('../img/Plus.svg')} alt="" />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="pl-[15px] py-[20px] font-bold">
        Promo
      </div>
      <div className="w-[150px] pl-[30px]">
        <div className="w-[150px] h-[150px] bg-[#c4c4c4]"></div>
        <div className="flex flex-col gap-[50px]">
          <div>Nama Produk</div>
          <div>Nama Produk</div>
        </div>
        <Button>
          <div className="border-2 border-[#FF6000] rounded-md text-[#FF6000] flex items-center justify-center">+Keranjang</div>
        </Button>
      </div>
      <div className="w-full h-[90px]"></div>
      <Navbar />
    </div>
  )
}   