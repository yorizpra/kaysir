// Dashboard component: components/Dashboard.tsx
export default function Dashboard() {
  return (
    <section id="dashboard" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div className="bg-white shadow rounded-lg p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-700">Total Sales</h2>
        <p className="text-2xl font-bold text-blue-600 mt-2">$1,230</p>
      </div>
      <div className="bg-white shadow rounded-lg p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-700">Products Sold</h2>
        <p className="text-2xl font-bold text-blue-600 mt-2">320</p>
      </div>
      <div className="bg-white shadow rounded-lg p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-700">New Customers</h2>
        <p className="text-2xl font-bold text-blue-600 mt-2">25</p>
      </div>
    </section>
  );
}