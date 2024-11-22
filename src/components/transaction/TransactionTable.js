import React, { useEffect, useState } from "react";

export default function TransactionTable() {
    const [mern, setMern] = useState([]); // Store the data
    const [filteredItems, setFilteredItems] = useState([]); // Store filtered data based on search
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const [itemsPerPage] = useState(10); // Set number of items per page
    const [searchTerm, setSearchTerm] = useState(""); // Track the search input

    // Fetch transaction data
    function LoadTransaction() {
        fetch("https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/roxiler.com/product_transaction.json")
            .then((response) => response.json())
            .then((data) => {
                setMern(data);
                setFilteredItems(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    // Run once when the component mounts to load the data
    useEffect(() => {
        LoadTransaction();
    }, []);

    // Handle search change
    const handleSearchChange = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue);

        // Filter the data based on the search term
        const filteredData = mern.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.price.toString().includes(searchValue)
        );

        setFilteredItems(filteredData);
        setCurrentPage(1); 
    };

    // Pagination 
    const indexOfLastItem = currentPage * itemsPerPage; 
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem); 

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total number of pages
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    return (
        <div className="table-responsive mt-3">
            <h2>Transaction Table</h2>

            <div className="row">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title, description, or price"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="col text-end"></div>
            </div>

            <table className="mt-4 table table-responsive table-hover table-danger table-striped table-bordered caption-top">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Sold</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td><span>&#x20B9;</span> {item.price}</td>
                                <td>{item.category}</td>
                                <td>{item.sold ? "Sold Out" : "Available"}</td>
                                <td><img src={item.image} className="h-50 w-50 card-img-top" alt={item.title} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* Pagination Controls */}
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => paginate(currentPage - 1)}>&laquo;</button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => paginate(currentPage + 1)}>&raquo;</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
