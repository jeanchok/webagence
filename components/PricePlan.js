import React from "react";
import Link from "next/link";

const PricePlan = ({ pricePlan }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="p-8 flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {pricePlan.title}
        </h3>
        <div className="text-4xl font-bold text-[#FF6060] mb-4">
          {pricePlan.price}
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {pricePlan.description}
        </p>

        {pricePlan.ps && (
          <p className="text-xs text-gray-400 italic mb-4">{pricePlan.ps}</p>
        )}

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Abonnement</h4>
            <div className="text-gray-600 text-sm">
              {Array.isArray(pricePlan.subsription) ? (
                pricePlan.subsription.map((sub, index) => (
                  <p key={index}>{sub}</p>
                ))
              ) : (
                <p>{pricePlan.subsription}</p>
              )}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Hébergement</h4>
            <p className="text-gray-600 text-sm">{pricePlan.hosting}</p>
          </div>
        </div>

        {pricePlan.include && (
          <div className="border-t border-gray-100 pt-6">
            <h4 className="font-bold text-gray-900 mb-3">Inclus</h4>
            <ul className="space-y-2">
              {Array.isArray(pricePlan.include) &&
                pricePlan.include.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-600 text-sm">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item.replace(/^·\s*/, "")}
                  </li>
                ))}
            </ul>
          </div>
        )}

        {pricePlan.techno && Array.isArray(pricePlan.techno) && (
           <div className="border-t border-gray-100 pt-6">
            <h4 className="font-bold text-gray-900 mb-3">Technologies</h4>
             <ul className="space-y-2">
              {pricePlan.techno.map((tech, index) => (
                  <li key={index} className="flex items-start text-gray-600 text-sm">
                    <svg
                      className="w-5 h-5 text-[#FF6060] mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    {tech}
                  </li>
                ))}
             </ul>
           </div>
        )}
      </div>

      <div className="p-8 bg-gray-50 border-t border-gray-100 mt-auto">
         <a href="/contact" className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-[#FF6060] transition-colors duration-300">
                    Demander un devis
         </a>
      </div>
    </div>
  );
};

export default PricePlan;
