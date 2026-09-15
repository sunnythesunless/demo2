import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { TrackingScreen } from './components/TrackingScreen';
import { CheckoutScreen } from './components/CheckoutScreen';
import { OrderSuccessScreen } from './components/OrderSuccessScreen';
import { BulkRFQScreen } from './components/BulkRFQScreen';
import { ShopCatalogScreen } from './components/ShopCatalogScreen';
import { CorporateScreen } from './components/CorporateScreen';

import { TaxInvoiceModal } from './components/TaxInvoiceModal';
import { RescheduleDockModal } from './components/RescheduleDockModal';
import { HelpdeskModal } from './components/HelpdeskModal';
import { PackingSlipModal } from './components/PackingSlipModal';
import { NotificationDrawer } from './components/NotificationDrawer';
import { ProfileModal } from './components/ProfileModal';

import { TabType, SubScreen, CatalogItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('checkout-orders');
  const [subScreen, setSubScreen] = useState<SubScreen>('checkout');

  // Modal visibility states
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [isHelpdeskOpen, setIsHelpdeskOpen] = useState(false);
  const [isPackingSlipOpen, setIsPackingSlipOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Screen title computation
  const getScreenTitle = () => {
    if (activeTab === 'shop-catalog') return 'Uniform Catalog & Segments';
    if (activeTab === 'bulk-rfq') return 'Request Custom Bulk Uniforms';
    if (activeTab === 'corporate-account') return 'Institutional Account';

    // inside checkout-orders
    if (subScreen === 'checkout') return 'Institutional Order Checkout';
    if (subScreen === 'order-success') return 'Order Confirmation';
    if (subScreen === 'consignment-tracking') return 'Consignment Dispatch';
    return 'Everbright Uniforms B2B';
  };

  const handleBack = () => {
    if (activeTab === 'checkout-orders') {
      if (subScreen === 'consignment-tracking') {
        setSubScreen('order-success');
      } else if (subScreen === 'order-success') {
        setSubScreen('checkout');
      } else {
        setActiveTab('shop-catalog');
      }
    } else {
      setActiveTab('checkout-orders');
    }
  };

  const handleSelectProduct = (_product: CatalogItem) => {
    setActiveTab('checkout-orders');
    setSubScreen('checkout');
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-[#ffdcc3] selection:text-[#2f1500]">
      {/* Top Universal Enterprise Navigation Bar */}
      <Header
        activeTab={activeTab}
        subScreen={subScreen}
        title={getScreenTitle()}
        onBack={handleBack}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Screen View Container */}
      <main className="flex-1 flex flex-col w-full overflow-x-hidden">
        {activeTab === 'shop-catalog' && (
          <ShopCatalogScreen
            onSelectProduct={handleSelectProduct}
            onNavigateToCheckout={() => {
              setActiveTab('checkout-orders');
              setSubScreen('checkout');
            }}
            onNavigateToRFQ={() => setActiveTab('bulk-rfq')}
          />
        )}

        {activeTab === 'bulk-rfq' && (
          <BulkRFQScreen
            onOpenCatalog={() => setActiveTab('shop-catalog')}
            onOpenHelpdesk={() => setIsHelpdeskOpen(true)}
          />
        )}

        {activeTab === 'corporate-account' && (
          <CorporateScreen
            onOpenInvoice={() => setIsInvoiceOpen(true)}
            onOpenHelpdesk={() => setIsHelpdeskOpen(true)}
            onNavigateToTracking={() => {
              setActiveTab('checkout-orders');
              setSubScreen('consignment-tracking');
            }}
          />
        )}

        {activeTab === 'checkout-orders' && (
          <>
            {subScreen === 'checkout' && (
              <CheckoutScreen
                onProceedToSuccess={() => setSubScreen('order-success')}
                onNavigateToTracking={() => setSubScreen('consignment-tracking')}
                onNavigateToRFQ={() => setActiveTab('bulk-rfq')}
              />
            )}

            {subScreen === 'order-success' && (
              <OrderSuccessScreen
                onTrackDispatch={() => setSubScreen('consignment-tracking')}
                onReturnCatalog={() => setActiveTab('shop-catalog')}
                onOpenInvoice={() => setIsInvoiceOpen(true)}
              />
            )}

            {subScreen === 'consignment-tracking' && (
              <TrackingScreen
                onOpenInvoice={() => setIsInvoiceOpen(true)}
                onOpenReschedule={() => setIsRescheduleOpen(true)}
                onOpenHelpdesk={() => setIsHelpdeskOpen(true)}
                onOpenPackingSlip={() => setIsPackingSlipOpen(true)}
                onBackToCatalog={() => setActiveTab('shop-catalog')}
              />
            )}
          </>
        )}
      </main>

      {/* Fixed Industrial Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'checkout-orders' && subScreen === 'order-success') {
            // keep current subscreen or allow browsing
          }
        }}
        badgeCount={1}
      />

      {/* Interactive Modal Dialogs & Sheets */}
      <TaxInvoiceModal
        isOpen={isInvoiceOpen}
        onClose={() => setIsInvoiceOpen(false)}
      />

      <RescheduleDockModal
        isOpen={isRescheduleOpen}
        onClose={() => setIsRescheduleOpen(false)}
      />

      <HelpdeskModal
        isOpen={isHelpdeskOpen}
        onClose={() => setIsHelpdeskOpen(false)}
      />

      <PackingSlipModal
        isOpen={isPackingSlipOpen}
        onClose={() => setIsPackingSlipOpen(false)}
      />

      <NotificationDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onNavigateToTracking={() => {
          setActiveTab('checkout-orders');
          setSubScreen('consignment-tracking');
        }}
        onNavigateToInvoice={() => setIsInvoiceOpen(true)}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onNavigateToCorporate={() => setActiveTab('corporate-account')}
        onNavigateToInvoice={() => setIsInvoiceOpen(true)}
      />
    </div>
  );
}
