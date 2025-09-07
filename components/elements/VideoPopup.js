'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from 'next/link';
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup({ style }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {/* <a onClick={() => setOpen(true)} className="lightbox-image"><i className="icon-play" /></a> */}
            {style === 1 &&
                <a
                    href="/assets/images/hero/plaquette.pdf"
                    download
                    className="theme-btn style-two" style={{gap:"8px"}}
                >
                    <FaCloudDownloadAlt className='download' />
                    Télécharger Le Catalogue
                </a>
            }
            {style === 2 &&
                <a
                    href="/assets/images/hero/stagiare.pdf"
                    download
                    className="hero-cta"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                    <FaCloudDownloadAlt className="download" />
                    Téléchargez Règlement intérieur
                </a>

            }
            {style === 3 &&
                <Link href="/contact" className="contactez">Contactez-nous</Link>
            }
            {style === 4 &&
                <Link href="/contact" className="contactez" style={{ visibility: "hidden" }}>Contactez-nous</Link>
            }
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}