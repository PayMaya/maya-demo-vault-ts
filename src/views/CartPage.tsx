import NavBar from '../components/NavBar';
import TitleSection from '../components/TitleSection';
import CartList from '../components/CartList';
import Footer from '../components/Footer';
import UserCard from '../components/UserCard';
import HomeButton from '../components/HomeButton';
import ContentSection from '../components/ContentSection';
import CreditCardsButton from '../components/CreditCardsButton';

function CartPage() {
  return (
    <div className='body'>
      <NavBar
        left={<><HomeButton /><CreditCardsButton /></>}
        right={<UserCard />}
      />
      <TitleSection text='Your Cart'/>
      <ContentSection>
        <CartList />
        <div className='cart-checkout'>
          <button className='btn green large'> Checkout </button>
        </div>
      </ContentSection>
      <Footer />
    </div>
  );
}

export default CartPage;
