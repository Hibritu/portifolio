import Link from 'next/link';

export default function BackButton({ label = 'Back to Home' }) {
  return (
    <div className="mb-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500 text-green-400 hover:bg-green-500/10 transition"
        aria-label="Go back to home"
      >
        <span aria-hidden="true">←</span>
        {label}
      </Link>
    </div>
  );
}
