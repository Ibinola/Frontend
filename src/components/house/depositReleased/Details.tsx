import React from "react";
import { FaFilePdf } from "react-icons/fa";

const Details: React.FC = () => {
  return (
    <div className="col-span-8 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-black mb-4">
        Deposit / Escrow Released
      </h2>

      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">
            Escrow Justification
          </h3>
          <button className="bg-red-200 text-red-700 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-red-300 flex items-center gap-2">
            <FaFilePdf className="w-4 h-4" />
            PDF
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2 border border-gray-300 rounded-lg p-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Beneficiary Information
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            <strong>Name:</strong> John Smith
          </p>
          <p className="text-sm text-gray-700">
            <strong>Wallet Address:</strong> MJE...XN32
          </p>
          <p className="text-sm text-gray-700">
            <strong>Released date:</strong> 20 January 2025
          </p>
          <p className="text-sm text-gray-700">
            <strong>Deposit amount:</strong> $4,000
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6">
            Beneficiary contact
          </h3>
          <p className="text-sm text-gray-700 mt-2">
            <strong>Phone:</strong> +506 6849-5321
          </p>
          <p className="text-sm text-gray-700">
            <strong>Email Address:</strong> john_st@gmail.com
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Claims</h3>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-4 mt-2 text-sm text-gray-700"
            rows={8}
            placeholder="Add claim justification here..."
          />
          <div className="flex justify-end gap-4 mt-4">
            <button className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-800">
              Clean
            </button>
            <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-600">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;