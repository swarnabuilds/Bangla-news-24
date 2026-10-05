"use client";

import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import toast from "react-hot-toast";

export default function SignInPage() {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(resData, error);

    if (resData) {
      toast.success('সফলভাবে সাইন ইন হয়েছে!');
      router.push("/");
    }
    if (error) {
      toast.error("সাইন ইন ব্যর্থ হয়েছে!");
      return;
    }
  };

  const hndelSignInWithGoogle = async () => {
    const data = await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    console.log(data)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">সাইন ইন</h2>
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "সঠিক ইমেইল অ্যাড্রেস দিন";
              }
              return null;
            }}
          >
            <Label>ইমেইল</Label>
            <Input placeholder="name@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "পাসওয়ার্ড অন্তত ৮ অক্ষরের হতে হবে";
              }
              if (!/[A-Z]/.test(value)) {
                return "কমপক্ষে একটি বড় হাতের অক্ষর (A-Z) থাকতে হবে";
              }
              if (!/[0-9]/.test(value)) {
                return "কমপক্ষে একটি সংখ্যা (0-9) থাকতে হবে";
              }
              return null;
            }}
          >
            <Label>পাসওয়ার্ড</Label>
            <Input placeholder="পাসওয়ার্ড লিখুন" />
            <Description>অন্তত ৮ অক্ষর, ১টি বড় হাতের অক্ষর ও ১টি সংখ্যা</Description>
            <FieldError />
          </TextField>

          <Button type="submit" className="w-full mt-2">
            সাইন ইন
          </Button>
        </Form>

        {/* 'অথবা' ডিভাইডার */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="w-full border-t border-gray-200"></div>
          <span className="absolute bg-white px-3 text-xs font-medium text-gray-500 uppercase">
            অথবা
          </span>
        </div>

        {/* আইকন ছাড়া গুগল সাইন ইন বাটন */}
        <Button
          type="button"
          onClick={hndelSignInWithGoogle}
          className="w-full border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-xl transition-colors"
        >
          Google দিয়ে সাইন ইন করুন
        </Button>
      </div>
    </div>
  );
}