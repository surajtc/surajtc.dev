import { ActionFunctionArgs, json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { jsonWithError, jsonWithSuccess } from "remix-toast";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
// import * as gtag from "~/utils/gtags.client";

export async function action({ request }: ActionFunctionArgs) {
  const url =
    "https://script.google.com/macros/s/AKfycbyDPLvodQ28-UWF_PLfYUiY5ZEjf0Cq2uWo9cWMWnT4aLNtGLKXvYKCQLhFTN6QwvODvQ/exec";

  const formData = await request.formData();

  const email = String(formData.get("email"));
  const name = String(formData.get("name"));
  const message = String(formData.get("message"));
  const address = String(formData.get("address"));

  const errors: { [key: string]: string } = {};

  if (address.trim().length !== 0) {
    return jsonWithError(
      { ok: false, errors },
      { message: "There was an error while sending your message." }
    );
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Enter a valid email address";
  }

  if (email.trim().length === 0) {
    errors.email = "Email is required";
  }

  if (name.trim().length === 0) {
    errors.name = "Name is required";
  }

  if (message.trim().length === 0) {
    errors.message = "Message is required";
  }

  if (Object.keys(errors).length > 0) {
    return json({ ok: false, errors });
  }

  try {
    const data = new URLSearchParams();

    formData.forEach((value, key) => data.append(key, value.toString().trim()));

    const encoded = data.toString();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Set the Content-Type header
      },
      body: encoded,
    });

    // gtag.event({
    //   action: "submit_form",
    //   category: "Contact",
    //   label: name,
    // });

    if (response.ok) {
      console.log("Message sent successfully!", response.ok, response.status);
    }
  } catch (err) {
    return jsonWithError(
      { ok: false, errors },
      { message: "There was an error while sending your message." }
    );
  }
  return jsonWithSuccess(
    { ok: true, errors },
    { message: "Message sent successfully!" }
  );
}

export function ContactForm() {
  const fetcher = useFetcher<typeof action>();
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data?.ok) {
      form.current?.reset();
    }
  }, [fetcher.state, fetcher.data?.ok]);

  return (
    <fetcher.Form
      method="post"
      action="/resources/contact"
      ref={form}
      noValidate
    >
      <div className="grid w-full gap-4 mt-6">
        <div className="absolute -z-50 invisible">
          <Input placeholder="Address" name="address" />
        </div>

        <div>
          <Input placeholder="Email" type="email" name="email" required />
          {fetcher.data?.errors?.email && (
            <span className="text-xs">{fetcher.data.errors.email}</span>
          )}
        </div>

        <div>
          <Input placeholder="Full Name" name="name" required />
          {fetcher.data?.errors?.name && (
            <span className="text-xs">{fetcher.data.errors.name}</span>
          )}
        </div>

        <div>
          <Textarea
            placeholder="Type your message here"
            name="message"
            required
          />
          {fetcher.data?.errors?.message && (
            <span className="text-xs">{fetcher.data.errors.message}</span>
          )}
        </div>

        <Button type="submit">
          {fetcher.state == "submitting" ? "Submitting..." : "Send message"}
        </Button>
      </div>
    </fetcher.Form>
  );
}
