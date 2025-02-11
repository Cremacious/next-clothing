export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex-center min-h-screen">
       {children}
    </div>
  );
}
