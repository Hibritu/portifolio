export default function MobileMenu({ onClose }) {
  return (
    <div
      className="absolute inset-0 bg-[#111111] bg-opacity-50 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="fixed inset-y-0 left-0 bg-[#111111] w-64 p-6 transform transition-transform translate-x-0">
        <button
          aria-label="Close mobile menu"
          onClick={onClose}
          className="text-green-400 hover:text-green-600 focus:outline-none mb-4"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="space-y-4">
          <a href="#about" onClick={onClose} className="block text-green-400 hover:text-green-400">
            About
          </a>
          <a href="#what-i-do" onClick={onClose} className="block text-gray-400 hover:text-green-400">
            What I Do
          </a>
          <a href="#clients" onClick={onClose} className="block text-gray-400 hover:text-green-400">
            Clients
          </a>
          <a href="#fun-facts" onClick={onClose} className="block text-gray-400 hover:text-green-400">
            Fun Facts
          </a>
        </nav>
      </div>
    </div>
  );
}
