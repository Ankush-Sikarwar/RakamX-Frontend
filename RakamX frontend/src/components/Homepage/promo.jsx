import React from "react";

const RakamxPromo = () => {
  return (
    <div className="w-full flex justify-center items-center bg-black  py-12 px-6">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg bg-black mb-25 max-w-5xl w-full">
        
       
        <div className="md:w-1/2 p-8 text-white flex flex-col justify-center gap-4 bg-[#0d1117]">
          <h2 className="text-3xl font-bold">
            Concerned About Team Bandwidth?
          </h2>
          <p className="text-sm text-gray-400">Integrate in just 2 hours!</p>
          <div className="flex gap-4 mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md">
            <a href="/signup">Get Started</a>
            </button>
            <button  className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-md">
            <a href="/contact">  I want to learn more</a>
            </button>
          </div>
        </div>

     
        <div className="md:w-1/2 bg-[#0d1117] text-white font-mono text-sm p-6 overflow-auto rounded-br-2xl rounded-tr-2xl border-l border-gray-700">
          <pre className="whitespace-pre-wrap leading-6">
            <code>
              <span className="text-gray-400">1 </span>
              <span className="text-blue-300">const</span>{" "}
              <span className="text-white">rakamx</span>{" "}
              = <span className="text-blue-300">require</span>
              (<span className="text-yellow-300">'rakamx'</span>)
              (<span className="text-yellow-300">'sk_test_BQokijOvBi2'</span>);
              {"\n"}
              <span className="text-gray-400">2 </span>
              {"\n"}
              <span className="text-gray-400">3 </span>
              <span className="text-blue-300">await</span>{" "}
              rakamx.paymentIntents.
              <span className="text-blue-300">create</span>({"{\n"}
              <span className="text-gray-400">4 </span>
              &nbsp;&nbsp;amount: <span className="text-yellow-400">2000</span>,
              {"\n"}
              <span className="text-gray-400">5 </span>
              &nbsp;&nbsp;currency: <span className="text-yellow-300">'inr'</span>
              {"\n"}
              <span className="text-gray-400">6 </span>
              {"}"})
            </code>
          </pre>
        </div>

      </div>
    </div>
  );
};

export default RakamxPromo;
