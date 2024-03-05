import Head from 'next/head';
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';
import Header from "../components/header";

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

function CookieStandForm() {

    const { user } = useAuth();
    const { createResource } = useResource();

    function handleSubmit(event) {
        event.preventDefault();
        const info = {
            location: event.target.location.value,
            minimum_customers_per_hour: parseInt(event.target.minimum.value),
            maximum_customers_per_hour: parseInt(event.target.maximum.value),
            average_cookies_per_sale: parseFloat(event.target.average.value),
            owner: user.id,
        };
        createResource(info);

    }

    return (


        <form onSubmit={handleSubmit} className='flex mx-auto '>
            <fieldset className='bg-green-200 flex flex-row mx-auto m-3 gap-8 p-4 border px-11 rounded-md border-green-500 items-center'>

                <div className='flex flex-col'>

                    <div className='flex flex-col items-center font-bold text-sm'>
                        <label htmlFor="locations" className=" text-black">ADD LOCATION</label>
                        <input placeholder='  Cookie Stand Location' name='location' className='h-8 w-full mt-2' />
                    </div>

                    <div className='flex flex-raw gap-8 mt-4'>

                        <div className='flex flex-col mr-2'>
                            <label htmlFor="locations" className=" text-black text-xs text-center p-2 font-bold pr-3 pt-4">MINUMUM CUSTOMER PER HOUR</label>
                            <input placeholder='  0' name='minimum' />
                        </div>

                        <div className='flex flex-col ml-2'>
                            <label htmlFor="locations" className=" text-black text-xs text-center p-2 font-bold pr-3 pt-4">MAXIMUM CUSTOMER PER HOUR</label>
                            <input placeholder='  0' name='maximum' />
                        </div>
                    </div>

                </div>

                <div className='flex flex-col items-center '>
                    <button className='w-full bg-green-500 text-sm rounded-sm my-4 py-3'>CREATE STAND</button>
                    <label htmlFor="locations" className="  text-black text-xs text-center p-2 font-bold pr-3 pt-4">AVERAGE COOKIES PER SALE</label>
                    <input placeholder='  0' name='average' className='w-full' />
                </div>




            </fieldset>
        </form>
    );
}

function CookieStandTable({ stands, deleteStand }) {

    return (
        <table className="my-8">
            <thead>
                <tr>
                    <th>Location</th>
                    <th>6 am</th>
                    <th>7 am</th>
                    <th>8 am</th>
                    <th>9 am</th>
                    <th>10 am</th>
                    <th>11 am</th>
                    <th>12 pm</th>
                    <th>1 pm</th>
                    <th>2 pm</th>
                    <th>3 pm</th>
                    <th>4 pm</th>
                    <th>5 pm</th>
                    <th>6 pm</th>
                    <th>7 pm</th>
                    <th>totals</th>
                </tr>
            </thead>
            <tbody>
                {stands.map(stand => (

                    <CookieStandRow key={stand.id} info={stand} deleteStand={deleteStand} />
                ))}
            </tbody>
        </table>
    );
}

function CookieStandRow({ info, deleteStand }) {

    function clickHandler() {
        deleteStand(info.id);
    }

    if (info.hourly_sales.length == 0) {
        // bunk data
        info.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    return (
        <tr>
            <td>{info.location} <button onClick={clickHandler}>[x]</button></td>
            {info.hourly_sales.map((slot,index) => <td key={index}>{slot}</td>)}
            <td>{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
        </tr>
    );
}


function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        <form onSubmit={handleSubmit} className='container mx-auto'>
            <fieldset autoComplete='off' className="mx-auto font-bold my-4 bg-green-200 p-10 flex flex-col items-center gap-2">
                <label htmlFor="username">USER NAME</label>
                <input name="username" className='w-full' placeholder=' User Name' />
                <label htmlFor="password">PASSWORD</label>
                <input type="password" name="password" className='w-full' placeholder=' password' />
                <button className='bg-green-500 rounded h-14 mt-7 hover:bg-green-700 w-full'>SIGN IN</button>
            </fieldset>
        </form>
    );
}