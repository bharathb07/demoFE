import LeaveImage from "../../assets/icons/leaveIcon.png"
function CardComponents(props) {

    const data = props?.DashboardData;

    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

            {data?.map((values) => {
                return (
                    <div className="bg-white border border-gray-100 w-11/12 shadow-2xl rounded-lg">
                        <div className="p-6 text-center py-12 text-gray-500">
                            <div className="flex items-center justify-between">
                                <div className="widget-label">
                                    <h3 className="text-lg leading-tight text-gray-500">
                                        {values?.title}
                                    </h3>
                                    <h1 className="text-3xl leading-tight font-semibold text-black">
                                        {values?.leaveCount}
                                    </h1>
                                </div>
                                <span><img src={LeaveImage} alt="leave-icon" /></span>
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>

    );
}

export default CardComponents;