
import { TouchableOpacity as Button } from "react-native";
import { useNavigate } from "react-router-dom";

export default function Navbar (){
    const navigate = useNavigate();
    return(
        <div style={{position: 'fixed', left: 0, bottom: 0}} className="w-full">
            <div className="rounded-t-2xl p-4 border-2 bg-white w-full h-50 flex items-center justify-between gap-5">
                <Button onPress={() => navigate('/')}>
                    <img src={require('../img/HomeIcon.svg')} alt="" />
                </Button>
                <Button onPress={() => navigate('/product')}>
                    <img src={require('../img/FoodIcon.svg')} alt="" />
                </Button>
                <Button onPress={() => navigate('/listProduct')}>
                    <img src={require('../img/CategoriesIcon.svg')} alt="" />
                </Button>
                <Button onPress={() => navigate('/wishlist')}>
                    <img src={require('../img/WishlistIcon.svg')} alt="" />
                </Button>
                <Button onPress={() => navigate('/transaction')}>
                    <img src={require('../img/TransactionIcon.svg')} alt="" />
                </Button>
            </div>
        </div>
    )
}


// export default function Navbar (){
//     const navigate = useNavigate();
//     return(
//         <div style={{position: 'fixed', left: 0, bottom: 0, width: '100%', height: 75, background: 'white', borderTopLeftRadius: 10, borderTopLeftRadius: 10}}>
//             <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
//                 <Button style={{minWidth: 61, margin: 'auto'}} onPress={() => navigate('/')}>
//                     <img style={{'margin': 'auto'}} src={require('./img/HomeIcon.svg')} alt="" />
//                 </Button>
//                 <Button style={{minWidth: 61, margin: 'auto'}} onPress={() => navigate('/product')}>
//                     <img style={{'margin': 'auto'}} src={require('./img/FoodIcon.svg')} alt="" />
//                 </Button>
//                 <Button style={{minWidth: 61, margin: 'auto'}} onPress={() => navigate('/listProduct')}>
//                     <img style={{'margin': 'auto'}} src={require('./img/CategoriesIcon.svg')} alt="" />
//                 </Button>
//                 <Button style={{minWidth: 61, margin: 'auto'}}>
//                     <img style={{'margin': 'auto'}} src={require('./img/WishlistIcon.svg')} alt="" />
//                 </Button>
//                 <Button style={{minWidth: 61, margin: 'auto'}} onPress={() => navigate('/transaction')}>
//                     <img style={{'margin': 'auto'}} src={require('./img/TransactionIcon.svg')} alt="" />
//                 </Button>
//             </div>
//         </div>
//     )
// }