import React from "react";

export default function TransactionStatistics() {
    return(
        
   
       <div className="container-fluid mt-3">
       <h2>Transaction Statistics</h2>
       <div className="row" style={{ backgroundColor:'rgb(140, 183, 244)'}}>
        <h3>Statistics - <select>
            <option>June</option>
            <option>July</option>
            <option>August</option>

            </select></h3>
       <div className="container p-1">
         <div className=" container-lg bg-warning-subtle">
            <div className="row" style={{ fontSize:'25px' }}>
                <div className="col">
                    <div>Total Sale</div>
                    <div>Total Sold Item</div>
                    <div>Total Not Sold Item</div>

                </div>
                <div className="col">
                <div>100000</div>
                <div>55</div>
                <div>15</div>
                </div>
            </div>
         </div>
       </div>
       </div>

       </div>
    )
}