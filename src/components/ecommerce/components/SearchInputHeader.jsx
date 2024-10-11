'use client';
import { TouchableOpacity as Button } from "react-native";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

export default function SearchInputHeader(){
    const navigate = useNavigate();
    return(
        <>
            <div className="bg-[#FF6000] w-full h-[106px]">
                <div className="flex items-center justify-between pt-14 pb-[2 0px] px-[20px]">
                    <Button onPress={() => navigate('/')}>
                        <img src={require('../img/Back.svg')} alt="" />
                    </Button>
                    <SearchInput />
                    <Button onPress={() => navigate('/cart')}>
                        <div>
                            <img src={require('../img/Keranjang.svg')} alt="" />
                        </div>
                    </Button>
                </div>
            </div>
        </>
    )
}