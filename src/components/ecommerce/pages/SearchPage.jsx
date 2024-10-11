import SearchInputHeader from "../components/SearchInputHeader";
import { TouchableOpacity as Button } from "react-native";

export default function SearchPage (){
    return(
        <>
            <SearchInputHeader/>
            <div className="flex items-center justify-between px-4 py-6">
                <div className="flex items-center gap-6">
                    <Button>
                        <img src={require('../img/History.svg')} alt="" />
                    </Button>
                    <div className="font-bold">
                        Indomie Soto
                    </div>
                </div>
                <Button>
                    <img src={require('../img/XClose.svg')} alt="" />
                </Button>
            </div>
        </>
    )
}