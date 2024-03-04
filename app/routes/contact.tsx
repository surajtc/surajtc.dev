import { ActionFunctionArgs, json } from "@remix-run/node";
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
          <Input type="email" placeholder="Email" name="email" />
          <Textarea placeholder="Type your message here." name="message" />
          <Button type="submit">Send message</Button>
        </div>
      </Form>
    </>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  console.log("HERE", formData.get("email"), formData.get("message"));

  return json({ ok: true });
}
