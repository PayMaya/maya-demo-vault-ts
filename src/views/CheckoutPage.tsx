import { Accordion } from "../components/Accordion"
import { CheckoutCardForm } from "../components/CheckoutCardForm"
import { CheckoutCardsList } from "../components/CheckoutCardsList"
import ContentSection from "../components/ContentSection"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import TitleSection from "../components/TitleSection"
import UserCard from "../components/UserCard"

export function CheckoutPage() {
    return (
        <div className="body">
        <NavBar right={<UserCard/>}/>
        <TitleSection text="Pay Using"/>
        <ContentSection>
            <Accordion header="Saved Cards" group="checkout" index={"1"}>
                {/* <CheckoutCardsList/> */}
                <CheckoutCardForm/>
            </Accordion>
            <Accordion header="Use a different card" group="checkout" index={"2"}>
                <div>
                    <p> USE A DIFFERENT CARD HERE </p> 
                </div>
            </Accordion>
        </ContentSection>
        <Footer/>
        </div>
    )
}