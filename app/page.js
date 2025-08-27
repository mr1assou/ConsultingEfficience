import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Headline3 from "@/components/sections/Headline3"
import Hero1 from "@/components/sections/Hero1"
import LetsTalk1 from "@/components/sections/LetsTalk1"
import Testimonials2 from "@/components/sections/Testimonials2"
import Video2 from "@/components/sections/Video2"
import ServicesThree2 from "@/components/sections/ServicesThree2"
import Client2 from "@/components/sections/Client2"
import Preloader from "@/components/elements/Preloader"
import { Suspense } from "react"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} bodyCls="home-one">
                <Suspense fallback={<Preloader />}> 
                    <Hero1 />
                    <Headline3 />
                    <About1 />
                    <Video2 />
                    <ServicesThree2 />
                    <Client2 />
                    <Testimonials2 />
                    <LetsTalk1 />
                </Suspense>
            </Layout>
        </>
    )
}