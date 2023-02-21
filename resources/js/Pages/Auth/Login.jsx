import { Head } from '@inertiajs/react';
import Formlogin from '@/Components/Auth/Formlogin';

export default function Login({ status, canResetPassword }) {
    return (
        <>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <div className="min-h-screen flex flex-col sm:justify-center items-center bg-slate-900">
                <Formlogin />
            </div>
        </>
    );
}