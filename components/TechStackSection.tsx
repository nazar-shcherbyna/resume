export const TechStackSection: React.FC<{
  children: NonNullable<React.ReactNode>;
}> = ({ children }) => {
  return (
    <div className="mt-2 inline-block text-neutral-400 italic px-2 text-sm">
      Tech stack: {children}
    </div>
  );
};
