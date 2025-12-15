import Container from "./Container"
import FooterDataSet from "./FooterDataSet"
import SocialNetwork from "./SocialNetwork"


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
        <Container>
            <SocialNetwork/>
            <FooterDataSet/>
        </Container>
    </footer>
  )
}

export default Footer