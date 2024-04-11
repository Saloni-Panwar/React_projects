// eslint-disable-next-line no-unused-vars
import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                           welcome to the js     
                            <span className="hidden sm:block text-4xl">Course</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-300 rounded-lg hover:opacity-75"
                            to="/"
                        > 
                        &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-3 w-full sm:my-20 sm:pt-1 pt-17 h-full ">
                <img src="/images/1.png" alt="image2" />                </div>
            </aside>

            <div className="grid place-items-center sm:mt-20">
    <img src="/images/3.png" alt="image2" />
    </div>
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">React JS</h1>
        </div>
    );
}
