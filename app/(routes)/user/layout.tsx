import { ROLES } from '@/app/generated/prisma/enums';
import { requirePageLevelRBAC } from '@/lib/server';
export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requirePageLevelRBAC(ROLES.USER);
  return <section>{children}</section>;
}
