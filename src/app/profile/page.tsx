"use client";
import { authClient, useSession } from "@/lib/auth-client";
import Link from "next/link";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProfilePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    const { error } = await authClient.updateUser({
      image: data.image,
      name: data.name,
    });

    if (error) {
      toast.error("প্রোফাইল আপডেট করতে সমস্যা হয়েছে!");
      return;
    }

    toast.success("প্রোফাইল সফলভাবে আপডেট করা হয়েছে!");
    setShowEdit(false);
    router.refresh();
  };

  const [showEdit, setShowEdit] = useState(false);
  const handelShowFrom = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      {/* প্রোফাইল কার্ড */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all hover:shadow-xl">
        <Link href={"/profile"} className="group relative">
          <div className="avatar">
            <div className="w-24 h-24 rounded-full border-4 border-emerald-500/20 p-1 group-hover:scale-105 transition-transform duration-300 shadow-md overflow-hidden">
              <img
                className="w-full h-full rounded-full object-cover"
                alt={session?.user?.name || "User Avatar"}
                src={session?.user?.image || "/default-avatar.png"}
              />
            </div>
          </div>
        </Link>

        <div className="mt-4 space-y-1">
          <h2 className="text-xl font-bold text-gray-800 tracking-tight">
            {session?.user?.name || "ব্যবহারকারীর নাম"}
          </h2>
          <p className="text-sm font-medium text-gray-500">
            {session?.user?.email || "email@example.com"}
          </p>
        </div>
      </div>

      {/* আপডেট ফর্ম সেকশন */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">
            প্রোফাইল তথ্য
          </h3>
          <button
            onClick={handelShowFrom}
            className="px-4 py-1.5 text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors"
          >
            {showEdit ? "বাতিল করুন" : "Edit Profile"}
          </button>
        </div>

        {showEdit && (
          <Form className="flex flex-col gap-4 mt-4" onSubmit={onSubmit}>
            {/* name ফিল্ডের জন্য TextField এ defaultValue দিন */}
            <TextField
              isRequired
              name="name"
              type="text"
              defaultValue={session?.user?.name || ""}
            >
              <Label className="text-sm font-semibold text-gray-700">নাম</Label>
              <Input placeholder="আপনার নাম" />
              <FieldError />
            </TextField>

            {/* image ফিল্ডের জন্য TextField এ defaultValue দিন */}
            <TextField
              isRequired
              name="image"
              type="url"
              defaultValue={session?.user?.image || ""}
            >
              <Label className="text-sm font-semibold text-gray-700">
                ছবি (ইউআরএল)
              </Label>
              <Input placeholder="ছবির লিংক" />
              <FieldError />
            </TextField>

            <Button
              type="submit"
              className="w-full mt-2 bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
            >
              আপডেট করুন
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;