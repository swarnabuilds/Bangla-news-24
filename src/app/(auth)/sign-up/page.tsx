"use client";

import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    const { data: resData, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.image,
      callbackURL: "sign-in",
    });

    if (resData) {
      router.push('/'); // Client Side Redirect
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">সাইন আপ</h2>
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text">
            <Label>নাম</Label>
            <Input placeholder="আপনার নাম" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="url">
            <Label>ছবি (ইউআরএল)</Label>
            <Input placeholder="ছবির লিংক" />
            <FieldError />
          </TextField>

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
            সাইন আপ
          </Button>
        </Form>
      </div>
    </div>
  );
}