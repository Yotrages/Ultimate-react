import { Faq, Newhero, Newnav, Stats, FeedBack, Footer, Clients, CardDeal, Billing, Business, Newsletter, Contact, } from "../Components"

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden text-white">
      <Newnav button="Search" />
      <Newhero />
      <Billing />
      <FeedBack />
      <Clients />
      <CardDeal />
      <Stats />
      <Business />
      <Faq />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;