import Footer from "../components/footer"
import Head from "next/head"
import { useState } from "react";
import Header from "../components/header";
import CreateForm from "../components/create-form";
import ReportTable from '../components/report-table';
import { hours } from '../data.js';


export default function Home() {

  const [standReports, setStandReports] = useState([]);

  function handleCreate(standInfo){
    setStandReports([...standReports, standInfo]);
  }

  return (

    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="p-8 w-2/3 mx-auto">
        <CreateForm onCreate={handleCreate} />
        <ReportTable reports={standReports} hours={hours} />


      </main>
      <Footer />
    </div>

  )

}





