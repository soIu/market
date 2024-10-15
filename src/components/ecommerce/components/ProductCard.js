'use server'
// import { TouchableOpacity as Button } from "react-native";
import Button from "./Button";
import ProductButton from "./ProductButton";
import { models } from "orm";
export default async function ProductCard () {
  'use server';
  const products = await models.env['product.product'].search([])
    return (
      <>
        {products.map((product) => {
          // console.log(product.id)
          return(
            <ProductButton 
            id={product.id}
            >
              <div className="bg-white w-[150px] h-[285px] rounded-lg p-2 relative border">
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