import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { INews } from '../interface'



interface Section{
    name: string, 
    link:string,
    news: Array<INews>

}




const Index_Section = (prop:Section) => {
    const {name,link}=prop
    return (
        <section className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl mt-2 border-t-2 ">
            <div className="container mx-auto px-5 ">
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <div className="mb-[60px] lg:mb-20 max-w-[510px]">
                            
                            <h2 className="
                            font-bold
                            text-3xl
                            sm:text-4xl
                            md:text-[40px]
                            text-dark
                            mb-4
                            ">
                            <Link href={`${link}`}>{name}</Link>
                            </h2>
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg" alt="image" className="w-full" />
                            </div>
                            <div>
                            <span className="
                                bg-primary
                                rounded
                                inline-block
                                text-center
                                p-1
                                text-xs
                                leading-loose
                                font-semibold
                                text-gray-500
                                mb-5
                                ">
                                Dec 22, 2023
                            </span>
                            <h3>
                                <a href="javascript:void(0)" className="
                                    font-semibold
                                    text-xl
                                    sm:text-2xl
                                    lg:text-xl
                                    xl:text-2xl
                                    mb-4
                                    inline-block
                                    text-dark
                                    hover:text-primary
                                    ">
                                Meet AutoManage, the best AI management tools
                                </a>
                            </h3>
                            <p className="text-base text-body-color">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </p>
                            </div>
                        </div>
                        {/* </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                            <img src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg" alt="image" className="w-full" />
                            </div>
                            <div>
                            <span className="
                                bg-primary
                                rounded
                                inline-block
                                text-center
                                p-1
                                text-xs
                                leading-loose
                                font-semibold
                                text-gray-500
                                mb-2
                                ">
                                Mar 15, 2023
                            </span>
                            <h3>
                                <a href="javascript:void(0)" className="
                                    font-semibold
                                    text-xl
                                    sm:text-2xl
                                    lg:text-xl
                                    xl:text-2xl
                                    mb-4
                                    inline-block
                                    text-dark
                                    hover:text-primary
                                    ">
                                How to earn more money as a wellness coach
                                </a>
                            </h3>
                            <p className="text-base text-body-color">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                            <img src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg" alt="image" className="w-full" />
                            </div>
                            <div>
                            <span className="
                                bg-primary
                                rounded
                                inline-block
                                text-center
                                p-1
                                text-xs
                                leading-loose
                                font-semibold
                                text-gray-500
                                mb-5
                                ">
                                Jan 05, 2023
                            </span>
                            <h3>
                                <a href="javascript:void(0)" className="
                                    font-semibold
                                    text-xl
                                    sm:text-2xl
                                    lg:text-xl
                                    xl:text-2xl
                                    mb-4
                                    inline-block
                                    text-dark
                                    hover:text-primary
                                    ">
                                The no-fuss guide to upselling and cross selling
                                </a>
                            </h3>
                            <p className="text-base text-body-color">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.
                            </p>
                            </div> */}
                    </div>
                </div>
            </div>
           
      </section>
    )
}



export default Index_Section
