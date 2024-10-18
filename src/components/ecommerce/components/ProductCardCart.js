'use server'
import { models } from 'orm'
import ButtonDelete from './ButtonDelete'
import ButtonCounter from './ButtonCounter'
import TotalPriceCart from './TotalPriceCart'
export default async function ProductCardCart (cart) {
  'use server'
  
  const ids = []
  const qty = []
  const price = [];
  cart.map((item) => {
    ids.push(item.id)
    qty.push(Number(item.quantity))
  })
  const products = await models.env['product.product'].browse(ids)
  {products.map((product) => {
    price.push(Number(product.price))
  })}
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <div className="flex justify-between items-center py-2.5 px-5 w-full gap-20">
            <div className='flex gap-2'>
              <div className="w-[100px] h-[100px] bg-[#ededed]"></div>
              <div className="flex flex-col justify-between font-extrabold">
                <div>
                  {product.name}
                </div>
                <div>
                  {product.price}
                </div>
                <ButtonCounter id={product.id} int={qty} />
              </div>
            </div>
            <ButtonDelete id={product.id} />
          </div>
          <div className='border-2'></div>
        </div>
      ))}
      <TotalPriceCart price={price}/>
    </>
  )
}