import React, { useState, useEffect } from "react";
import axios from "axios";

export default function VendorProductInfo({ poNumber }) {
        const [vendorInfo, setVendorInfo] = useState(null);
        const [productInfo, setProductInfo] = useState(null);


        useEffect(() => {
            const fetchData = async () => {
                try {
                    const vendorResponse = await axios.get(`/api/vendor?poNumber=${poNumber}`);

                    const productResponse = await axios.get(`api/product?poNumber=${poNumber}`);

                    setVendorInfo(vendorResponse.data);

                    setProductInfo(productResponse.data);
                } catch (error) {
                    console.error("error fetching data:", error);
                }
            };

            fetchData();
        }, [poNumber]);

        return (
            <div>
                { vendorInfo }
                <div>
                    <h2>Vendor Information</h2>
                    <p>Name: {vendorInfo.name}</p>
                </div>

                {productInfo} 
                <div>
                    <h2>Product Information</h2>
                    <p>Name: {productInfo.name}</p>

                </div>

            </div>
        );
}