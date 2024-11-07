import { clients, } from "../constants"

const Clients = () => {
  return (
    <section className='mt-20'>
      <div className="xs:flex xs:flex-row hidden items-center justify-around gap-10 xs:gap-4">
      {clients.map((client, index) => (
        <img className="md:w-[200px] md:h-auto xs:w-[80px] xs:h-auto w-[150px] h-auto" key={index} src={client.logo} alt="" />
      ))}
      </div>
    </section>
  )
}

export default Clients;