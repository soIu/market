'use server'
import { models } from "orm";

export default async function ProductPopUpDetail (props) {
// 'use server';
const { id } = props
const products = await models.env['product.product'].browse(id);
  return(
    <div className="bg-[#ededed] w-screen h-screen flex flex-col gap-2 rounded-t-3xl">
      {products.map((product) => {
        if(product.id === id) {
          return(
            <>
              <div className="w-full h-full bg-white">
                <div className="p-[16px]">
                  <div className="w-[35px] h-[35px] bg-[#ededed] rounded-full flex items-center justify-center">
                    {/* <Button> */}
                      <img src={require('../img/BackDown.svg')} alt="" />
                    {/* </Button> */}
                  </div>
                </div>
              </div>
              <div className="bg-white w-full py-[8px] px-[16px] font-medium flex flex-col gap-[10px]">
                <div className="font-semibold text-3xl">
                  Rp {product.price}
                </div>               
                <div>
                    <div className="text-xl">
                      {product.name}
                    </div>
                    <div className="text-xl">
                      {product.size}
                    </div>
                </div>
              </div>
              <div className="bg-white w-full px-[16px] font-medium flex flex-col gap-[10px] py-[10px]">
                <div>
                  Detail Product
                </div>
                <div className="">
                  <div>
                    Merk : {product.brand}
                  </div>
                  <div>
                    Unit : {product.unit}
                  </div>
                  <div>
                    Exp : {product.expired}
                  </div>
                  <div>
                    Deskripsi : {product.description}
                  </div>
                </div>
              </div>
              <div className="bg-white w-full p-[28px]">
                <div className="pb-[20px] font-semibold">
                    Produk Lainnya
                </div>
                {/* <ProductCard /> */}
              </div>
            </>
          )
        }
      })}
    </div>
  )
}