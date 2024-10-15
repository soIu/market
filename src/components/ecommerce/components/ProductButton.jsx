'use client';
import { TouchableOpacity as Button } from 'react-native';
import { useNavigate } from 'react-router-dom';
function ProductButton (props) {
  const navigate = useNavigate();
  const { id } = props
  return(
    <Button 
    onPress={() => navigate(`/product/${id}`)}
    >
      {props.children}
    </Button>
  )
}
export default ProductButton;