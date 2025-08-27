
import Layout from "@/components/layout/Layout"
import AboutTwo4 from "@/components/sections/AboutTwo4"
import Client2 from "@/components/sections/Client2"
import ContactPage from "@/components/sections/ContactPage"
import CounterTwo from "@/components/sections/CounterTwo"
import FAQ from "@/components/sections/FAQ"
import Headline11 from "@/components/sections/Headline11"
import Hero3 from "@/components/sections/Hero3"
import Instagram1 from "@/components/sections/Instagram1"
import Portfolio2 from "@/components/sections/Portfolio2"
import Pricing from "@/components/sections/Pricing"
import ServicesFour4 from "@/components/sections/ServicesFour4"
import Team2 from "@/components/sections/Team2"
import Testimonials3 from "@/components/sections/Testimonials3"
export default function Home3() {

    return (
        <>

            <Layout headerStyle={3} footerStyle={1}  bodyCls="home-three">
                <Hero3 />
                <ServicesFour4 />
                <AboutTwo4 />
                {/* <Portfolio2 /> */}
                {/* <CounterTwo /> */}
                {/* <FAQ /> */}
                {/* <Pricing /> */}
                {/* <Team2 /> */}
                {/* <Testimonials3 />  */}
                <Headline11 />
                {/* <ContactPage />
                <Instagram1 /> */}
            </Layout>
        </>
    )
}