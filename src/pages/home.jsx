import CardComponents from "../components/cards/card";
import TableComponents from "../components/dataTable/table";
import DashboardData from "../contents/dashboard";

function Home() {

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