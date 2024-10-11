import { TouchableOpacity as Button } from "react-native";
export default function ProductCard () {
    return (
        <div className="bg-white w-[150px] h-[285px] rounded-lg p-2 relative border">
        <div className="w-[135px] h-[135px] bg-[#c4c4c4]"></div>
        <div className="flex flex-col gap-3 py-2">
          <div className="font-bold">Nama Produk</div>
          <div className="flex flex-col gap-2">
            <div className="font-thin">Nama Produk</div>
            <div className="font-bold">Nama Produk</div>
          </div>
        </div>
        <Button>
         <div className="border-2 absolute -top-2 right-0 border-[#FF6000] rounded-md w-8 h-8 flex items-center justify-center">
            <img src={require('../img/Plus.svg')} alt="" />
          </div>
        </Button>
      </div>
    )
}