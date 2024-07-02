import React, { useState, useEffect } from 'react';

import CardComponents from "../components/cards/card";
import TableComponents from "../components/dataTable/table";
import DashboardData from "../contents/dashboard";

function Home() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://demo-be-pi.vercel.app/api/getLeaveDetails',
            {
                method: 'POST',
                body: JSON.stringify({
                    userId: 2
                }),
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data, "11");
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    console.log(data, "data");
    return (
        <div className="p-4">
            <h1 className="py-2">Dashboard</h1>

            <div>
                <CardComponents DashboardData={DashboardData} />
            </div>
            <div>
                <TableComponents />
            </div>

        </div>

    );
}

export default Home;