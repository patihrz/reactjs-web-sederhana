import Navbar from "../components/Navbar"
import '../styles/Home.css'
import Footer from "../components/Footer"
import { homeSection } from "../data/HomeSection"
import parse from 'html-react-parser'
import { coursesSection } from "../data/CoursesSection"
import { tutorsSection, tutorsList } from "../data/TutorsSection"
import Tutors from "../components/Tutors"
import { partnersSection, partnersList } from "../data/PartnersSection"
import Partners from "../components/Partners"
import Contact from "../components/Contact"
import { contactSection } from "../data/ContactSection"

function Home() {
  return (
    
    <>
        <Navbar />
        <div className='Wrapper'><section id="home">

            {/* home */}

            <img src={homeSection.image} />
            <div className="kolom">
              {parse(homeSection.content)}
            </div>
        </section>
        
        {/* online course */}

        <section id="courses">
            <div className="kolom">
                {parse(coursesSection.content)}
            </div>
            <img src={coursesSection.image}/>
        </section>
        
        {/* Tutors */}

        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                  {parse(tutorsSection.content)}
                </div>
                 <Tutors tutorsList={tutorsList} />
              </div>
            </section>

        {/* partners */}

        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(partnersSection.content)}
              </div>
              <Partners partnersList={partnersList} />
            </div>
            
          </section>

        </div>
        <Contact contactSection={contactSection}/>
        <Footer />
    </>
  )
}

export default Home
