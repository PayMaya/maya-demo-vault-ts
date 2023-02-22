import NavBar from '../components/NavBar';
import TitleSection from '../components/TitleSection';
import CartList from '../components/CartList';
import Footer from '../components/Footer';
import UserCard from '../components/UserCard';
import HomeButton from '../components/HomeButton';
import ContentSection from '../components/ContentSection';
import VaultedCardsButton from '../components/VaultedCardsButton';
import { Link } from 'react-router-dom';

function CartPage() {
  return (
    <div className='body'>
      <NavBar
        left={<><HomeButton /><VaultedCardsButton /></>}
        right={<UserCard />}
      />
      <TitleSection text='Your Cart'/>
      <ContentSection>
        <CartList />
        <div className='redirect-button'>
          <Link className='btn green large' to="/checkout" > Checkout </Link>
        </div>
      </ContentSection>
      <Footer />
    </div>
  );
}

export default CartPage;
