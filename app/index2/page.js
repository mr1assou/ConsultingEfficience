import Layout from "@/components/layout/Layout"
import AboutTwo3 from "@/components/sections/AboutTwo3"
import Blog2 from "@/components/sections/Blog2"
import Client1 from "@/components/sections/Client1"
import Headline10 from "@/components/sections/Headline10"
import Headline6 from "@/components/sections/Headline6"
import Headline7 from "@/components/sections/Headline7"
import Headline8 from "@/components/sections/Headline8"
import Headline9 from "@/components/sections/Headline9"
import Hero2 from "@/components/sections/Hero2"
import Instagram1 from "@/components/sections/Instagram1"
import LetsTalk2 from "@/components/sections/LetsTalk2"
import ServicesThree2 from "@/components/sections/ServicesThree2"
import StratgyMissoin from "@/components/sections/StratgyMissoin"
import Testimonials2 from "@/components/sections/Testimonials2"
import Video2 from "@/components/sections/Video2"
import WebDesignServices3 from "@/components/sections/WebDesignServices3"
import WorkProcess from "@/components/sections/WorkProcess"
export default function Home2() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={2}  bodyCls="home-two">
                <Hero2 />
                <AboutTwo3 />
                <Headline6 />
                <ServicesThree2 />
                <Video2 />
                <Headline7 />
                <Client1 />
                <WebDesignServices3 />
                <Headline8 />
                <WorkProcess />
                <Headline9 />
                <StratgyMissoin />
                <Testimonials2 />
                <LetsTalk2 />
                <Blog2 />
                <Instagram1 />
                <Headline10 />
            </Layout>
        </>
    )
}