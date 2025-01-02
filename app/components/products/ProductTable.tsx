// ProductTable module: components/products/ProductTable.tsx
interface ProductTableProps {
  products: {
    id: number;
    name: string;
    price: number;
    stock: number;
  }[];
  onDelete: (id: number) => void;
}

export default function ProductTable({ products, onDelete }: ProductTableProps) {
  return (
    <table className="table-auto w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="border-b-2 border-gray-200 px-4 py-2">ID</th>
          <th className="border-b-2 border-gray-200 px-4 py-2">Name</th>
          <th className="border-b-2 border-gray-200 px-4 py-2">Price</th>
          <th className="border-b-2 border-gray-200 px-4 py-2">Stock</th>
          <th className="border-b-2 border-gray-200 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="border-b border-gray-200 px-4 py-2">{product.id}</td>
            <td className="border-b border-gray-200 px-4 py-2">{product.name}</td>
            <td className="border-b border-gray-200 px-4 py-2">${product.price}</td>
            <td className="border-b border-gray-200 px-4 py-2">{product.stock}</td>
            <td className="border-b border-gray-200 px-4 py-2">
              <button
                onClick={() => onDelete(product.id)}
                className="bg-red-500 text-white px-4 py-2 ml-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}