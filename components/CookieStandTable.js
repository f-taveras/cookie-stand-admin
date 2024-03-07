export default function CookieStandTable({ stands, deleteStand }) {
    return (
        <table className="mx-auto my-8">
            <thead className="text-left bg-green-500 text-black border border-black">
                <tr>
                    <th className="border border-gray-500">Location</th>
                    <th className="border border-gray-500">6am</th>
                    <th className="border border-gray-500">7am</th>
                    <th className="border border-gray-500">8am</th>
                    <th className="border border-gray-500">9am</th>
                    <th className="border border-gray-500">10am</th>
                    <th className="border border-gray-500">11am</th>
                    <th className="border border-gray-500">12pm</th>
                    <th className="border border-gray-500">1pm</th>
                    <th className="border border-gray-500">2pm</th>
                    <th className="border border-gray-500">3pm</th>
                    <th className="border border-gray-500">4pm</th>
                    <th className="border border-gray-500">5pm</th>
                    <th className="border border-gray-500">6pm</th>
                    <th className="border border-gray-500">7pm</th>
                    <th className="border border-gray-500">Totals</th>
                </tr>
            </thead>
            <tbody>
                {stands.map((stand, index) => (
                    <CookieStandRow
                        key={stand.id}
                        info={stand}
                        deleteStand={deleteStand}
                        index={index} // Pass the index to CookieStandRow for color alternation
                    />
                ))}
            </tbody>

            <FooterRow reports={stands} />
        </table>
    );
}

function CookieStandRow({ info, deleteStand, index }) {
    function clickHandler() {
        deleteStand(info.id);
    }

    if (info.hourly_sales.length === 0) {
        info.hourly_sales = Array(14).fill(0); // Simplified way to fill the array
    }

    // Determine row color based on the index for alternating colors
    const rowColor = index % 2 === 0 ? 'bg-green-300' : 'bg-green-400';

    return (
        <tr className={`${rowColor} text-left text-black`}>
            <td className="text-left font-medium pl-3 pr-14 border border-gray-500" >{info.location} <button onClick={clickHandler}>

                <img src="public/clear.png" alt="Delete" className="h-4 w-4"  />
            </button></td>
            {info.hourly_sales.map((slot, index) => <td className="border border-gray-500 px-5" key={index}>{slot}</td>)}
            <td className="border border-gray-500">{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
        </tr>
    );
}

function FooterRow({ reports }) {
    const cellValues = ['Totals'];

    // Initialize megaTotal to sum up all totals.
    let megaTotal = 0;

    if (reports.length > 0 && reports[0].hourly_sales) {
        for (let i = 0; i < reports[0].hourly_sales.length; i++) {
            let hourlyTotal = 0;

            for (let report of reports) {
                // Ensure that hourly_sales exists and is an array before accessing by index.
                if (report.hourly_sales && Array.isArray(report.hourly_sales)) {
                    hourlyTotal += report.hourly_sales[i] || 0; // Add a fallback to 0 to avoid NaN errors.
                }
            }

            cellValues.push(hourlyTotal);
            megaTotal += hourlyTotal;
        }
    }

    cellValues.push(megaTotal);

    return (
        <tfoot className="bg-green-500 text-black">
            <tr>
                {cellValues.map((value, index) => {
                    let className = "border border-gray-500";

                    if (index === 0) {
                        className += " rounded-bl-lg";
                    } else if (index === cellValues.length - 1) {
                        className += " rounded-br-lg";
                    }

                    return <th className={className} key={index}>{value}</th>;
                })}
            </tr>
        </tfoot>
    );
}

