import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";



// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

import { loginUser, logoutUser } from "../../redux/user/slice";
import { selectProductsCount } from "../../redux/cart/cart-selectors";


function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const {currentUser} = useSelector((rootReducer) => rootReducer.userReducer)
  const productsCount = useSelector(selectProductsCount)

  //Função para acumular os produtos do carrinho
  

  const dispatch = useDispatch(currentUser)

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({
      name: 'david',
      email: 'david.bonardi@gmail.com'
    }))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }

  return (
    <Styles.Container>
      
      <Styles.Logo>Loja com Redux do David</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (<div onClick={handleLogoutClick}>Sair</div>) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
