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
            <CheckoutCardsList/>
        </ContentSection>
        <Footer/>
        </div>
    )
}