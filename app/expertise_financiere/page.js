
import Layout from "@/components/layout/Layout"
import AboutTwo4 from "@/components/sections/AboutTwo4"
import Headline11 from "@/components/sections/Headline11"
import Hero3 from "@/components/sections/Hero3"
import ServicesFour4 from "@/components/sections/ServicesFour4"
export default function Home3() {

    return (
        <>

            <Layout headerStyle={3} footerStyle={1}  bodyCls="home-three">
                <Hero3 />
                <ServicesFour4 />
                <AboutTwo4 />
                <Headline11 />
            </Layout>
        </>
    )
}