import React from 'react';

const Invoice = ({orders}) => {
    console.log(orders);

    return (
        <div>
            <div className="container">

    <div className="">
      <h1 className=""> {orders[0].student_name} Invoice</h1>
    </div>
        <div className="">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Course Name</th>
                <th scope="col">Purchase Date</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Price</th>
                <th scope="col">Transaction ID</th>
              </tr>
            </thead>
            <tbody>
               
        {
            orders.map( item =>    <tr>
                <th> #</th>
                <td>{item.product_name} </td>
                <td>{item.created_at}</td>
                <td>{item.payment}</td>
                <td>{item.price}</td>
                <td>{item.t_id}</td>
              </tr> )
        }
              </tbody>
          </table>
        </div>
    
    
    <footer>
      <h2 className='text-xl mt-5'>  @2024 - EKTU KHANI TECH</h2>
    </footer>

</div>

        </div>
    );
};

export default Invoice;