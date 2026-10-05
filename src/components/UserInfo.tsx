"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client"; 

const UserInfo = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  if (isPending) {
    return <div className="text-sm text-gray-500">লোডিং...</div>;
  }

  return (
    <div>
      {session?.user ? (
        <div className="flex items-center gap-3">
          <div>
           
           <Link href={'/profile'}>
            <div className="avatar">
            <div className="w-10 rounded-full border border-gray-200">
              <img
                alt={session?.user?.name || "User Avatar"}
                src={session?.user?.image || "/default-avatar.png"}
              />
            </div>
          </div>
           </Link>
          <h2 className="text-sm font-semibold mt-2">{session?.user?.name}</h2>
          </div>
          <button
            onClick={handleSignOut}
            className="btn btn-sm btn-outline text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
          >
            লগআউট
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            সাইন ইন
          </Link>
          <Link
            href="/sign-up"
            className="btn btn-sm bg-red-700 hover:bg-red-800 text-white border-none rounded-md px-4"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;