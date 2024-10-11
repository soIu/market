import { TouchableOpacity as Button } from "react-native"

export default function IconProduct (){
    return(
        <div className="flex gap-4 px-10 pt-7 pb-10 overflow-scroll">
            <Button className="flex flex-col items-center" delayPressIn={0}>
                <div className="bg-[#FABE78] w-[50px] h-[55px] rounded">
                    
                </div>
                <div className="text-[0.70rem] font-bold">
                    Sembako
                </div>
            </Button>
            <Button>
                <div className="flex flex-col items-center min-w-[64px]">
                    <div className="bg-[#FABE78] w-[50px] h-[55px] rounded">
                        
                    </div>
                    <div className="text-[0.70rem] font-bold">
                        Makanan
                    </div>
                </div>
            </Button>
            <Button>
                <div className="flex flex-col items-center min-w-[64px]">
                    <div className="bg-[#FABE78] w-[50px] h-[55px] rounded">
                        
                    </div>
                    <div className="text-[0.70rem] font-bold">
                        Minuman
                    </div>
                </div>
            </Button>
            <Button>
                <div className="flex flex-col items-center min-w-[64px]">
                    <div className="bg-[#FABE78] w-[50px] h-[55px] rounded">
                        
                    </div>
                    <div className="text-[0.70rem] font-bold">
                        Kebersihan
                    </div>
                </div>
            </Button>
            <Button>
                <div className="flex flex-col items-center min-w-[64px]">
                    <div className="bg-[#FABE78] w-[50px] h-[55px] rounded">
                        
                    </div>
                    <div className="text-[0.70rem] font-bold">
                        Kecantikan
                    </div>
                </div>
            </Button>
            <Button>
                <div className="flex flex-col items-center min-w-[64px]">
                    <div className="bg-[#FABE78] w-[50px] h-[55px] rounded">
                        
                    </div>
                    <div className="text-[0.70rem] font-bold">
                        Kesehatan
                    </div>
                </div>
            </Button>
        </div>
    )
}