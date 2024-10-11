import { TouchableOpacity as Button } from 'react-native'
import { useNavigate } from 'react-router-dom'
export default function HeaderProfile (props) {
    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-between pt-14 p-[20px]'>
            <Button onPress={() => navigate('/profile')}>
                <div>
                    <img src={require('../img/BackBlack.svg')} alt="" />
                </div>
            </Button>
            <div className='font-bold'>{props.title}</div>
            <div className='w-8 h-8 bg-transparent'></div>
        </div>
    )
}