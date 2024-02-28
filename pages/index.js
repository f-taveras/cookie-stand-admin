import Head from "next/head"


export default function Home() {

  return (

    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <QuestionForm />

      </main>
      <Footer />
    </div>

  )

}


function Header() {
  return (
    <header className="p-4 text-4xl bg-gray-500 text-gray-50">
      <h1>Cookie Stand Admin</h1>
    </header>
  );
}


function Footer() {
  return (
    <footer className="p-4 bg-blue-200 text-gray-50 flex justify-center items-center mt-8 rounded shadow font-bold " >
      <h1>Cookie Stand Admin | FAT 2024</h1>
    </footer>
  );
}


function QuestionForm() {
  return (
    <div className="flex flex-col items-center mt-16 h-screen bg-gray-200">
      <div className="bg-green-500 p-12 rounded-lg shadow-lg w-1/2">
        <form>
          <div className="flex">
            <label htmlFor="locations" className="text-sm font-medium text-white pr-3 pt-4">Locations</label>
            <input type="text" name="locations" id="locations" className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter location" />
          </div>

          <div className="flex space-x-4">
            <div className="mt-4">
              <label htmlFor="minCustomers" className="text-sm font-medium text-white">Minimum Customers per Hour</label>
              <input type="number" name="minCustomers" id="minCustomers" className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter minimum customers" />
            </div>
            <div className="mt-4">
              <label htmlFor="maxCustomers" className="text-sm font-medium text-white">Maximum Customers per Hour</label>
              <input type="number" name="maxCustomers" id="maxCustomers" className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter maximum customers" />
            </div>
            <div className="mt-4">
              <label htmlFor="avgCookies" className="text-sm font-medium text-white">Average Cookies per Sale</label>
              <input type="number" name="avgCookies" id="avgCookies" step="0.01" className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter average cookies" />
            </div>
            <div className="mt-6">
              <button type="submit" className="w-full mt-4 py-2 px-4 border-transparent rounded-md shadow-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
