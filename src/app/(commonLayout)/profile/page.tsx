import ProfileModal from "@/components/ui/profilemodel";
import { getSession } from "@/services/user.service";

export default async function ProfilePage() {
  const session = await getSession();

  return <ProfileModal user={session.data} />;
}