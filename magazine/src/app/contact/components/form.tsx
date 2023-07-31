"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const Form = () => {
  const [isMessageSent, setMessageSent] = useState<boolean>(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.currentTarget;

    const name = target.elements.namedItem("name") as HTMLInputElement;
    const company = target.elements.namedItem("company") as HTMLInputElement;
    const email = target.elements.namedItem("email") as HTMLInputElement;
    const message = target.elements.namedItem("message") as HTMLInputElement;

    const data = {
      name: name.value,
      company: company.value,
      email: email.value,
      message: message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }
      setMessageSent(true);
    } catch (error: any) {
      console.log(
        "There was a problem with the fetch operation " + error.message
      );
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="t-TitleSans title" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Jean-Luc Picard"
            className="input-form"
            required
            minLength={3}
            maxLength={200}
          />
        </div>

        <div>
          <label className="t-TitleSans title" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            type="text"
            name="company"
            placeholder="Starfleet"
            className="input-form"
            minLength={2}
            maxLength={200}
          />
        </div>

        <div>
          <label className="t-TitleSans title" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="picard@enterprise.com"
            className="input-form"
            required
            minLength={2}
            maxLength={200}
          />
        </div>

        <div>
          <label className="t-TitleSans title" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="input-form"
            placeholder="Write your message here..."
            required
            minLength={10}
            maxLength={1000}
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
      {isMessageSent && <p> Message has been Sent</p>}
      {isMessageSent && router.push("/contact/success")}
    </>
  );
};
