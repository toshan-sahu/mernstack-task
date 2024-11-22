import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import TransactionTable from "./TransactionTable";
import TransactionStatistics from "./TransactionStatistics";
import TransactionBarChart from "./TransactionBarChart";

export default function TransactionDashboard() {
    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2 mt-2">
                <h1><a href="/" style={{ textDecoration:'none', color: 'white'}}>Transaction Dashboard</a></h1>
            </header>
            <section className="mt-2 row">
                <nav className="col-3">
                    <div className="mb-2">
                        <Link className="btn btn-danger w-100" to="/table">Transaction Table</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="btn btn-danger w-100" to="/statistics">Transaction Statistics</Link>
                    </div>
                    <div className="mb-2">
                        <Link className="btn btn-danger w-100" to="/barchart">Transaction Bar Chart</Link>
                    </div>
                </nav>
                <main className="col-9">
                    <Routes>
                        <Route path="table" element={<TransactionTable />} />
                        <Route path="statistics" element={<TransactionStatistics />} />
                        <Route path="barchart" element={<TransactionBarChart />} />
                    </Routes>
                </main>
            </section>
        </div>
    );
}
