import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiAction } from './store/ui-slice';

let isInitial = true; // 컴포넌트가 다시 렌더링 되면 다시 초기화되지 않는다.

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiAction.showNotification({
          status: 'pending',
          titie: 'Sending...',
          message: 'Sending cart data!',
        })
      );
      const response = fetch(
        'https://react-http-playground-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }

      dispatch(
        uiAction.showNotification({
          status: 'success',
          titie: 'Success...',
          message: 'Sent cart data successfully!',
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiAction.showNotification({
          status: 'error',
          titie: 'Error!',
          message: 'Sending cart data filed!',
        })
      );
    });
  }, [cart, dispatch]); // dispatch 함수는 바뀌지 않기 때문에 주의사항을 제거하고자 의존성에 추가해도 무방하다

  console.log(notification);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          titie={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
