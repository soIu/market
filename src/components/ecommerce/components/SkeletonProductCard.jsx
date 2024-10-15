export default function SkeletonProductCard () {
  const product = [{}, {}, {}, {}]
  return (
    <div className="flex justify-center w-screen items-center">
      <div className="grid grid-cols-2 gap-10">
        {product.map(() => (
          <div className="flex flex-col items-center">
            <div className="bg-white w-[150px] h-[285px] rounded-lg p-2 relative border animate-pulse">
              <div className="w-[135px] h-[135px] bg-[#c4c4c4]/50"></div>
              <div className="flex flex-col gap-4 py-2">
                <div className="w-14 h-3 bg-black/40 rounded-lg"></div>
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-2.5 bg-gray-300 rounded-lg"></div>
                  <div className="w-20 h-4 bg-black/40 rounded-lg"></div>
                </div>
              </div>
                <div className=" absolute bottom-2 right-2">
                  
                  <div className="border-2 border-[#FF6000]/60 rounded-md w-8 h-8 flex items-center justify-center">
                    <img src={require('../img/Plus.svg')} alt="" />
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}