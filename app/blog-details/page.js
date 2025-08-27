
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogDetails() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="blog Details">
                <div>
                    <div className="blog-page-two pt-100 rpt-70">
                        <div className="container">
                            <div className="row gap-50">
                                <div className="col-lg-8">
                                    <div className="blog-details-content wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <Link href="#" className="category">Business</Link>
                                            <img src="/assets/images/blog/blog-standard1.jpg" alt="Blog" />
                                        </div>
                                        <div className="content">
                                            <ul className="blog-meta">
                                                <li><i className="far fa-calendar-alt" /> <Link href="#">02 Apr 2021</Link></li>
                                                <li><i className="fal fa-comments" /> <Link href="#">Coments (03)</Link></li>
                                            </ul>
                                            <h4><Link href="/blog-details">The whimsically named Egg Canvas brainchild </Link></h4>
                                        </div>
                                        <p>he whimsically named Egg Canvas is the brainchild of Erica Choi, a design director and photo grapher based in York. Why the name “Egg Canvas Erica was inspired by her Korean childhood nickname, which means egg, while “canvas” medium with wh art is created. “Egg Canvas therefore, is her life—creating beautiful things each day a blank canvas.</p>
                                        <p>We have covered many special events such as fireworks, fairs, parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum rhon cus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo fun consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interd enim. Vivamus fauc ex sed nibh egestas elementum. Mauris et bibendum</p>
                                        <blockquote>
                                            Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results
                                            <span className="blockquote-footer">John Mehedii</span>
                                        </blockquote>
                                        <h4>Let our investment management team</h4>
                                        <p>We have covered many special events such as fireworks, fairs, parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.Lorem ipsum dolor sit amet, consectetur adipiscing elit. vestibulum rhoncus, dolor eget viverra pretium, dolor ellus aliquet nunc,</p>
                                    </div>
                                    <div className="tag-share py-5 wow fadeInUp delay-0-2s">
                                        <div className="item">
                                            <b>Tags: </b>
                                            <div className="tag-coulds">
                                                <Link href="/blog">Business</Link>
                                                <Link href="/blog">Design</Link>
                                                <Link href="/blog">apps</Link>
                                                <Link href="/blog">data</Link>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <b>Share: </b>
                                            <div className="social-style-one">
                                                <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="#"><i className="fab fa-twitter" /></Link>
                                                <Link href="#"><i className="fab fa-linkedin-in" /></Link>
                                                <Link href="#"><i className="fab fa-instagram" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <h4 className="comment-title mt-50 wow fadeInUp delay-0-2s">Post Author</h4>
                                    <div className="admin-comment mt-35 wow fadeInUp delay-0-2s">
                                        <div className="author-thumb">
                                            <img src="/assets/images/blog/admin-author.png" alt="Author" />
                                        </div>
                                        <div className="content">
                                            <h6>Cameron Williamson</h6>
                                            <span className="designation">CEO, Business Co</span>
                                            <p>“Good Time is very good in what they're doing more than happy to challenge and push you to think about your decisions both from usability design standpoints.”</p>
                                        </div>
                                    </div>
                                    <h4 className="comment-title mt-70 mb-35 wow fadeInUp delay-0-2s">leave a Comment</h4>
                                    <div className="contact-content-part style-two comment-form wow fadeInUp delay-0-2s">
                                        <form action="#" method="post">
                                            <div className="form-group">
                                                <label htmlFor="name"><i className="far fa-user" /></label>
                                                <input type="text" id="name" name="name" className="form-control" placeholder="Your Name*" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email"><i className="far fa-envelope" /></label>
                                                <input type="email" id="email" name="email" className="form-control" placeholder="Email Address*" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="message"><i className="far fa-edit" /></label>
                                                <textarea name="message" id="message" className="form-control" rows={4} placeholder="Enter Your Messege here" required />
                                            </div>
                                            <div className="condition">
                                                <input id="conditions" type="checkbox" />
                                                <label htmlFor="conditions">I agree that my submitted data is being collected and stored.*</label>
                                            </div>
                                            <button type="submit" className="theme-btn style-two"><i className="fal fa-paper-plane" /> Get In Touch</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-7 col-sm-9">
                                    <div className="main-sidebar rmt-65">
                                        <div className="widget widget-author wow fadeInUp delay-0-4s">
                                            <img src="/assets/images/widgets/author.jpg" alt="Author" />
                                            <h6>Rosalina D. Willaim</h6>
                                            <span className="designation">Blogger/Photographer</span>
                                            <p>he whimsically named Egg Canvas is the design director and photographer in New York. Why the nam</p>
                                            <div className="social-style-one">
                                                <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="#"><i className="fab fa-twitter" /></Link>
                                                <Link href="#"><i className="fab fa-instagram" /></Link>
                                                <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                            </div>
                                        </div>
                                        <div className="widget widget-search wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">search here</h5>
                                            <form action="#" className="default-search-form">
                                                <input type="text" placeholder="search here..." required />
                                                <button type="submit" className="searchbutton far fa-search" />
                                            </form>
                                        </div>
                                        <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">Recent Blog</h5>
                                            <ul>
                                                <li>
                                                    <div className="image">
                                                        <img src="/assets/images/widgets/blog1.jpg" alt="Blog" />
                                                    </div>
                                                    <div className="content">
                                                        <Link className="date" href="#"><i className="far fa-calendar-alt" /> Jun 23,2023</Link>
                                                        <h6><Link href="/blog-details">Budget Issues Force The Our To Become</Link></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image">
                                                        <img src="/assets/images/widgets/blog2.jpg" alt="Blog" />
                                                    </div>
                                                    <div className="content">
                                                        <Link className="date" href="#"><i className="far fa-calendar-alt" /> Jun 23,2023</Link>
                                                        <h6><Link href="/blog-details">The Best Products That Shape Fashion</Link></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image">
                                                        <img src="/assets/images/widgets/blog3.jpg" alt="Blog" />
                                                    </div>
                                                    <div className="content">
                                                        <Link className="date" href="#"><i className="far fa-calendar-alt" /> Jun 23,2023</Link>
                                                        <h6><Link href="/blog-details">Budget Issues Force The Our To Become</Link></h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-category wow fadeInUp delay-0-4s">
                                            <h5 className="widget-title">Catagories</h5>
                                            <ul>
                                                <li><Link href="/blog">Graphic Design <span>03</span></Link></li>
                                                <li><Link href="/blog">Web Development <span>03</span></Link></li>
                                                <li><Link href="/blog">Digital Marketing <span>03</span></Link></li>
                                                <li><Link href="/blog">UI/UX Development <span>03</span></Link></li>
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
                                                <Link href="/blog">landing</Link>
                                                <Link href="/blog">coding</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog Page Two Area end */}
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