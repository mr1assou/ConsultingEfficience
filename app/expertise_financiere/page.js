"use client"
import Layout from "@/components/layout/Layout";
import AboutTwo4 from "@/components/sections/AboutTwo4";
import ServicesFour4 from "@/components/sections/ServicesFour4";
import LeftEdgePattern from "@/components/elements/LeftEdgePatter";

export default function Home3() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} bodyCls="home-three" >
        {/* Left decorative ribbon */}
        <LeftEdgePattern
          width={130}
          dark="#2C5172"
          accent="#4A8F3F"
          hideBelow={768}
          zIndex={2}
        />

        <ServicesFour4 />
        <AboutTwo4 />

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
      </Layout>
    </>
  );
}
