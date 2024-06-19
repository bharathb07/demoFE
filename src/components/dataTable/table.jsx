import './table.css';
function TableComponents() {



    return (


        <div className="pt-6 p-0">
            <h1 className="py-2">Leave History</h1>
            <table>
                <thead>
                    <tr >
                        <th>Name</th>
                        <th>Company</th>
                        <th>City</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Name">Rebecca Bauch</td>
                        <td data-label="Company">Daugherty-Daniel</td>
                        <td data-label="City">South Cory</td>
                        <td data-label="Created">
                            <small className="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                        </td>
                    </tr>

                </tbody>
            </table>
            {/* <div className="table-pagination">
                <div className="flex items-center justify-between">
                    <div className="buttons">
                        <button type="button" className="button active">1</button>
                        <button type="button" className="button">2</button>
                        <button type="button" className="button">3</button>
                    </div>
                    <small>Page 1 of 3</small>
                </div>
            </div> */}
        </div>

    );
}

export default TableComponents;