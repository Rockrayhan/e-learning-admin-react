import React from 'react';
import Footer from './Shared/Footer';
import { usePage } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import Header from './Shared/Header';
const ProductDetails = (props) => {
    const {products} = usePage().props
    return (
        <div>
            <Header></Header>
        <div>
  {/*? slider Area Start*/}
  <section className="slider-area2">
    <div className="">
      {/* Single Slider */}
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-11 col-md-12">
              <div className="hero__caption hero__caption2">
                <h1 data-animation="bounceIn" data-delay="0.2s">Course Details</h1>
                {/* breadcrumb Start*/}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Blog</a></li> 
                  </ol>
                </nav>
                {/* breadcrumb End */}
              </div>
            </div>
          </div>
        </div>          
      </div>
    </div>
  </section>
  {/*? Blog Area Start */}
  <section className="blog_area single-post-area section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 posts-list">
          <div className="single-post">
            <div className="feature-img">
              <img className="img-fluid" src={"../images/" + products.image} alt='no img' />
            </div>
            <div className="blog_details">
              <h2 style={{color: '#2d2d2d'}}> 
              {products.name} 
              </h2>
              <ul className="blog-info-link mt-3 mb-4">
                <li><a href="#"><i className="fa fa-user" /> Travel, Lifestyle</a></li>
                <li><a href="#"><i className="fa fa-comments" /> 03 Comments</a></li>
              </ul>
              <p className="excert">
              {products.description} 
              </p>
            </div>
          </div>

          <div className="comment-form">
            <h4>Leave a Reply</h4>
            <form className="form-contact comment_form" action="#" id="commentForm">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea className="form-control w-100" name="comment" id="comment" cols={30} rows={9} placeholder="Write Comment" defaultValue={""} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input className="form-control" name="website" id="website" type="text" placeholder="Website" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="button button-contactForm btn_1 boxed-btn">Post Comment</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog_right_sidebar">
            <aside className="single_sidebar_widget search_widget">
              <form action="#">
                <div className="form-group">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search Keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'" />
                    <div className="input-group-append">
                      <button className="btns" type="button"><i className="ti-search" /></button>
                    </div>
                  </div>
                </div>
                <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Search</button>
              </form>
            </aside>
            <aside className="single_sidebar_widget post_category_widget">
              <h4 className="widget_title" style={{color: '#2d2d2d'}}>Category</h4>
              <ul className="list cat-list">
                <li>
                  <a href="#" className="d-flex">
                    <p>Resaurant food</p>
                    <p>(37)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Travel news</p>
                    <p>(10)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Modern technology</p>
                    <p>(03)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Product</p>
                    <p>(11)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Inspiration</p>
                    <p>(21)</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="d-flex">
                    <p>Health Care</p>
                    <p>(21)</p>
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="single_sidebar_widget popular_post_widget">
              <h3 className="widget_title" style={{color: '#2d2d2d'}}>Recent Post</h3>
              <div className="media post_item">
                <img src="assets/img/post/post_1.png" alt="post" />
                <div className="media-body">
                  <a href="blog_details.html">
                    <h3 style={{color: '#2d2d2d'}}>From life was you fish...</h3>
                  </a>
                  <p>January 12, 2019</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="assets/img/post/post_2.png" alt="post" />
                <div className="media-body">
                  <a href="blog_details.html">
                    <h3 style={{color: '#2d2d2d'}}>The Amazing Hubble</h3>
                  </a>
                  <p>02 Hours ago</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="assets/img/post/post_3.png" alt="post" />
                <div className="media-body">
                  <a href="blog_details.html">
                    <h3 style={{color: '#2d2d2d'}}>Astronomy Or Astrology</h3>
                  </a>
                  <p>03 Hours ago</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="assets/img/post/post_4.png" alt="post" />
                <div className="media-body">
                  <a href="blog_details.html">
                    <h3 style={{color: '#2d2d2d'}}>Asteroids telescope</h3>
                  </a>
                  <p>01 Hours ago</p>
                </div>
              </div>
            </aside>
            <aside className="single_sidebar_widget tag_cloud_widget">
              <h4 className="widget_title" style={{color: '#2d2d2d'}}>Tag Clouds</h4>
              <ul className="list">
                <li>
                  <a href="#">project</a>
                </li>
                <li>
                  <a href="#">love</a>
                </li>
                <li>
                  <a href="#">technology</a>
                </li>
                <li>
                  <a href="#">travel</a>
                </li>
                <li>
                  <a href="#">restaurant</a>
                </li>
                <li>
                  <a href="#">life style</a>
                </li>
                <li>
                  <a href="#">design</a>
                </li>
                <li>
                  <a href="#">illustration</a>
                </li>
              </ul>
            </aside>
            <aside className="single_sidebar_widget instagram_feeds">
              <h4 className="widget_title" style={{color: '#2d2d2d'}}>Instagram Feeds</h4>
              <ul className="instagram_row flex-wrap">
                <li>
                  <a href="#">
                    <img className="img-fluid" src="assets/img/post/post_5.png" alt />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="img-fluid" src="assets/img/post/post_6.png" alt />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="img-fluid" src="assets/img/post/post_7.png" alt />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="img-fluid" src="assets/img/post/post_8.png" alt />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="img-fluid" src="assets/img/post/post_9.png" alt />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img className="img-fluid" src="assets/img/post/post_10.png" alt />
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="single_sidebar_widget newsletter_widget">
              <h4 className="widget_title" style={{color: '#2d2d2d'}}>Newsletter</h4>
              <form action="#">
                <div className="form-group">
                  <input type="email" className="form-control" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email'" placeholder="Enter email" required />
                </div>
                <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Subscribe</button>
              </form>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>



            <Footer/>
        </div>
    );
};

export default ProductDetails;