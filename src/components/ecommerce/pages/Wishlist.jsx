import { TouchableOpacity as Button } from 'react-native'
import ProductCard from '../components/ProductCard'
import { useNavigate } from 'react-router-dom'
export default function Wishlist() {
    const navigate = useNavigate()
    return(
        <>
            <div className='flex items-center justify-between pt-14 p-[20px]'>
                <Button onPress={() => navigate('/') }>
                    <div>
                        <img src={require('../img/BackBlack.svg')} alt="" />
                    </div>
                </Button>
                <div>Wish List</div>
                <Button onPress={() => navigate('/cart')}>
                    <div className='w-8 h-8 bg-transparent'>
                        <img src={require('../img/Keranjang.svg')} alt="" />
                    </div>
                </Button>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-10">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </>
    )
}