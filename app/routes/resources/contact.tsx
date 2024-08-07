import { ActionFunctionArgs, json } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { jsonWithError, jsonWithSuccess } from "remix-toast";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import * as gtag from "~/utils/gtags.client";

export async function action({ request }: ActionFunctionArgs) {
  const url =
    "https://script.google.com/macros/s/AKfycbyDPLvodQ28-UWF_PLfYUiY5ZEjf0Cq2uWo9cWMWnT4aLNtGLKXvYKCQLhFTN6QwvODvQ/exec";

  const formData = await request.formData();

  const email = String(formData.get("email"));
  const name = String(formData.get("name"));
  const message = String(formData.get("message"));

  const errors: { [key: string]: string } = {};

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

    gtag.event({
      action: "submit_form",
      category: "Contact",
      label: name,
    });

    if (response.ok) {
      console.log(response.ok, response.status);
    }
  } catch (err) {
    console.error(err);
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

export function Contact() {
  const actionData = useActionData<typeof action>();
  const form = useRef<HTMLFormElement>(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle" && actionData?.ok) {
      form.current?.reset();
    }
  }, [navigation.state, actionData?.ok]);

  return (
    <>
      {/* <h2 className="font-semibold text-2xl pb-2">Contact</h2> */}
      <Form method="post" noValidate ref={form}>
        <div className="grid w-full gap-4">
          <div>
            <Input placeholder="Email" type="email" name="email" required />
            {actionData?.errors?.email && (
              <span className="text-sm">{actionData.errors.email}</span>
            )}
          </div>

          <div>
            <Input placeholder="Full Name" name="name" required />
            {actionData?.errors?.name && (
              <span className="text-sm">{actionData.errors.name}</span>
            )}
          </div>

          <div>
            <Textarea
              placeholder="Type your message here"
              name="message"
              required
            />
            {actionData?.errors?.message && (
              <span className="text-sm">{actionData.errors.message}</span>
            )}
          </div>

          <Button type="submit">Send message</Button>
        </div>
      </Form>
    </>
  );
}
