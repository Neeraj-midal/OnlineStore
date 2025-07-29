// 'use client';

// import React, { useState } from 'react';
// import StorePage from '../StoreDetails/page';
// import StoreMaincategory from '../maincategory/page';
// import Subchild from '../subchild/page';
// import ProductPage from '../product/page';
// import ProductImage from '../product-photo/page';
// import Productdtl from '../product-details/page';
// import { HomeIcon, ListBulletIcon, ChartBarIcon, CubeIcon, UserCircleIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';

// type ComponentKey = 'store' | 'main' | 'subchild' | 'product' | 'productImg' | 'productDtl';

// type ComponentInfo = {
//     name: string;
//     component: React.ReactNode;
//     icon: React.ComponentType<{ className?: string }>;
// };

// const components: Record<ComponentKey, ComponentInfo> = {
//     store: { name: 'Add Store', component: <StorePage />, icon: HomeIcon },
//     main: { name: 'Main Category', component: <StoreMaincategory />, icon: ListBulletIcon },
//     subchild: { name: 'Subchild', component: <Subchild />, icon: ChartBarIcon },
//     product: { name: 'Product', component: <ProductPage />, icon: CubeIcon },
//     productImg: { name: 'Product Image', component: <ProductImage />, icon: UserCircleIcon },
//     productDtl: { name: 'Product Detail', component: <Productdtl />, icon: MagnifyingGlassIcon },
// };

// export default function Dashboard() {
//     const [selectedComponent, setSelectedComponent] = useState<ComponentKey | null>(null);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const handleLinkClick = (componentKey: ComponentKey) => {
//         setSelectedComponent(componentKey);
//         if (isSidebarOpen) setIsSidebarOpen(false); 
//     };

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     return (
//         <div className="flex min-h-screen bg-gray-100">
//             {/* Sidebar */}
//             <aside
//                 className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg p-4 flex flex-col transform transition-transform duration-300 ease-in-out z-50 ${
//                     isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//                 } lg:translate-x-0`}
//             >
//                 <div className="mb-6 flex items-center space-x-2">
//                     <HomeIcon className="w-8 h-8 text-blue-600" />
//                     <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
//                 </div>
//                 <nav className="flex-1">
//                     <ul className="space-y-1">
//                         {Object.keys(components).map((key) => {
//                             const typedKey = key as ComponentKey;
//                             const Icon = components[typedKey].icon;
//                             return (
//                                 <li key={key}>
//                                     <button
//                                         onClick={() => handleLinkClick(typedKey)}
//                                         className={`w-full flex items-center p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors ${
//                                             selectedComponent === typedKey
//                                                 ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
//                                                 : ''
//                                         }`}
//                                     >
//                                         <Icon className="w-5 h-5 mr-3" />
//                                         {components[typedKey].name}
//                                     </button>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </nav>
//             </aside>

//             {/* Overlay for mobile sidebar */}
//             {isSidebarOpen && (
//                 <div
//                     className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//                     onClick={toggleSidebar}
//                 ></div>
//             )}

//             {/* Main Content */}
//             <div className=" flex-1 flex flex-col lg:ml-64">
//                 {/* Navbar */}
//                 <header className="bg-white shadow-sm p-4 flex justify-between items-center">
//                     <div className="flex items-center">
//                         <button
//                             className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
//                             onClick={toggleSidebar}
//                         >
//                             <Bars3Icon className="w-6 h-6" />
//                         </button>
//                         <div className="flex items-center w-full max-w-md ml-4">
//                             <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 mr-2" />
//                             <input
//                                 type="text"
//                                 placeholder="Search..."
//                                 className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                     </div>
//                     <div className="flex items-center">
//                         <UserCircleIcon className="w-6 h-6 text-gray-600 mr-2" />
//                         <span className="text-gray-700">User</span>
//                     </div>
//                 </header>

//                 {/* Main Content Area */}
//                 <main className="flex-1 p-6">
//                     <div className="max-w-7xl mx-auto">
//                         {selectedComponent && components[selectedComponent] ? (
//                             <div className="bg-white rounded-lg shadow-md">
//                                 <div className="bg-blue-600 text-white p-4 rounded-t-lg">
//                                     <h2 className="text-lg font-semibold">{components[selectedComponent].name}</h2>
//                                 </div>
//                                 <div className="p-6">
//                                     {components[selectedComponent].component}
//                                 </div>
//                             </div>
//                         ) : (
//                             <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
//                                 Select a component from the sidebar to preview
//                             </div>
//                         )}
//                     </div>
//                 </main>

//                 {/* Footer */}
//                 <footer className="bg-white shadow-inner p-4 text-center">
//                     <p className="text-gray-600">Dashboard Footer &copy; 2025</p>
//                 </footer>
//             </div>
//         </div>
//     );
// }

'use client';

import React, { useState } from 'react';
import StorePage from '../StoreDetails/page';
import StoreMaincategory from '../maincategory/page';
import Subchild from '../subchild/page';
import ProductPage from '../product/page';
import ProductImage from '../product-photo/page';
import Productdtl from '../product-details/page';
import { HomeIcon, ListBulletIcon, ChartBarIcon, CubeIcon, UserCircleIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';

type ComponentKey = 'store' | 'main' | 'subchild' | 'product' | 'productImg' | 'productDtl';

type ComponentInfo = {
  name: string;
  component: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
};

// Unchanged: Component mapping, including StoreMaincategory for Main Category
const components: Record<ComponentKey, ComponentInfo> = {
  store: { name: 'Add Store', component: <StorePage />, icon: HomeIcon },
  main: { name: 'Main Category', component: <StoreMaincategory />, icon: ListBulletIcon },
  subchild: { name: 'Subchild', component: <Subchild />, icon: ChartBarIcon },
  product: { name: 'Product', component: <ProductPage />, icon: CubeIcon },
  productImg: { name: 'Product Image', component: <ProductImage />, icon: UserCircleIcon },
  productDtl: { name: 'Product Detail', component: <Productdtl />, icon: MagnifyingGlassIcon },
};

export default function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentKey | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLinkClick = (componentKey: ComponentKey) => {
    setSelectedComponent(componentKey);
    if (isSidebarOpen) setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg p-4 flex flex-col transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="mb-6 flex items-center space-x-2">
          <HomeIcon className="w-8 h-8 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
        </div>
        <nav className="flex-1">
          <ul className="space-y-1">
            {Object.keys(components).map((key) => {
              const typedKey = key as ComponentKey;
              const Icon = components[typedKey].icon;
              return (
                <li key={key}>
                  <button
                    onClick={() => handleLinkClick(typedKey)}
                    className={`w-full flex items-center p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors ${
                      selectedComponent === typedKey
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                        : ''
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {components[typedKey].name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Navbar */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <div className="flex items-center">
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
              onClick={toggleSidebar}
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
            <div className="flex items-center w-full max-w-md ml-4">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center">
            <UserCircleIcon className="w-6 h-6 text-gray-600 mr-2" />
            <span className="text-gray-700">User</span>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {selectedComponent && components[selectedComponent] ? (
              <div className="bg-white rounded-lg shadow-md">
                <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                  <h2 className="text-lg font-semibold">{components[selectedComponent].name}</h2>
                </div>
                <div className="p-6">
                  {components[selectedComponent].component}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
                Select a component from the sidebar to preview
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white shadow-inner p-4 text-center">
          <p className="text-gray-600">Dashboard Footer ONINE STORE &copy; 2025</p>
        </footer>
      </div>
    </div>
  );
}