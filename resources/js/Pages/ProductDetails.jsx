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
  <section className="blog_area single-post-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 posts-list">
          <div className="single-post">
            <div className="feature-img">
              <img  className="img-fluid" width={'400px'} src={"../images/" + products.image} alt='no img' />
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


          {/* Pro Content  */}
          <h1> Pro Content </h1>
          <div className="row" style={{ marginTop: '60px', marginBottom: '60px' }}>
      <div className="col-3 border border-success p-4">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {products.lesson.map((lesson, index) => (
            <a
              key={index}
              className={`nav-link border border-info ${index === 0 ? 'active' : ''}`}
              id={`v-pills-${index}-tab`}
              data-toggle="pill"
              href={`#v-pills-${index}`}
              role="tab"
              aria-controls={`v-pills-${index}`}
              aria-selected={index === 0 ? 'true' : 'false'}
            >
              {lesson.name}
            </a>
          ))}
        </div>
      </div>
      <div className="col-9">
        <div className="tab-content border border-info p-4" id="v-pills-tabContent">
        {products.lesson.map((lesson, index) =>  (
    <div key={index}>
      <h3>{lesson.name}</h3>
      {lesson.description ? (
        <p>{lesson.description}</p>
      ) : (
        <p>No description available</p>
      )}
      {lesson.video && (
        <div>
          <iframe
            width="400"
            height="315"
            src={lesson.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  )
)}

        </div>
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
            <aside className="single_sidebar_widget post_category_widget">
              <h4 className="widget_title" style={{color: '#2d2d2d'}}>Topics</h4>
              <ul className="list cat-list">
 
              <ul>
        {products.lesson.map(lesson => (
          <li key={lesson.id}> {lesson.name} </li>
        ))}
      </ul>
            
          
              
               
              </ul>
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