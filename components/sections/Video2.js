
import Image from "next/image"
import VideoPopup from "../elements/VideoPopup"

export default function Video2() {
    return (
        <>
            <div className="video-area-two pt-115 rel z-1">
                <div className="container">
                    <div className="video-inner-two py-180 bgs-cover rpy-130 text-center" style={{ backgroundImage: 'url(assets/images/video/video2.png)' }}>
                        <VideoPopup style={3}/>
                              <div className="headline-wrap style-three color-black">
                        <span className="marquee-wrap bg-white py-15">
                            <span className="marquee-inner left">
                                <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
                            </span>
                            <span className="marquee-inner left">
                                <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
                            </span>
                            <span className="marquee-inner left">
                                <span className="marquee-item"><b>Prospection & Vente</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Négociation</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Management</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Communication & Influence</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Développement personnel</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Leadership</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Posture professionnelle</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Croissance personnelle</b><i className="fas fa-bahai" /></span>
                                <span className="marquee-item"><b>Mieux-être durable</b><i className="fas fa-bahai" /></span>
                            </span>
                        </span>
                    </div>
                        <div className="video-shape wow zoomIn delay-0-2s">
                            <Image src="/assets/images/video/video-shape.png" alt="Shape" fill/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hide autoscroll slider on mobile and tablet */}
            <style jsx global>{`
                @media (max-width: 991px) {
                    .video-area-two .headline-wrap {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    )
}
