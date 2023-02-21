import Newslist from '@/Components/Homepage/Newslist';
import { Link, Head } from '@inertiajs/react';
import React from 'react';
import Navbar from '@/Components/Homepage/Navbar';
import Footer from '@/Components/Homepage/Footer';
import Paginator from '@/Components/Homepage/Paginator';

export default function Jajal(props) {
    return (
        <div className="bg-slate-100">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="mt-4 flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4">
                <Newslist news={props.news.data} />
            </div>
            <div className="justify-center items-center flex mt-4">
                <Paginator meta={props.news.meta} />
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}