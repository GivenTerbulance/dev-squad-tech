import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Dev Squad Tech">
      <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
        Dev Squad Tech
      </span>
    </Link>
  );
}