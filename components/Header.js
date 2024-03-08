import Link from 'next/link';


export default function Header({ user, onLogout }) {
    return (
      <header className="flex justify-between p-4 text-gray-800 bg-green-500">
        <h1 className="text-2xl font-bold ml-14">Cookie Stand Admin</h1>
        <nav>
            {user ? (
                <>
                    <span className="mr-4">Welcome, {user.email}</span>
                    <button onClick={onLogout} className="bg-green-700 p-1 px-2 text-white rounded-md hover:bg-gray-400">Sign Out</button>
                </>
            ) : (
                <Link href="/overview">Overview</Link>
            )}
        </nav>
      </header>
    );
}

