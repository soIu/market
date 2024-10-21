'use client'
import { TouchableOpacity as Button } from 'react-native'
import ProductCard from '../components/ProductCard'
import { useNavigate } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from '../components/Loading'
import ProductCardWishlist from '../components/ProductCardWishlist'
import SkeletonProductCard from '../components/SkeletonProductCard'
import { useSelector } from 'react-redux'
export default function Wishlist() {
    const ids = useSelector(state => state.wishlist.wishlist)
    console.log(ids)
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
                <div className={"grid grid-cols-2 gap-10"}>
                    <Suspense fallback={<SkeletonProductCard />}>
                        {ProductCardWishlist(ids)}
                    </Suspense>
                </div>
            </div>
        </>
    )
}