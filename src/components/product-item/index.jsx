import { BsCartPlus } from "react-icons/bs";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";
import { useDispatch} from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";

// Utilities

const ProductItem = ({ product }) => {
  
//dispatch é uma função que permite despachar ações para o Redux
  const dispatch = useDispatch()


  //Adiciona o produto ao carrinho
  const handleProductClick = () => {
    dispatch(addProductToCart(product))
  }
  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleProductClick}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
