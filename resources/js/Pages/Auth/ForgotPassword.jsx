import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <div className='min-h-screen flex flex-col sm:justify-center items-center bg-slate-900'>
            <Head title="Forgot Password" />

            <div className="card w-96 bg-white p-5 shadow-xl">
                <p className="text-center text-3xl font-bold mb-4 text-black">Forgot Password</p>
                <div className="mb-4 text-sm text-gray-600">
                    Forgot your password? No problem. Just let us know your email address and we will email you a password
                    reset link that will allow you to choose a new one.
                </div>

                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <form onSubmit={submit}>
                    <TextInput
                        id="password"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full text-black"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.email} className="mt-2" />

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ml-4" processing={processing}>
                            Email Password Reset Link
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
