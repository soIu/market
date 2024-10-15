export default function SkeletonPopUpDetail () {
  return(
    <div className="bg-[#ededed] w-screen h-screen flex flex-col gap-2 rounded-t-3xl">
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
          <div>
            <div className="w-36 h-7 bg-gray-400 animate-pulse rounded-xl"></div>
          </div>
          <div className='flex flex-col gap-2'>
              <div>
                <div className="w-40 h-5 bg-gray-400 animate-pulse rounded-xl"></div>
              </div>
              <div>
                <div className="w-10 h-5 bg-gray-400 animate-pulse rounded-xl"></div>
              </div>
          </div>
        </div>
        <div className="bg-white w-full px-[16px] font-medium flex flex-col gap-[10px] py-[10px]">
          <div>
            Detail Product
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <div className="w-10 h-3 bg-gray-400 rounded-lg animate-pulse"></div>
              <div className="w-20 h-3 bg-gray-400 rounded-lg animate-pulse"></div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-3 bg-gray-400 rounded-lg animate-pulse"></div>
              <div className="w-20 h-3 bg-gray-400 rounded-lg animate-pulse"></div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-3 bg-gray-400 rounded-lg animate-pulse"></div>
              <div className="w-20 h-3 bg-gray-400 rounded-lg animate-pulse"></div>
            </div>
            <div className="flex gap-3">
              <div className="w-[70px] h-3 bg-gray-400 rounded-lg animate-pulse"></div>
              <div className="w-20 h-3 bg-gray-400 rounded-lg animate-pulse"></div>
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
    </div>
  )
}