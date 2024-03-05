// components/CookieStandForm.js
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';

export default function CookieStandForm() {
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
                        <input placeholder='  Cookie Stand Location' name='location' className='h-8 w-full mt-2 font-bold' />
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
