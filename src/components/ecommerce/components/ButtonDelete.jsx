'use client'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../redux/reducers/cart'

export default function ButtonDelete (props) {
  const { id } = props
  const dispatch = useDispatch()
  function RemoveFromCart() {
    dispatch(removeFromCart(id))
  }
  return (
      <Button onPress={RemoveFromCart}>
        <div className='bg-[#FF6000] w-[25px] h-[25px] flex justify-center items-center rounded'>
          <img src={require('../img/Trash.svg')} alt="" />
        </div>
      </Button> 
  )
}