import { Link } from "@inertiajs/react"


const Navbar = ({ user }) => {
    console.log(user)
    return (
        <div className="navbar bg-base-100 shadow-xl gap-4">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Yasa Website</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="img/profile.png" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {user ?
                            <div className="">
                                <li>
                                    <Link href={route('dashboard')} className="justify-between">
                                        Dashboard
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link href="profile">Profile</Link></li>
                                <li><Link href={route('logout')} method="post" as="button">Logout</Link></li>
                            </div>
                            :
                            <div className="">
                                <li><Link href={route('login')}>Login</Link></li>
                                <li><Link href={route('register')}>Register</Link></li>
                            </div>
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar