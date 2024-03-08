
export default function LoginForm({ onLogin }) {
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
