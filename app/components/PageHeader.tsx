"use client";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export default function PageHeader({ title, subtitle, actions }: PageHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center justify-between px-8 py-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">{title}</h1>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>
        {actions && <div className="flex items-center gap-3 ml-6">{actions}</div>}
      </div>
    </div>
  );
}
