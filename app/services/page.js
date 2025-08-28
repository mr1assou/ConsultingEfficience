
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ServicesThree2 from "@/components/sections/ServicesThree2"
import FirstVisitPreloader from "@/components/elements/FirstVisitPreloader"

export default function Service() {

    return (
        <FirstVisitPreloader pageKey="services">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="digital services">
                <div>
                    <ServicesThree2 />
                    <div className="lets-talk-area text-center pb-75 rpb-100">
                        <div className="container">
                            <Link href="/contact" className="lets-talk-text wow zoomIn delay-0-2s">Contactez-Nous <i className="fal fa-arrow-right" /></Link>
                        </div>
                    </div>
                    
                </div>

            </Layout>
        </FirstVisitPreloader>
    )
}