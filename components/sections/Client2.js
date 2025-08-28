
import Accordion from "../elements/Accordion"
import Image from "next/image"

export default function Client2() {
    return (
        <>
            <div id="client" className="client-two-area pt-120 rpt-90 pb-110 rpb-60">
                <div className="container">
                    <div className="section-title mb-20 rmb-35">
                        <h2 style={{ color: 'var(--primary-color)' }}>Notre Partenaires</h2>
                    </div>
                    <div className="our-clients-two wow fadeInUp delay-0-4s">
                        <Image width={100} height={120}  priority src="/assets/images/client-logos/client-logo12.png" alt="Client Logo" style={{ width: "150px" }} />
                        <Image width={100} height={120}  priority src="/assets/images/client-logos/client-logo13.png" alt="Client Logo" style={{ width: "150px" }} />
                        <Image width={100} height={120}  priority src="/assets/images/client-logos/client-logo14.png" alt="Client Logo" style={{ width: "150px" }} />
                        <Image width={100} height={120}  priority src="/assets/images/client-logos/client-logo15.png" alt="Client Logo" style={{ width: "150px" }} />
                        <Image width={100} height={120}  priority src="/assets/images/client-logos/client-logo16.png" alt="Client Logo" style={{ width: "150px" }} />
                        <Image width={100} height={120}  priority src="/assets/images/client-logos/client-logo17.png" alt="Client Logo" style={{ width: "150px" }} />
                        <Image width={100} height={120}  priority src="/assets/images/client-logos/client-logo18.png" alt="Client Logo" style={{ width: "150px" }} />
                        <Image width={100} height={120}  priority src="/assets/images/client-logos/client-logo19.png" alt="Client Logo" style={{ width: "150px" }} />
                        <Image width={100} height={120}  priority src="/assets/images/client-logos/client-logo20.png" alt="Client Logo" style={{ width: "150px" }} />
                        <Image width={100} height={120}  priority src="/assets/images/client-logos/client-logo21.png" alt="Client Logo" style={{ width: "150px" }} />
                        <Image width={100} height={120}  priority src="/assets/images/client-logos/client-logo22.png" alt="Client Logo" style={{ width: "150px" }} />
                        <Image width={100} height={120}  priority src="/assets/images/client-logos/client-logo23.png" alt="Client Logo" style={{ width: "150px" }} />
                        <Image width={100} height={120}  priority src="/assets/images/client-logos/client-logo24.png" alt="Client Logo" style={{ width: "150px" }} />
                        <Image width={100} height={120}  priority src="/assets/images/client-logos/client-logo25.png" alt="Client Logo" style={{ width: "150px" }} />
                    </div>
                </div>
            </div>
            <section className="faq-area py-135 rpy-100 rel z-1 bgs-cover" style={{ backgroundImage: 'url(assets/images/faqs/faq-bg.jpg)' }}>
                <div className="faq-section-inner rel">
                    <div className="faq-image-part bgs-cover" style={{ backgroundImage: 'url(assets/images/faqs/faq.png)' }}>
                        <div className="headline-wrap style-three color-black">
                            
                        </div>
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 offset-lg-6 wow fadeInLeft delay-0-2s">
                                <div className="faq-content-part mb-25 rmb-0">
                                    <div className="section-title mb-35">
                                        <span className="sub-title mb-10">Agence de consulting de confiance</span>
                                        <h2>Questions fréquemment posées sur pour tout le monde</h2>
                                    </div>
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faq-shape"><img src="/assets/images/icons/star.png" alt="Star" /></div>
                </div>
            </section>
        </>
    )
}
