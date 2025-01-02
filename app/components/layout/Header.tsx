// Header component: components/layout/Header.tsx
interface HeaderProps {
  setActiveSection: (section: string) => void;
}

export default function Header({ setActiveSection }: HeaderProps) {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between shadow-md">
      <h1 className="text-xl font-bold">Point of Sales</h1>
      <nav className="flex items-center gap-4">
        <button onClick={() => setActiveSection("dashboard")} className="hover:underline">
          Dashboard
        </button>
        <button onClick={() => setActiveSection("products")} className="hover:underline">
          Products
        </button>
        <button onClick={() => setActiveSection("transactions")} className="hover:underline">
          Transactions
        </button>
        <button onClick={() => setActiveSection("reports")} className="hover:underline">
          Reports
        </button>
      </nav>
    </header>
  );
}