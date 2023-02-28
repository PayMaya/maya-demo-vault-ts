import { Accordion } from "../components/Accordion"
import { CheckoutCardForm } from "../components/CheckoutCardForm"
import ContentSection from "../components/ContentSection"
import Footer from "../components/Footer"
import HomeButton from "../components/HomeButton"
import NavBar from "../components/NavBar"
import PayWithNewCardForm from "../components/PayWithNewCardForm"
import TitleSection from "../components/TitleSection"
import UserCard from "../components/UserCard"
import VaultedCardsButton from "../components/VaultedCardsButton"

export function CheckoutPage() {
    return (
        <div className="body">
        <NavBar left={<><HomeButton/><VaultedCardsButton/></>}right={<UserCard/>}/>
        <TitleSection text="Pay Using"/>
        <ContentSection>
            <Accordion header="Saved Cards" group="checkout" index={"1"}>
                <CheckoutCardForm/>
            </Accordion>
            <Accordion header="Use A Different Card" group="checkout" index={"2"}>
               <PayWithNewCardForm/>
            </Accordion>
        </ContentSection>
        <Footer/>
        </div>
    )
}