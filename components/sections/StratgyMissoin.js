
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function StratgyMissoin() {
    return (
        <>
            <section className="stratgy-missoin-area pt-140 rpt-100 pb-85 rpb-45 rel z-1">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 wow fadeInRight delay-0-2s">
                            <div className="stratgy-missoin-left mb-55">
                                <div className="section-title mb-30">
                                    <span className="sub-title mb-15">our company stratgy &amp; Missoin</span>
                                    <h2>We Working For Agency &amp; Create Solution</h2>
                                </div>
                                <h5 className="first-letter-big">Proin est lacus, sagittislobortis iaculise get sagittislo</h5>
                                <div className="row pt-20">
                                    <div className="col-xl-4 col-lg-3 col-md-4 col-6 col-small">
                                        <div className="counter-item counter-text-wrap">
                                            <CounterUp count={8} time={3} k />
                                            <h6 className="counter-title">project completed</h6>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-3 col-md-4 col-6 col-small">
                                        <div className="counter-item counter-text-wrap">
                                            <CounterUp count={28} time={3} />
                                            <h6 className="counter-title">Awward achievment</h6>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-3 col-md-4 col-6 col-small">
                                        <div className="counter-item counter-text-wrap">
                                            <CounterUp count={80} time={3} k />
                                            <h6 className="counter-title">Satisfied customers</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInLeft delay-0-2s">
                            <div className="stratgy-missoin-right mb-55">
                                <div className="image">
                                    <img src="/assets/images/about/stratgy-missoin.jpg" alt="Mission" />
                                </div>
                                <div className="skillbar" data-percent={88}>
                                    <span className="skillbar-title">Marketing</span>
                                    <div className="progress-bar-striped skillbar-bar progress-bar-animated" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} style={{ width: "88%" }}>
                                        <span className="skill-bar-percent" /></div>
                                </div>
                                <div className="row justify-content-between pt-5">
                                    <div className="col-sm-6">
                                        <div className="service-stye-two">
                                            <div className="icon">
                                                <img src="/assets/images/icons/light.png" alt="Icon" />
                                            </div>
                                            <h6>Leader of creative agency</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="service-stye-two">
                                            <div className="icon">
                                                <img src="/assets/images/icons/development.png" alt="Icon" />
                                            </div>
                                            <h6>Highest quality development</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
