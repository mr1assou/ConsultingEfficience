
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function Hero3() {
    return (
        <>
            <div className="hero-area-three pt-130 rpt-100 rel z-1">
                <div className="container">
                    <div className="row rel align-items-center justify-content-between">
                        <div className="col-lg-10">
                            <div className="hero-content-three">
                                <div className="hero-top">
                                    <span className="hero-heading wow fadeInUp delay-0-2s">Expertise</span>
                                    {/* <div className="text wow fadeInUp delay-0-4s">Transformez vos budgets de formation en levier de croissance.
Nos formations sont toutes éligibles FAF/OPCO et nous vous
accompagnons pour maximiser vos prises en charge.</div> */}
                                </div>
                                <div className="hero-bottom wow fadeInUp delay-0-6s">
                                    <VideoPopup style={4} />
                                    <span className="hero-heading">Finan<span>c</span>ère</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="hero-scroll-down wow fadeInDown delay-0-6s">
                                {/* <Link href="#client"><i className="far fa-arrow-down" /></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
         
            </div>
        </>
    )
}
