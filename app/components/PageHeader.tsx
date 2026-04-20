"use client";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export default function PageHeader({ title, subtitle, actions }: PageHeaderProps) {
  return (
    <div className="sticky top-0 z-10 border-b border-white/80 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-4 py-5 md:px-8 md:py-6">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 tracking-tight">{title}</h1>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>
        {actions && <div className="flex items-center gap-3 ml-4 md:ml-6">{actions}</div>}
      </div>
    </div>
  );
}
