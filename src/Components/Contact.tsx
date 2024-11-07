import { robot } from "../assets"


const Contact = () => {
  return (
    <section className="mt-20">
        <h3 className="text-5xl font-poppins font-bold text-center mb-9">Contact Us</h3>
        <div className="flex md:flex-row flex-col items-center justify-around gap-5">
            <img src={robot} className="md:max-w-[600px] hidden md:flex " alt="" />
            <div className="flex flex-col items-center justify-center gap-6 px-4">
            <input type="text" placeholder="enter your name" className="lg:w-[500px] md:w-[351px] xs:w-[350px] w-[250px] p-3 rounded-md border-none text-black"  required/>
            <input type="email" placeholder="email@example.com" className="lg:w-[500px] md:w-[351px] xs:w-[350px] w-[250px] p-3 rounded-md border-none text-black"  required />
            <input type="text" placeholder="Subject" className="lg:w-[500px] md:w-[351px] xs:w-[350px] w-[250px] px-3 text-black py-5 rounded-md border-none" required/>
            <textarea name="Message" id="message" placeholder="Your message" className="lg:w-[500px] md:w-[351px] xs:w-[350px] w-[250px] px-3 text-black py-10 rounded-md border-none"></textarea>
            <button className="rounded-md px-3 py-4 bg-blue-gradient font-poppins text-xl">Send Message</button>
            </div>
        </div>
    </section>
  )
}

export default Contact;