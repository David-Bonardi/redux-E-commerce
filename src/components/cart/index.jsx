// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";

import CartItem from "../cart-item/index";
import { selectProductsTotalPrice } from "../../redux/cart/cart-selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const {cartProducts} = useSelector((rootReducer) => rootReducer.cartReducer)
  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {cartProducts.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsTotalPrice > 0 ? (
          <Styles.CartTotal>Total: R${productsTotalPrice}</Styles.CartTotal>
        ) : <Styles.CartTotal>Seu carrinho está vazio.</Styles.CartTotal>}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
