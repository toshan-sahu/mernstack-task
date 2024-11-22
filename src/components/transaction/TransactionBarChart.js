import React from "react";
import './TransactionBarChart.css';


export default function TransactionBarChart() {
    return (


        <div className="container-fluid">
            <h2>Transaction Bar Chart</h2>
            <div className="row" style={{ backgroundColor: 'rgb(140, 183, 244)' }}>

                <div className="container mt-4">
                    <div className="row">

                        <div className="col-md-4 mb-3">
                            <label for="monthSelector" className="form-label" style={{ fontSize: '25px', fontWeight: 'bold' }}>Bar Chart Stats</label>
                            <select id="monthSelector" className="form-select">
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                    </div>


                    <div className="container mt-4">

                        <div className="graph-container">
                            <div className="bar" style={{ height: '240px' }}>
                                <div className="label">0-50</div>
                                <div className="count">120</div>
                            </div>
                            <div className="bar" style={{ height: '220px' }}>
                                <div className="label">51-100</div>
                                <div className="count">90</div>
                            </div>
                            <div className="bar" style={{ height: '200px' }}>
                                <div className="label">101-150</div>
                                <div className="count">75</div>
                            </div>
                            <div className="bar" style={{ height: '160px' }}>
                                <div className="label">151-200</div>
                                <div className="count">50</div>
                            </div>
                            <div className="bar" style={{ height: '180px' }}>
                                <div className="label">201-250</div>
                                <div className="count">30</div>
                            </div>
                            <div className="bar" style={{ height: '165px' }}>
                                <div className="label">201-250</div>
                                <div className="count">30</div>
                            </div>
                            <div className="bar" style={{ height: '210px' }}>
                                <div className="label">201-250</div>
                                <div className="count">30</div>
                            </div>
                            <div className="bar" style={{ height: '120px' }}>
                                <div className="label">201-250</div>
                                <div className="count">30</div>
                            </div>
                            <div className="bar" style={{ height: '100px' }}>
                                <div className="label">201-250</div>
                                <div className="count">30</div>
                            </div>
                            <div className="bar" style={{ height: '80px' }}>
                                <div className="label">201-250</div>
                                <div className="count">30</div>
                            </div>
                        </div>

                    </div>




                </div>
            </div>
        </div>
    )
}

