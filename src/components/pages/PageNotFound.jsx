import React from 'react'
import Layout from '../layout/Layout'
const PageNotFound = () => {
     return (
       <Layout title={"404 Not Found"}>
         <section className="relative z-10 pt-48 scroll h-auto bg-gray-900 font-Kanit py-[120px] w-auto">
           <div className="container mx-auto md:items-center">
             <div className=" flex">
               <div className="lg:w-full sm:max-w-full md:w-full">
                 <div className="mx-auto max-w-[400px] text-center">
                   <h2 className="mb-2 text-[50px] font-bold leading-none  text-white sm:text-[80px] md:text-[100px]">
                     404
                   </h2>
                   <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                     Oops! That page can’t be found
                   </h4>
                   <p className="mb-8 text-lg text-white">
                     The page you are looking for it maybe deleted
                   </p>
                   <a
                     href="/"
                     className="inline-block rounded-lg border hover:text-inherit border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-primary"
                   >
                     Go To Home
                   </a>
                 </div>
               </div>
             </div>
           </div>
           <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
             <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
             <div className="flex h-full w-1/3">
               <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
               <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
             </div>
             <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
           </div>
         </section>
       </Layout>
     );
      
}

export default PageNotFound