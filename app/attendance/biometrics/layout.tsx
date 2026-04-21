import BiometricsSidebar from "./BiometricsSidebar";

export default function BiometricsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-green-50">
      <BiometricsSidebar />
      <main className="flex-1 overflow-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}