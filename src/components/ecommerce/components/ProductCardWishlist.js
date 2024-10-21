'use server'
import { models } from "orm"
import Button from "./Button"
import ProductButton from "./ProductButton"
export default async function ProductCardWishlist (ids) {
  const products = await models.env['product.product'].browse(ids)
  return (
    <>
    {products.map((product) => {
      return(
        <ProductButton 
        id={product.id}
        >
          <div key={product.id} className="bg-white w-[150px] h-[285px] rounded-lg p-2 relative border">
          <div className="w-[135px] h-[135px] bg-[#c4c4c4]"></div>
          <div className="flex flex-col gap-3 py-2">
            <div className="font-bold text-xs">{product.name}</div>
            <div className="flex flex-col gap-2">
              <div className="font-thin text-xs">{product.size}</div>
              <div className="font-bold text-xs">Rp {product.price.toLocaleString('id-ID')}</div>
            </div>
          </div>
            <div className=" absolute bottom-2 right-2">
              <Button>
              <div className="border-2 border-[#FF6000] rounded-md w-8 h-8 flex items-center justify-center">
                <img src={require('../img/Plus.svg')} alt="" />
              </div>
              </Button>
            </div>
          </div>
        </ProductButton>
      )
    })}
    </>
  )
}