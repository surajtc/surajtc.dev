import { ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export default function Contact() {
  return (
    <>
      <h2 className="font-semibold text-2xl pb-2">Contact</h2>
      <Form action="/contact" method="post">
        <div className="grid w-full gap-2">
          <Input type="email" placeholder="Email" name="email" required />
          <Input placeholder="Name" name="name" required />
          <Textarea
            placeholder="Type your message here."
            name="message"
            required
          />
          <Button type="submit">Send message</Button>
        </div>
      </Form>
    </>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const url =
    "https://script.google.com/macros/s/AKfycbyDPLvodQ28-UWF_PLfYUiY5ZEjf0Cq2uWo9cWMWnT4aLNtGLKXvYKCQLhFTN6QwvODvQ/exec";

  const formData = await request.formData();
  const data = new URLSearchParams();

  formData.forEach((value, key) => data.append(key, value.toString()));
  const encoded = data.toString();

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Set the Content-Type header
      },
      body: encoded,
    });
    if (response.ok) {
      console.log("SUCCESS");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }

  return null;
}
