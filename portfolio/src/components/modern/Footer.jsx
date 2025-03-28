export default function Footer() {
  return (
    <footer className="w-full py-10 text-center bg-gray-100 text-gray-700">
      <p className="text-lg">Explore other portfolio versions:</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="/minimal" className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700">
          Minimal
        </a>
        <a href="/terminal" className="px-4 py-2 bg-[#537FE7] text-white rounded-lg hover:bg-[#435ebf]">
          Terminal
        </a>
      </div>
    </footer>
  );
}
