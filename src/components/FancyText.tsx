export default function FancyText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        // colors repeat so the pan loops seamlessly
        backgroundImage:
          "linear-gradient(110deg, var(--accent), var(--primary), var(--secondary), var(--primary), var(--accent))",
        backgroundSize: "200% auto",
        animation: "fancytext-pan 6s linear infinite",
      }}
    >
      {children}
    </span>
  );
}
