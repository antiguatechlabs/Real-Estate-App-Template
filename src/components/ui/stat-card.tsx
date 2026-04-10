import { Card } from "@/components/ui/card";

interface StatCardProps {
  label: string;
  value: string;
  helper: string;
}

export const StatCard = ({ label, value, helper }: StatCardProps) => (
  <Card className="p-6">
    <p className="text-sm font-medium text-slate-500">{label}</p>
    <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
    <p className="mt-2 text-sm text-slate-500">{helper}</p>
  </Card>
);
