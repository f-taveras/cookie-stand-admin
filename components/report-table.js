export default function ReportTable(props) {

    if (props.reports.length === 0) {
        return <h2 className="mt-8 text-2x1">There are no things where you left none</h2>
    }

    const headers = ['locations', ...props.hours, 'Totals'];





    return (
        <table className="w-full mt-5 mx-auto  rounded-lg ">
            <HeaderRow headerValues={headers} />
            <tbody>
                {props.reports.map(report => {
                    return <ReportRow key={report._id} report={report} />
                })}
            </tbody>

            <FooterRow reports={props.reports} />
        </table>
    )
}


function HeaderRow({ headerValues }) {
    return (
        <thead>
            <tr className="bg-green-500">
                {headerValues.map((header, indx) => {

                    let className = "";
                    if (indx === 0) {
                        className = "rounded-tl";
                    } else if (indx === headerValues.length - 1) {
                        className = " rounded-tr ";

                    }
                    return <th className={className} key ={header}>{header}</th>

                }
                )}
            </tr>
        </thead>
    )
}


function ReportRow({ report }) {

    const total = report.hourly_sales.reduce((sum, value) => sum + value);

    const values = [report.location, ...report.hourly_sales, total];

    return (

        <tr className="odd:bg-green-400 text-center">
            {values.map((value, i) => <td className="pl-4 border border-green-900 text-left" key={i}>{value}</td>)}
        </tr>
    );
}

function FooterRow({ reports }) {

    const cellValues = ['Totals'];

    let megaTotal = 0;

    for (let i in reports[0].hourly_sales) {

        let hourlyTotal = 0;

        for (let report of reports) {
            hourlyTotal += report.hourly_sales[i];
        }

        cellValues.push(hourlyTotal);

        megaTotal += hourlyTotal;
    }

    cellValues.push(megaTotal);

    return (
        <tfoot className="bg-green-500">
            <tr>
                {cellValues.map((value, index) => {
                    let className = "border border-green-900  ";

                    if (index === 0) {
                        className += " rounded-bl";
                    } else if (index === cellValues.length - 1) {
                        className += " rounded-br";
                    }


                    return <th className={className} key={index}>{value}</th>;
                })}
            </tr>
        </tfoot>
    );
}