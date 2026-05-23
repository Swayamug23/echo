// make a layouut page

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-svh p-6">
      {children}
    </div>
  );
}