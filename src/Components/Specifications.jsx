import React from "react";
import dataEncryption from '../assets/Specification Comp Icon/image 14.png'
import dataSeg  from '../assets/Specification Comp Icon/image 15.png'
import AuditLogs from '../assets/Specification Comp Icon/image 16.png'
import Sensitive_info from '../assets/Specification Comp Icon/image 17.png'
import Data_retention from '../assets/Specification Comp Icon/image 18.png'
import Zero_retention from '../assets/Specification Comp Icon/image 19.png'


export default function Specifications() {
  return (
    <section className="bg-white font-montserrat min-h-screen py-14 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl">

        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Security First,
            </span>
            <span className="text-gray-800"> No Training on Your Data</span>
          </h1>
          <p className="text-gray-500 font-semibold max-w-4xl mx-auto mb-10">
            Security is at the core of <span className="text-purple-600">MECHA.</span> Our platform uses robust safeguards to protect your data and <br /> preserve the confidentiality and integrity of your workspace.
          </p>
          <a
            href="#"
            className="inline-block text-sm font-bold text-purple-600 hover:underline transition mb-5"
          >
            Visit our trust center &rarr;
          </a>
        </div>
        {/* Cards Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
         
          {/* Card 1 */}
          <div className="bg-[#F6F3FE] rounded-xl shadow-sm p-6  lg:mb-20">
            <div className="">
              <img src={dataEncryption} alt="dataEncryption" loading="lazy" className="max-h-9 " />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Data encryption</h3>
            <p className="text-gray-600 font-semibold text-sm">
              Data & chats at rest is encrypted with AES-256. Data in transit is encrypted with TLS 1.3 using AES-256.
            </p>
          </div>
         
          {/* Card 2 */}
          <div className="bg-[#F6F3FE] rounded-xl shadow-sm p-6 lg:mb-20">
            <div className="">
              <img src={dataSeg} alt="dataEncryption" loading="lazy" className="max-h-9 " />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Data segregation</h3>
            <p className="text-gray-600 font-semibold text-sm">
              Data is separated by workspace and organisation using row-level access mechanisms.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#F6F3FE] rounded-xl shadow-sm p-6 lg:mb-20">
            <div className="">
              <img src={AuditLogs} alt="dataEncryption" loading="lazy" className="max-h-9 " />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Audit logs</h3>
            <p className="text-gray-600 font-semibold text-sm">
              All operations are monitored, recorded and can be analysed in great detail at any time.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-[#F6F3FE] rounded-xl shadow-sm p-6">
            <div className="">
              <img src={Sensitive_info} alt="dataEncryption" loading="lazy" className="max-h-9 " />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Redaction of sensitive information</h3>
            <p className="text-gray-600 font-semibold text-sm">
              Data & chats at rest is encrypted with AES-256. Data in transit is encrypted with TLS 1.3 using AES-256.
            </p>
          </div>
          
          {/* Card 5 */}
          <div className="bg-[#F6F3FE] rounded-xl shadow-sm p-6">
            <div className="">
              <img src={Data_retention} alt="dataEncryption" loading="lazy" className="max-h-9 " />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Custom data retention</h3>
            <p className="text-gray-600 font-semibold text-sm">
              Decide yourself how long we should retain your chat and company data.
            </p>
          </div>
         
          {/* Card 6 */}
          <div className="bg-[#F6F3FE] rounded-xl shadow-sm p-6">
             <div className="">
              <img src={Zero_retention} alt="dataEncryption" loading="lazy" className="max-h-9 " />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Zero-Retention Data Policy for LLMs</h3>
            <p className="text-gray-600 font-semibold text-sm">
              Botsonic only uses models where the input data is not used for re-training of the models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
