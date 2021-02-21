import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Products";

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // fetch all products from the server
        const fetchProducts = async () => {
            const res = await fetch("api/products");
            const data = await res.json();
            // set the products state to the returned data
            setProducts(data);
        };
        fetchProducts();
    }, []);
    return (
        <>
            <h1>LatestProducts</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
