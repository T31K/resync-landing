import { Link } from 'react-router-dom';
import { FaMoneyBillWave } from 'react-icons/fa';
import { useState } from 'react';

import Check from './Check.jsx';

function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="relative pb-[100px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-8">
            <FaMoneyBillWave className="text-7xl hover:text-green-300 inline-block text-center mb-3" />
            <div className="flex flex-col justify-center items-center">
              <h1 className="h2 mb-4">If you think, you'd pay for this product!</h1>
              <Link
                to="https://harmonize.lemonsqueezy.com/checkout/buy/2b56c8b4-abfa-41b3-8ae7-d9aa9a4165be"
                target="_blank"
                className="group relative inline-flex !mt-5 items-center overflow-hidden rounded-2xl bg-[#8E2DE2] py-4 px-5 text-lg font-bold outline-none transition duration-300 focus:ring-[0.1875rem] focus:ring-purple-400 hover:darken-50  text-orange-50 shadow-2xl shadow-stone-800/30 mb-5 md:mb-0 w-[250px] items-center flex text-center justify-center"
              >
                <div className="ease translate-x-0 transition">Pre Order for $5 now</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
