import VaultedCardsButton from "../components/VaultedCardsButton";
import CartSummaryButton from "../components/CartSummaryButton";
import ContentSection from "../components/ContentSection";
import VaultedCardList from "../components/VaultedCardList";
import Footer from "../components/Footer";
import HomeButton from "../components/HomeButton";
import NavBar from '../components/NavBar';
import TitleSection from "../components/TitleSection";
import UserCard from "../components/UserCard";

function CardsPage() {
    return (
        <div className='body'>
            <NavBar
                left={<><HomeButton /><VaultedCardsButton /></>}
                right={<><CartSummaryButton /><UserCard /></>}
            />
            <TitleSection text='Cards'/>
            <ContentSection>
                <VaultedCardList />
            </ContentSection>
            <Footer />
        </div>
    )
}

export default CardsPage