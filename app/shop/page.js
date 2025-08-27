
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Shop() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="shop page">
                <div>
                    <div className="shop-page pt-100 rpt-70">
                        <div className="container container-1280">
                            <div className="shop-shorter rel z-3 mb-35 wow fadeInUp delay-0-2s">
                                <div className="sort-text">
                                    Showing 1–12 of 54 results
                                </div>
                                <ul className="grid-list">
                                    <li><Link href="#"><i className="fal fa-border-all" /></Link></li>
                                    <li><Link href="#"><i className="far fa-list" /></Link></li>
                                </ul>
                                <div className="products-dropdown">
                                    <select>
                                        <option value="default">short by New</option>
                                        <option value="old">Sort by Oldest</option>
                                        <option value="hight-to-low">High To Low</option>
                                        <option value="low-to-high">Low To High</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-9 col-lg-8">
                                    <div className="shop-wrapper">
                                        <div className="row gap-25">
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
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
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="product-item wow fadeInUp delay-0-3s">
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
                                                            <h6><Link href="/product-details">Solid Wooden Glass Door</Link></h6>
                                                            <div className="price">2362.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="product-item wow fadeInUp delay-0-4s">
                                                    <div className="image">
                                                        <img src="/assets/images/shop/product3.jpg" alt="Product" />
                                                        <div className="social-style-two">
                                                            <Link href="#"><i className="far fa-shopping-cart" /></Link>
                                                            <Link href="#"><i className="far fa-heart" /></Link>
                                                            <Link href="#"><i className="far fa-eye" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="title-price">
                                                            <h6><Link href="/product-details">Plain Veneered Flush Door</Link></h6>
                                                            <div className="price">2362.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="product-item wow fadeInUp delay-0-2s">
                                                    <div className="image">
                                                        <img src="/assets/images/shop/product4.jpg" alt="Product" />
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
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="product-item wow fadeInUp delay-0-3s">
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
                                                            <h6><Link href="/product-details">Solid Wooden Glass Door</Link></h6>
                                                            <div className="price">2362.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="product-item wow fadeInUp delay-0-4s">
                                                    <div className="image">
                                                        <img src="/assets/images/shop/product6.jpg" alt="Product" />
                                                        <div className="social-style-two">
                                                            <Link href="#"><i className="far fa-shopping-cart" /></Link>
                                                            <Link href="#"><i className="far fa-heart" /></Link>
                                                            <Link href="#"><i className="far fa-eye" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="title-price">
                                                            <h6><Link href="/product-details">Plain Veneered Flush Door</Link></h6>
                                                            <div className="price">2362.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="product-item wow fadeInUp delay-0-2s">
                                                    <div className="image">
                                                        <img src="/assets/images/shop/product7.jpg" alt="Product" />
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
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="product-item wow fadeInUp delay-0-3s">
                                                    <div className="image">
                                                        <img src="/assets/images/shop/product8.jpg" alt="Product" />
                                                        <div className="social-style-two">
                                                            <Link href="#"><i className="far fa-shopping-cart" /></Link>
                                                            <Link href="#"><i className="far fa-heart" /></Link>
                                                            <Link href="#"><i className="far fa-eye" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="title-price">
                                                            <h6><Link href="/product-details">Solid Wooden Glass Door</Link></h6>
                                                            <div className="price">2362.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="product-item wow fadeInUp delay-0-4s">
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
                                                            <h6><Link href="/product-details">Plain Veneered Flush Door</Link></h6>
                                                            <div className="price">2362.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="product-item wow fadeInUp delay-0-2s">
                                                    <div className="image">
                                                        <img src="/assets/images/shop/product10.jpg" alt="Product" />
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
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="product-item wow fadeInUp delay-0-3s">
                                                    <div className="image">
                                                        <img src="/assets/images/shop/product11.jpg" alt="Product" />
                                                        <div className="social-style-two">
                                                            <Link href="#"><i className="far fa-shopping-cart" /></Link>
                                                            <Link href="#"><i className="far fa-heart" /></Link>
                                                            <Link href="#"><i className="far fa-eye" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="title-price">
                                                            <h6><Link href="/product-details">Solid Wooden Glass Door</Link></h6>
                                                            <div className="price">2362.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                                                <div className="product-item wow fadeInUp delay-0-4s">
                                                    <div className="image">
                                                        <img src="/assets/images/shop/product12.jpg" alt="Product" />
                                                        <div className="social-style-two">
                                                            <Link href="#"><i className="far fa-shopping-cart" /></Link>
                                                            <Link href="#"><i className="far fa-heart" /></Link>
                                                            <Link href="#"><i className="far fa-eye" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="title-price">
                                                            <h6><Link href="/product-details">Plain Veneered Flush Door</Link></h6>
                                                            <div className="price">2362.00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="pagination flex-wrap justify-content-center wow fadeInUp delay-0-2s">
                                            <li className="page-item disabled">
                                                <span className="page-link"><i className="far fa-long-arrow-left" /></span>
                                            </li>
                                            <li className="page-item active">
                                                <span className="page-link">
                                                    1
                                                    <span className="sr-only">(current)</span>
                                                </span>
                                            </li>
                                            <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link" href="#"><i className="far fa-long-arrow-right" /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-7 col-sm-9">
                                    <div className="shop-sidebar rmt-65">
                                        <div className="widget widget-search wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">search here</h5>
                                            <form action="#" className="default-search-form">
                                                <input type="text" placeholder="search here..." required />
                                                <button type="submit" className="searchbutton far fa-search" />
                                            </form>
                                        </div>
                                        <div className="widget widget-category-two wow fadeInUp delay-0-4s">
                                            <h5 className="widget-title">Catagories</h5>
                                            <ul>
                                                <li><Link href="/blog">Door Hinges (4)</Link></li>
                                                <li><Link href="/blog">Door Locks (4)</Link></li>
                                                <li><Link href="/blog">Doors (5)</Link></li>
                                                <li><Link href="/blog">Fixtures (5)</Link></li>
                                                <li><Link href="/blog">Handles (3)</Link></li>
                                                <li><Link href="/blog">Hardware (3)</Link></li>
                                                <li><Link href="/blog">Keyless Entry (4)</Link></li>
                                                <li><Link href="/blog">Uncategorized (0)</Link></li>
                                                <li><Link href="/blog">Windows (5)</Link></li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-colors wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">Door Colors</h5>
                                            <div className="colors">
                                                <div className="color-item"><button /></div>
                                                <div className="color-item blue"><button /></div>
                                                <div className="color-item green"><button /></div>
                                                <div className="color-item yellow"><button /></div>
                                                <div className="color-item light-green"><button /></div>
                                                <div className="color-item black"><button /></div>
                                                <div className="color-item purple"><button /></div>
                                            </div>
                                        </div>
                                        <div className="widget widget-filter wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">Filter By Price</h5>
                                            <div className="price-filter-details">
                                                <span className="price">$30 — $2,000</span>
                                                <Link href="#">Filter</Link>
                                            </div>
                                        </div>
                                        <div className="widget widget-brands wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">Brands</h5>
                                            <ul>
                                                <li><input type="checkbox" id="label1" /><label htmlFor="label1">Door Hinges (4)</label></li>
                                                <li><input type="checkbox" id="label2" /><label htmlFor="label2">Door Locks (4)</label></li>
                                                <li><input type="checkbox" id="label3" /><label htmlFor="label3">Doors (5)</label></li>
                                                <li><input type="checkbox" id="label4" /><label htmlFor="label4">Fixtures (5)</label></li>
                                                <li><input type="checkbox" id="label5" /><label htmlFor="label5">Handles (3)</label></li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-products wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">Recent Products</h5>
                                            <ul>
                                                <li>
                                                    <div className="image">
                                                        <img src="/assets/images/widgets/product1.jpg" alt="Product" />
                                                    </div>
                                                    <div className="content">
                                                        <span className="price">34.00 / <del>55.00</del></span>
                                                        <h6><Link href="/product-details">the University</Link></h6>
                                                        <div className="ratting">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fal fa-star" />
                                                            <i className="fal fa-star" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image">
                                                        <img src="/assets/images/widgets/product2.jpg" alt="Product" />
                                                    </div>
                                                    <div className="content">
                                                        <span className="price">34.00 / <del>55.00</del></span>
                                                        <h6><Link href="/product-details">the University</Link></h6>
                                                        <div className="ratting">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fal fa-star" />
                                                            <i className="fal fa-star" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image">
                                                        <img src="/assets/images/widgets/product3.jpg" alt="Product" />
                                                    </div>
                                                    <div className="content">
                                                        <span className="price">34.00 / <del>55.00</del></span>
                                                        <h6><Link href="/product-details">the University</Link></h6>
                                                        <div className="ratting">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fal fa-star" />
                                                            <i className="fal fa-star" />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image">
                                                        <img src="/assets/images/widgets/product4.jpg" alt="Product" />
                                                    </div>
                                                    <div className="content">
                                                        <span className="price">34.00 / <del>55.00</del></span>
                                                        <h6><Link href="/product-details">the University</Link></h6>
                                                        <div className="ratting">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fal fa-star" />
                                                            <i className="fal fa-star" />
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">Popular Tags</h5>
                                            <div className="tag-coulds">
                                                <Link href="/blog">Design</Link>
                                                <Link href="/blog">marketing</Link>
                                                <Link href="/blog">search</Link>
                                                <Link href="/blog">branding</Link>
                                                <Link href="/blog">startup</Link>
                                                <Link href="/blog">tech</Link>
                                                <Link href="/blog">Hardware</Link>
                                                <Link href="/blog">Smart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Shop Page Area end */}
                    {/* Lets Talk Area start */}
                    <div className="lets-talk-area text-center pt-120 rpt-90 pb-75 rpb-100">
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
                </div>

            </Layout>
        </>
    )
}