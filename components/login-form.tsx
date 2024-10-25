import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useRequest from "../hooks/use-request";
import { useState } from "react";
import Router from "next/router";
import { toast } from "react-toastify";

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'.";
export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const { doRequest, errors } = useRequest({
    url: "/api/login",
    method: "post",
    body: { email, password },
    onSuccess: (data: any) => {
      console.log("data", data);
      toast.success("Logged in successfully", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      Router.push("/dashboard");
    },
    onError: (err: any) => {
      console.log("Error is : ", err);
      toast.error(`${err?.response?.data?.message}`, {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
  });

  const onSubmit = async (event: any) => {
    event.preventDefault();

    doRequest();
  };
 
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="flex flex-col space-y-1.5 px-6 pb-4 pt-6">
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder=""
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onSubmit}>
          Sign in
        </Button>
      </CardFooter>
    </Card>
  );
}
