import CreditCardsButton from "../components/CreditCardsButton";
import CartSummaryButton from "../components/CartSummaryButton";
import ContentSection from "../components/ContentSection";
import CreditCardList from "../components/CreditCardList";
import Footer from "../components/Footer";
import HomeButton from "../components/HomeButton";
import NavBar from '../components/NavBar';
import TitleSection from "../components/TitleSection";
import UserCard from "../components/UserCard";

function CardsPage() {
    return (
        <div className='body'>
            <NavBar
                left={<><HomeButton /><CreditCardsButton /></>}
                right={<><CartSummaryButton /><UserCard /></>}
            />
            <TitleSection text='Cards'/>
            <ContentSection>
                <CreditCardList />
                <div className="flex-center">
                    <button className="btn green">Add a new card</button>
                </div>
            </ContentSection>
            <Footer />
        </div>
    )
}

export default CardsPage