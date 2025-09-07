
import Accordion from "../elements/Accordion"
import Image from "next/image"

export default function Client2() {
    return (
        <>
            <style jsx global>{`
  /* kill the theme’s grayscale variable + filters */
  .client-two-area .headline-wrap.style-two,
  .client-two-area .marquee-wrap,
  .client-two-area .marquee-inner,
  .client-two-area .marquee-item {
    --logo-filter: none !important;
    --logo-opacity: 1 !important;
    filter: none !important;
  }

  /* force logos to render in full color always */
  .client-two-area .marquee-item img {
    filter: none !important;
    -webkit-filter: none !important;
    opacity: 1 !important;
    transition: none !important;
  }

  /* keep them colored even on hover/focus states */
  .client-two-area .marquee-item:hover img,
  .client-two-area .marquee-item:focus img,
  .client-two-area .marquee-item:active img {
    filter: none !important;
    -webkit-filter: none !important;
    opacity: 1 !important;
  }
`}</style>

<style jsx global>{`
  .client-two-area .marquee-inner.left {
    animation-duration: 10s !important;
  }
  .client-two-area .marquee-inner.right {
    animation-duration: 14s !important;
  }
`}</style>



            <div id="client" className="client-two-area pt-120 rpt-90 pb-110 rpb-60" style={{ filter: 'none' }}>
                <div className="container">
                    <div className="section-title mb-20 rmb-35">
                        <h2 style={{ color: 'var(--primary-color)' }}>Nos références</h2>
                    </div>
                    <div className="headline-area">
                        <div className="container-fluid">
                            <div className="headline-wrap style-two" style={{ filter: 'none' }} data-force-colors="true">
                                <span className="marquee-wrap" style={{ filter: 'none', '--logo-filter': 'none', '--logo-opacity': '1' }}>
                                    <span className="marquee-inner left">
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo12.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo13.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo14.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo15.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo16.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo17.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo18.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo19.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo20.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo21.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo22.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo23.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo24.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo25.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                    </span>
                                    <span className="marquee-inner left">
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo12.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo13.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo14.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo15.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo16.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo17.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo18.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo19.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo20.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo21.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo22.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo23.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo24.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo25.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                    </span>
                                    <span className="marquee-inner left">
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo12.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo13.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo14.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo15.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo16.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo17.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo18.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo19.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo20.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo21.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo22.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo23.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo24.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                        <span className="marquee-item">
                                            <Image width={100} height={120} priority src="/assets/images/client-logos/client-logo25.png" alt="Client Logo" style={{ width: "150px", height: "auto" }} />
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
