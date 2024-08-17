"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(3, "Name is required"),
  addressLine1: z.string().min(3, "addressLine1 is required"),
  city: z.string().min(3, "city is required"),
  country: z.string().min(3, "country is required"),
  number: z.string().min(0, "Number is required"),
});

export type UserFormDataType = z.infer<typeof formSchema>;

interface Props {
  isLoading: boolean;
  onSave: (userProfileData: UserFormDataType) => void;
  currentUser: User;
}

const UserProfileForm = ({ isLoading, currentUser, onSave }: Props) => {
  const form = useForm<UserFormDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [form, currentUser]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSave)} className="bg-navey h-screen">
        <div className="pt-20 container mx-auto space-y-5">
          <div>
            <h2 className="text-2xl font-semibold text-white">Your profile</h2>
            <FormDescription className="text-gray">
              View and update your profile fields
            </FormDescription>
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white/10 text-gray border-none font-semibold tracking-wide"
                    {...field}
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white/10 text-gray border-none font-semibold tracking-wide"
                    {...field}
                    placeholder="Your name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="addressLine1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">AddressLine1</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/10 text-gray border-none font-semibold tracking-wide"
                      {...field}
                      placeholder="1/2 Block-B"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="bg-white/10 text-gray border-none font-semibold tracking-wide"
                      {...field}
                      placeholder="01XXXXX"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">City</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/10 text-gray border-none font-semibold tracking-wide"
                      {...field}
                      placeholder="New York"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Country</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white/10 text-gray border-none font-semibold tracking-wide"
                      {...field}
                      placeholder="New York"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            className="transition duration-300 ease-in-out bg-green-500 hover:bg-white/10 hover:text-gray"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex gap-2 items-center">
                <Loader2 className="animate-spin" size={18} />
                Submitting
              </span>
            ) : (
              <span>Submit</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserProfileForm;
