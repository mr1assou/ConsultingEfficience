'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ProductDetails() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    const [activeIndex2, setActiveIndex2] = useState(1)
    const handleOnClick2 = (index) => {
        setActiveIndex2(index)
    }

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="shop Details">
                <div>
                    {/* Shop Details Area start */}
                    <div className="shop-details-area py-140 rpy-100">
                        <div className="container container-1280">
                            <div className="row justify-content-between">
                                <div className="col-lg-6">
                                    <div className="product-details-images wow fadeInLeft delay-0-2s">
                                        <div className="tab-content preview-images">
                                            <div className={activeIndex == 1 ? "tab-pane fade preview-item active show" : "tab-pane fade preview-item"} id="preview1">
                                                <img src="/assets/images/shop/preview1.jpg" alt="Perview" />
                                            </div>
                                            <div className={activeIndex == 2 ? "tab-pane fade preview-item active show" : "tab-pane fade preview-item"} id="preview2">
                                                <img src="/assets/images/shop/preview1.jpg" alt="Perview" />
                                            </div>
                                            <div className={activeIndex == 3 ? "tab-pane fade preview-item active show" : "tab-pane fade preview-item"} id="preview3">
                                                <img src="/assets/images/shop/preview1.jpg" alt="Perview" />
                                            </div>
                                            <div className={activeIndex == 4 ? "tab-pane fade preview-item active show" : "tab-pane fade preview-item"} id="preview4">
                                                <img src="/assets/images/shop/preview1.jpg" alt="Perview" />
                                            </div>
                                        </div>
                                        <div className="nav thumb-images">
                                            <a onClick={() => handleOnClick(1)} className={activeIndex == 1 ? "thumb-item active show" : "thumb-item"}>
                                                <img src="/assets/images/shop/thumb1.jpg" alt="Thumb" />
                                            </a>
                                            <a onClick={() => handleOnClick(2)} className={activeIndex == 2 ? "thumb-item active show" : "thumb-item"}>
                                                <img src="/assets/images/shop/thumb2.jpg" alt="Thumb" />
                                            </a>
                                            <a onClick={() => handleOnClick(3)} className={activeIndex == 3 ? "thumb-item active show" : "thumb-item"}>
                                                <img src="/assets/images/shop/thumb3.jpg" alt="Thumb" />
                                            </a>
                                            <a onClick={() => handleOnClick(4)} className={activeIndex == 4 ? "thumb-item active show" : "thumb-item"}>
                                                <img src="/assets/images/shop/thumb4.jpg" alt="Thumb" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="product-details-content mt-65 wow fadeInRight delay-0-2s">
                                        <h3>Wooden Doors <span>-34%</span></h3>
                                        <div className="brand-ratting mt-25 mb-5">
                                            <span className="brand h5 mb-15">Brand: DSA Doors</span>
                                            <div className="ratting mb-10">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                            <Link className="mb-10" href="#">( 2 Reviews )</Link>
                                        </div>
                                        <p>There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passa</p>
                                        <h5 className="h5 mt-25 mb-20">Model: Flores 3-Lite-Diamond 8/0 E-01-1SL</h5>
                                        <h6>Cloth Size (brand)</h6>
                                        <div className="product-size clearfix mt-15 mb-35">
                                            <select name="product-size" id="product-size">
                                                <option>36''x96'' (3'-0"x8'-0")  easy</option>
                                                <option>36''x46'' (3'-0"x4'-0")  hard</option>
                                                <option>36''x56'' (3'-0"x6'-0")  easy</option>
                                                <option>36''x9'' (3'-0"x8'-0")  hard</option>
                                            </select>
                                        </div>
                                        <div className="price">$4,600.00 <del>$4,600.00</del></div>
                                        <form action="#" className="add-to-cart pt-15 mb-30">
                                            <button type="submit" className="theme-btn style-two">Add to Cart</button>
                                            <button className="wishlist"><i className="fal fa-star" /></button>
                                            <input type="number" min={1} max={20} />
                                        </form>
                                        <h6>GROUND DELIVERY SURCHARGE: $180.00</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Shop Details Area end */}
                    {/* Shop Details Tab start */}
                    <div className="shop-details-tab-area bgc-lighter pt-140 rpt-100 pb-120 rpb-80">
                        <div className="container container-1280">
                            <ul className="nav product-information-tab mb-40 wow fadeInUp delay-0-2s">
                                <li><a onClick={() => handleOnClick2(1)} className={activeIndex2 === 1 ? "active show" : ""}>Product Details</a></li>
                                <li><a onClick={() => handleOnClick2(2)} className={activeIndex2 === 2 ? "active show" : ""}>additional imformation</a></li>
                                <li><a onClick={() => handleOnClick2(3)} className={activeIndex2 === 3 ? "active show" : ""}>Review (02)</a></li>
                            </ul>
                            <div className="tab-content wow fadeInUp delay-0-2s">
                                <div className={activeIndex2 == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="details">
                                    <h4>Experience is over the world visit</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis necenim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus</p>
                                    <br />
                                    <h5>More Details</h5>
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <ul className="list-style-three rmb-20">
                                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                                <li>Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is simply text.</li>
                                                <li>type here your detail one by one li more add</li>
                                                <li>has been the industry’s standard dummy text ever since. Lorem Ips</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-5">
                                            <ul className="list-style-three">
                                                <li>Lorem Ipsum generators on the tend to repeat.</li>
                                                <li>If you are going to use a passage.</li>
                                                <li>Lorem Ipsum generators on the tend to repeat.</li>
                                                <li>Lorem Ipsum generators on the tend to repeat.</li>
                                                <li>If you are going to use a passage.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex2 == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="information">
                                    <p>Now wherever you are, wherever you are, you can easily monitor your CCTV videos through your mobile, tab, laptop or PC. With the wireless camera, you can view the camera from your mobile or computer to the right-left 0 to 360-degree video. Cover the flower room with a camera.</p>
                                    <ul className="list-style-two my-15">
                                        <li>Wide Angle and Long Length</li>
                                        <li>Smart zooming point</li>
                                        <li>HD quality video output.</li>
                                        <li>Smart Alarming System</li>
                                    </ul>
                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam</p>
                                </div>
                                <div className={activeIndex2 == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="review">
                                    <h4>02 Reviews</h4><br />
                                    <div className="review-item">
                                        <div className="thumb">
                                            <img src="/assets/images/blog/admin-author.png" alt="Author" />
                                        </div>
                                        <div className="content">
                                            <div className="name-ratting">
                                                <h6>Cameron Williamson</h6>
                                                <div className="ratting">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                                <span className="date">May 25, 2023</span>
                                            </div>
                                            <p>Happy to challenge and push you to think about your decisions both from usability design standpoints.”</p>
                                        </div>
                                    </div>
                                    <div className="review-item child-review">
                                        <div className="thumb">
                                            <img src="/assets/images/blog/admin-author2.png" alt="Author" />
                                        </div>
                                        <div className="content">
                                            <div className="name-ratting">
                                                <h6>Cameron Williamson</h6>
                                                <div className="ratting">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                                <span className="date">May 25, 2023</span>
                                            </div>
                                            <p>Happy to challenge and push you to think about your decisions both from usability design standpoints.”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Shop Details Tab end */}
                    {/* Related Product Area start */}
                    <section className="related-product-area pt-135 rpt-100 rel z-1">
                        <div className="container container-1280">
                            <div className="section-title text-lg-start text-center mb-30 wow fadeInUp delay-0-1s">
                                <span className="sub-title mb-15">Portfolio Sliding</span>
                                <h2>RELATED PRODUCT</h2>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="product-item wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <img src="/assets/images/shop/product1.jpg" alt="Product" />
                                            <div className="social-style-two">
                                                <Link href="#"><i className="far fa-shopping-cart" /></Link>
                                                <Link href="#"><i className="far fa-heart" /></Link>
                                                <Link href="#"><i className="far fa-eye" /></Link>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="title-price">
                                                <h6><Link href="/product-details">Solid Wooden Door</Link></h6>
                                                <div className="price">2362.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="product-item wow fadeInUp delay-0-3s">
                                        <div className="image">
                                            <img src="/assets/images/shop/product9.jpg" alt="Product" />
                                            <div className="social-style-two">
                                                <Link href="#"><i className="far fa-shopping-cart" /></Link>
                                                <Link href="#"><i className="far fa-heart" /></Link>
                                                <Link href="#"><i className="far fa-eye" /></Link>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="title-price">
                                                <h6><Link href="/product-details">Solid Wooden Door</Link></h6>
                                                <div className="price">2362.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="product-item wow fadeInUp delay-0-4s">
                                        <div className="image">
                                            <img src="/assets/images/shop/product5.jpg" alt="Product" />
                                            <div className="social-style-two">
                                                <Link href="#"><i className="far fa-shopping-cart" /></Link>
                                                <Link href="#"><i className="far fa-heart" /></Link>
                                                <Link href="#"><i className="far fa-eye" /></Link>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="title-price">
                                                <h6><Link href="/product-details">Solid Wooden Door</Link></h6>
                                                <div className="price">2362.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="product-item wow fadeInUp delay-0-5s">
                                        <div className="image">
                                            <img src="/assets/images/shop/product2.jpg" alt="Product" />
                                            <div className="social-style-two">
                                                <Link href="#"><i className="far fa-shopping-cart" /></Link>
                                                <Link href="#"><i className="far fa-heart" /></Link>
                                                <Link href="#"><i className="far fa-eye" /></Link>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="title-price">
                                                <h6><Link href="/product-details">Solid Wooden Door</Link></h6>
                                                <div className="price">2362.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Related Product Area End */}
                    {/* Lets Talk Area start */}
                    <div className="lets-talk-area text-center pt-90 rpt-60 pb-75 rpb-100">
                        <div className="container">
                            <Link href="/contact" className="lets-talk-text wow zoomIn delay-0-2s">Let’s Talk <i className="fal fa-arrow-right" /></Link>
                        </div>
                    </div>
                    {/* Lets Talk Area end */}
                    {/* Headline area start */}
                    <div className="headline-area bgc-primary py-20">
                        <div className="headline-wrap style-two color-black">
                            <span className="marquee-wrap">
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                </span>
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                </span>
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                </span>
                            </span>
                        </div>
                    </div>
                    {/* Headline Area end */}
                </div>

            </Layout>
        </>
    )
}