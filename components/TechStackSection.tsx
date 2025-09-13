export const TechStackSection: React.FC<{
  children: NonNullable<React.ReactNode>;
}> = ({ children }) => {
  return (
    <div className="mt-3 inline-block text-neutral-400 px-3 py-1 text-xs">
      <i> Tech stack:</i> {children}
    </div>
  );
};
