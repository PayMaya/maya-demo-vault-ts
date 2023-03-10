import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from "react-redux"
import { clearCartThunk } from '../../thunks/cart';
import { paymentCleared } from '../../actions/payment/actionCreators';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import TitleSection from '../../components/TitleSection';
import UserCard from '../../components/UserCard';
import HomeButton from '../../components/HomeButton';
import ContentSection from '../../components/ContentSection';
import VaultedCardsButton from '../../components/VaultedCardsButton';

function PurchaseSuccessPage() {
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    dispatch(clearCartThunk())
    dispatch(paymentCleared())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='body'>
      <NavBar
        left={<><HomeButton /><VaultedCardsButton/> </>}
        right={<UserCard />}
      />
      <TitleSection text='Purchase successful!' />
      <ContentSection>
        <div className='payment-text'>
          <p>This is just a post-payment redirection. Your application's backend service
          should handle the webhook notification from Maya to update payment information accordingly.</p>
          <p>Read more about webhooks: <a href='https://developers.maya.ph/reference/createv1webhook-1'> How to handle webhooks </a></p>
        </div>
      </ContentSection>
      <Footer/>
    </div>
  );
}

export default PurchaseSuccessPage;
