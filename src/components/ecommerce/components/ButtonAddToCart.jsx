'use client'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../redux/reducers/cart'
export default function ButtonAddToCart (props) {
  const { id } = props
  const cart = useSelector(state => state.cart.cart)
  console.log(cart)
  const dispatch = useDispatch()
  function AddToCart() {
    dispatch(addToCart({
      id: id,
      quantity: 1
    }))
  }
  return (
    <Button onPress={AddToCart}>
      <div className="border-2 border-[#FF6000] rounded-md w-8 h-8 flex items-center justify-center">
        <img src={require('../img/Plus.svg')} alt="" />
      </div>
    </Button>
  )
}