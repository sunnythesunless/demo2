import React, { useState } from 'react';
import { CATALOG_PRODUCTS } from '../data/mockData';
import { CatalogItem } from '../types';

interface ShopCatalogScreenProps {
  onSelectProduct: (product: CatalogItem) => void;
  onNavigateToCheckout: () => void;
  onNavigateToRFQ: () => void;
}

export const ShopCatalogScreen: React.FC<ShopCatalogScreenProps> = ({
  onNavigateToCheckout,
  onNavigateToRFQ,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Healthcare', 'Corporate', 'Industrial', 'Culinary', 'Security'];

  const filteredProducts = CATALOG_PRODUCTS.filter((product) => {
    const matchesCat = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full pb-10 max-w-2xl mx-auto px-4 py-3 gap-4">
      {/* Wholesale Search and Filter Strip */}
      <div className="bg-white rounded-xl p-3 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] flex flex-col gap-2.5">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#45464d] text-[20px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search uniforms, HSN codes, fabric specs..."
            className="w-full pl-10 pr-4 py-2 bg-[#eff4ff] text-[#0b1c30] text-[13px] rounded-lg border border-[#dce9ff] focus:outline-none focus:bg-white focus:border-[#000000] transition-colors"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#000000] text-white shadow-xs'
                  : 'bg-[#eff4ff] text-[#45464d] hover:bg-[#e5eeff] hover:text-[#0b1c30]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Institutional Highlights Banner */}
      <div className="bg-gradient-to-r from-[#131b2e] to-[#213145] rounded-xl p-4 text-white flex items-center justify-between shadow-md">
        <div className="flex flex-col min-w-0 pr-2">
          <span className="text-[10px] font-bold text-[#ffdcc3] uppercase tracking-wider">
            Institutional Procurement
          </span>
          <h2 className="text-[16px] font-bold mt-0.5">
            Verified B2B Tier Pricing & GST Credit
          </h2>
          <p className="text-[12px] text-[#bec6e0] mt-0.5">
            Direct factory dispatch with computer-controlled embroidery.
          </p>
        </div>
        <button
          type="button"
          onClick={onNavigateToRFQ}
          className="px-3.5 py-2 bg-[#fe932c] hover:bg-[#ffb77d] text-[#2f1500] text-[11px] font-extrabold rounded-[4px] shadow-sm shrink-0 whitespace-nowrap transition-transform active:scale-95"
        >
          Custom RFQ
        </button>
      </div>

      {/* Product List Grid */}
      <div className="flex flex-col gap-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl p-3.5 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] flex flex-col gap-3"
          >
            <div className="flex gap-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover bg-[#eff4ff] border border-[#dce9ff] shrink-0"
              />

              <div className="flex flex-col flex-1 min-w-0 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] font-bold uppercase text-[#904d00] bg-[#ffdcc3] px-1.5 py-0.5 rounded-[2px]">
                      {product.category}
                    </span>
                    <span className="text-[11px] text-[#45464d] font-semibold">
                      MOQ: {product.minOrder} units
                    </span>
                  </div>

                  <h3 className="text-[15px] font-bold text-[#0b1c30] leading-snug mt-1 line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-[11px] text-[#45464d] line-clamp-2 mt-0.5">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-[16px] font-extrabold text-[#0b1c30]">
                    ₹{product.bulkTierPrice}
                  </span>
                  <span className="text-[11px] text-[#45464d] font-semibold">/ unit in bulk</span>
                  <span className="text-[11px] text-[#45464d] line-through ml-auto">
                    ₹{product.retailPrice}
                  </span>
                </div>
              </div>
            </div>

            {/* Feature tags */}
            <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-[#e5eeff]">
              <span className="text-[10px] text-[#45464d] font-semibold bg-[#eff4ff] px-2 py-0.5 rounded">
                {product.fabric}
              </span>
              {product.features.slice(0, 2).map((feat, idx) => (
                <span
                  key={idx}
                  className="text-[10px] text-[#0b1c30] bg-[#e5eeff] px-1.5 py-0.5 rounded font-medium"
                >
                  {feat}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2 pt-0.5">
              <button
                type="button"
                onClick={onNavigateToCheckout}
                className="py-2 px-3 rounded-[4px] bg-[#000000] text-white text-[12px] font-bold hover:bg-[#1e293b] active:scale-95 transition-all text-center flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">shopping_cart_checkout</span>
                <span>Direct Checkout</span>
              </button>
              <button
                type="button"
                onClick={onNavigateToRFQ}
                className="py-2 px-3 rounded-[4px] bg-[#e5eeff] text-[#0b1c30] text-[12px] font-bold hover:bg-[#dce9ff] active:scale-95 transition-all text-center flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px] text-[#904d00]">edit_note</span>
                <span>Customize & RFQ</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
