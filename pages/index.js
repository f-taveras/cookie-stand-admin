import Head from 'next/head';
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import CookieStandForm from "../components/CookieStandForm";
import CookieStandTable from '@/components/CookieStandTable';
import Footer from "../components/Footer";

export default function Home() {

    const { user, login } = useAuth();

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            {user ?
                <>
                    
                    <Header />
                    <CookieStandAdmin />
                    <Footer />

                </>
                :
                <LoginForm onLogin={login} />
            }

        </div>
    );
}


function CookieStandAdmin() {

    const { resources, deleteResource } = useResource();

    return (
        <>
            <CookieStandForm />
            <CookieStandTable stands={resources || []} deleteStand={deleteResource} />
        </>
    );
}





