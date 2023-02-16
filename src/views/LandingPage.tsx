import '../App.css';
import ProductList from '../components/ProductList';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CartSummaryButton from '../components/CartSummaryButton';
import UserCard from '../components/UserCard';
import HomeButton from '../components/HomeButton';
import TitleSection from '../components/TitleSection';
import ContentSection from '../components/ContentSection';
import CardsButton from '../components/CardsButton';

function LandingPage() {
  return (
    <div className='body'>
      <NavBar
        left={<><HomeButton /><CardsButton /></>}
        right={<><CartSummaryButton /><UserCard /></>}
      />
      <TitleSection text="Products" />
      <ContentSection>
        <ProductList />
      </ContentSection>
      <Footer />
    </div>
  );
}

export default LandingPage;
