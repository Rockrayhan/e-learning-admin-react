import React from 'react';
import Footer from './Shared/Footer';
import { Link, usePage } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import Header from './Shared/Header';
import { useForm } from '@inertiajs/react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';

const ProductDetails = ({products,userData, ordered, pending}) => {
  const { data, setData, post } = useForm();

    const handleSubmit = (e) => {
      e.preventDefault();
      post(route('orders.store'), data);
    };
    // const {products} = usePage().props
    const { user, token } = userData;
    console.log(user.id);
    console.log(products);
    return (
        <div>
            <Header userData={userData}></Header>
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

              <h3> What You will Learn </h3> 
              <ul>
        {products.lesson.map(lesson => (
          <li style={{listStyleType:'circle'}} key={lesson.id}> {lesson.name} </li>
        ))}
      </ul>            
              </p>
            </div>
          </div>

   




{
  ordered ? (
    <div>Your contents are here</div>
  ) : pending ? (
    <div>
      <h1 className='bg-warning p-4'>Your order is on pending</h1>
    </div>
  ) : (
    <Link href={'/enroll/' + products.id}>
 <button
      type="button"
      className="btn btn-success px-4 py-3 mt-5"
      // data-toggle="modal"
      // data-target="#exampleModal"

    >
      Enroll Now
    </button>
    </Link>
   
  )
}



      {/* =======================  modal content ==================== */}

      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Enroll Now</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="enroll-content">
          <h2 className="mb-4"> Enroll Now </h2>

          <form method="POST" action={ route('orders.store') } className="mb-4">
          <input type="hidden" name="_token" value={token} />

            <div className="form-group">
              <label htmlFor="student_name">Name:</label>
              <input type="text" name="student_name" className="form-control" placeholder="Enter Your Name" defaultValue={ user.name} onChange={(e) => setData("student_name", e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="text" name="phone" className="form-control" placeholder="Enter Phone" onChange={(e) => setData("phone", e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Email:</label>
              <input type="text" name="email" className="form-control" placeholder="Enter Email" onChange={(e) => setData("email", e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="product_name">Product Name:</label>
              <input type="text" name="product_name" className="form-control" defaultValue={products.name} readOnly onChange={(e) => setData("product_name", e.target.value)}/>
            </div>

            {/* get student id  */}
            <input type="text" name="student_id" defaultValue={ user.id } /> <br />

            {/* get product id */}
            <input type="text" name="product_id" defaultValue={ products.id } />

            <div className="form-group">
              <label htmlFor="product_name">Product Price:</label>
              <input type="text" name="price" className="form-control" defaultValue={products.price } readOnly onChange={(e) => setData("price", e.target.value)}/>
            </div>
            <div className="form-group">
              <label> Make Payment at: +880 168201 1307 </label> <br />
              <div className="d-flex">
                <img src="https://lh3.googleusercontent.com/t_AmjRLX3-4Aoss0ABhG28QvdQ760Fl3h3TLicJYWjQQutrgaZXfxD8ih1K3MeF6fA" width="50%" height="80px" alt />
                <img src="https://www.logodee.com/wp-content/uploads/2021/10/31.jpg" width="50%" height="80px" alt />
              </div>
              <div className="d-flex justify-around">
                <input type="radio" name="payment" defaultValue="bkash" className="form-control" onChange={(e) => setData("payment", e.target.value)}/>
                <input type="radio" name="payment" defaultValue="nagad" className="form-control" onChange={(e) => setData("payment", e.target.value)}/>
              </div>
              <div>
                <label htmlFor="product_name">Enter Your Transaction ID</label>
                <input type="text" name="t_id" className="form-control" onChange={(e) => setData("t_id", e.target.value)}/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary px-5">Enroll</button>
          </form>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


{/* pro Content Available only for Purchased one */}
{
  ordered && 
<div className='course-content'>
<Tab.Container id="left-tabs-example" defaultActiveKey="tab-1">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column border-4 border-primary p-2">
        {products.lesson.map((lesson, index) => (
          <Nav.Item key={index}>
            <Nav.Link className='bg-primary my-3' eventKey={`tab-${index + 1}`}>{lesson.name}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content className=' border-4 border-primary p-2'>
        {products.lesson.map((lesson, index) => (
          <Tab.Pane key={index} eventKey={`tab-${index + 1}`}>
            {/* <Sonnet /> */}
            
            
            <p className='text-primary'>{lesson.description}</p>

            <div>
            <iframe width="560" height="315" src={lesson.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>



}


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
              <h4 className="widget_title" style={{color: '#2d2d2d'}}>  <b>Topics</b> </h4>
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