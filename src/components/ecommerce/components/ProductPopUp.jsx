'use client'
import { TouchableOpacity as Button } from "react-native";
import React from "react";
import { Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import SkeletonPopUpDetail from "./SkeletonPopUpDetail";
import ProductPopUpDetail from "./ProductPopUpDetail";
// import PopUpWishlist from "./PopUpWishlist";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../../redux/reducers/wishlist";
//import { useCache } from '../../../utils';
import Heart from '../figma/Heart';
import elementToHTML from 'react-element-to-jsx-string';

const { useCache } = (await import('../../../utils')).default;

export default function ProductPopUp(){
  const [fill, setFill] = React.useState(null);
  const dispatch = useDispatch()
  const [productId, setProductId] = React.useState('')
  const wishlist = useSelector(state => state.wishlist.wishlist)
  // console.log(wishlist)
  const { id } = useParams();
  const navigate = useNavigate()
  const [num, setNum] = React.useState(0)
  console.log(id)
  console.log({id})
  function sumMin(){
    if (num > 0) {
        setNum(num - 1)
    }
  }
  function sumPlus() {
    setNum(num + 1)
  }
  React.useEffect(() => {
    wishlist.map((item) => {
      console.log(item)
      if (item === id) {
        setFill('red')
        setProductId(id)
      }
    })  
  }, [fill])
  console.log(wishlist)
  function AddToWishlist(){
    setFill(!fill ? 'red' : null);
    console.log(wishlist)
    if (productId) {
      dispatch(removeFromWishlist(id))
      setProductId('')
      console.log("hi")
    } else {
      dispatch(addToWishlist(id))
    }
  }
  return(
    <div className="pt-16 bg-transparent">
      <Suspense fallback={<SkeletonPopUpDetail />}>
        {useCache(() => ProductPopUpDetail({id}))}
      </Suspense>
      <div className="w-full h-[90px] bg-[white]"></div>
      <div className="w-full h-[85px] bg-white fixed bottom-0 rounded-t-3xl shadow-2xl shadow-black">
        <div className="pb-[32px] pt-[10px] px-[16px] flex items-center justify-between">
          <div className="flex items-center justify-center gap-4">
            <Button onPress={AddToWishlist}>
              <div className="w-10 h-10">
                <img alt="" className="h-full w-full object-cover"
                  src={useCache(() => URL.createObjectURL(new Blob([elementToHTML(Heart({fill}))], {type: 'image/svg+xml;charset=utf-8'})), [fill])}
                />    
              </div>  
            </Button>
            <Button onPress={() => navigate('/cart')}>
                <div className="w-10 h-10">
                    <img src={require('../img/Keranjang.svg')} alt="" className="h-full w-full object-cover" />    
                </div>  
            </Button>
          </div>
          <div className="border-2 border-[#FF6000] flex items-center justify-center gap-10 w-[158px] h-[40px] rounded"> 
            <Button onPress={sumMin}>-</Button>
            <div>{num}</div>
            <Button onPress={sumPlus}>+</Button>
          </div>
        </div>
      </div>
      {/* <PopUpWishlist /> */}
    </div>
  )
}