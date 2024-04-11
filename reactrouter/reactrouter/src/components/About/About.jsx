import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is car ried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            If you want to build a new app or a new website fully with React, we recommend picking one of the React-powered frameworks popular in the community.

                            You can use React without a framework, however we’ve found that most apps and sites eventually build solutions to common problems such as code-splitting, routing, data fetching, and generating HTML. These problems are common to all UI libraries, not just React.


                        </p>
                        <p className="mt-4 text-gray-600">
                            These frameworks support all the features you need to deploy and scale your app in production and are working towards supporting our full-stack architecture vision. All of the frameworks we recommend are open source with active communities for support, and can be deployed to your own server or a hosting provider. If you’re a framework author interested in being included on this list,
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}