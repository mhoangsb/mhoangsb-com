export default function TechnologyCard({
  children,
  href,
  name,
}: {
  children: React.ReactNode;
  href: string;
  name: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-16"
    >
      <div className="aspect-square rounded-xl border border-gray-800 px-4 py-4 group-hover:border-gray-600">
        <div>{children}</div>
      </div>
      <span className="mt-1 block w-full text-center text-sm font-light group-hover:underline group-hover:underline-offset-2">
        {name}
      </span>
    </a>
  );
}
