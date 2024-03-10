import React from 'react';

const Enroll = ({products,userData}) => {
      const { user, token } = userData;
      console.log(user.id);
      console.log(products);
    return (
        <div>
            
            <h1> Enroll Now Mr. {user.name} For the {products.name} Course </h1>

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
    );
};

export default Enroll;