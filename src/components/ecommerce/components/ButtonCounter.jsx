'use client'
import Button from './Button'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { replaceFromCart } from '../../../redux/reducers/cart'
export default function ButtonCounter(props){
  const { id } = props
  const dispatch = useDispatch()
  // console.log(id)
  const cart = useSelector(state => state.cart.cart)
  console.log(cart)
  let item = cart.find(obj => obj.id === id);
  const [num, setNum] = React.useState(item && item.quantity)
  function sumMin(){
    if (num > 0) {
      setNum(num - 1)
      dispatch(replaceFromCart({
        id: id,
        quantity: num - 1
      }))
    }
  }
  function sumPlus() {
      setNum(num + 1)
      dispatch(replaceFromCart({
        id: id,
        quantity: num + 1
      }))
  }
  return(
      <div className="border-2 border-[#FF6000] flex items-center justify-center gap-10 w-[135px] h-[30px] rounded font-bold">
        <Button onPress={sumMin}>-</Button>
          <div>{num}</div>
        <Button onPress={sumPlus}>+</Button>
      </div>
  )
}