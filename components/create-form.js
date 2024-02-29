export default function CreateForm(props) {

    function handleSubmit(event) {
        event.preventDefault();
        props.onCreate({
            id: event.target.locations.value,
            location: event.target.locations.value,
            minCustomers: parseInt(event.target.minCustomers.value),
            maxCustomers: parseInt(event.target.maxCustomers.value),
            avgCookiesPerSale: parseFloat(event.target.avgCookies.value),
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
        });
        event.target.reset();
    }

    return (


        <div className="flex flex-col items-center">
            <div className="bg-green-500 p-10 pt-5 rounded-lg shadow-lg mx-auto">
                <h1 className="text-2xl pb-5 text-black-50 text-center">Create Cookie Stand</h1>

                <form onSubmit={handleSubmit}>

                    <div className="flex mb-3">
                        <label htmlFor="locations" className=" text-black pr-3 pt-4">Locations</label>
                        <input type="text" name="locations" id="locations" className="mt-3 p-0 w-full  border-green-700 " placeholder=" Enter location" />
                    </div>

                    <div className="flex gap-4 h-auto">

                        <fieldset className="mt-3 bg-green-300  px-2 p-2 text-center rounded-md">
                            <label htmlFor="minCustomers" className="text-black ">Minimum Customers per Hour</label>
                            <input type="number" name="minCustomers" className="items-center mt-1 p-2  w-full rounded-sm border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter minimum customers" />
                        </fieldset>

                        <fieldset className="mt-4 bg-green-300  px-2 p-2 text-center rounded-md">
                            <label htmlFor="maxCustomers" className="text-black">Maximum Customers per Hour</label>
                            <input type="number" name="maxCustomers" className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter maximum customers" />
                        </fieldset>

                        <fieldset className="mt-4 bg-green-300  px-2 p-2 text-center rounded-md">
                            <label htmlFor="avgCookies" className="text-black">Average Cookies per Sale</label>
                            <input type="number" name="avgCookies" step="0.01" className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter average cookies" />
                        </fieldset>

                        <fieldset className="mt-6">
                            <button type="submit" className="flex p-7  bg-green-700">
                                Submit
                            </button>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    );
}