import { PropsWithChildren, useState } from "react";
import { useFormStatus } from "react-dom";
import {
  Button,
  ArticleHeader,
  SocialMediaNav,
  TextBlock,
} from "../../components";
import { useScrollToTop } from "../../hooks";

function Contact() {
  useScrollToTop();

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { pending } = useFormStatus();

  function sendMail(formData: FormData, formElement: HTMLFormElement) {
    const errors = validateRequiredFields(formData);
    if (Object.values(errors).some((error) => error)) {
      setFormErrors((prev) => ({ ...prev, ...{ name: errors.name, email: errors.email, message: errors.message } }));
      return;
    }

    const emailError = validateEmailField(formData.get("email") as string);
    if (emailError) {
      setFormErrors((prev) => ({ ...prev, email: emailError })); // Update the email error state
      return;
    }

    // Here you would typically send the form data to your server or email service
    alert("Mail sent!");
    // If you would like to make your contact form actually send you the data, you could use a service like [Formspree](https://formspree.io/) to hook it up.

    formElement.reset();
    setFormErrors({ name: "", email: "", message: "" });
  }

  function validateRequiredFields(formData: FormData) {
    const errors: { [key: string]: string } = {};

    for (const [key, value] of formData.entries()) {
      if (!value) {
        errors[key as string] = "This field is required";
      }
    }

    return errors;
  }

  function validateEmailField(email: string) {
    const emailPattern = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email)) {
      return "Please enter a valid email address";
    }

    return "";
  }

  return (
    <main className="max-w-screen-md lg:max-w-screen-xl lg:w-full px-8 pb-4 md:pb-8 md:px-10 lg:px-[5.25rem] lg:pt-0">
      <Section title="Get in Touch">
        <div className="lg:min-w-[40rem] lg:pl-1">
          <TextBlock fontSize="[0.95rem]" tracking="tight" className="lg:max-w-[40rem] lg:pr-4 lg:pt-0 pt-[1.35rem] pb-7 lg:text-base lg:leading-[1.875rem]">
            I'd love to hear about what you're working on and how I could help.
            I'm currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I'm also happy to hear about opportunities
            that don't fit that description. I'm a hard&#8209;working and
            positive person who will always approach each task with a sense of
            purpose and attention to detail. Please do feel free to check out my
            online profiles below and get in touch using the form.
          </TextBlock>
          <SocialMediaNav />
        </div>
      </Section>
      <section className="flex flex-col lg:flex-row lg:w-full lg:justify-between pt-8 pb-16 lg:pb-20 font-sans font-bold text-xs tracking-wide">
        <ArticleHeader className="lg:pt-3">Contact Me</ArticleHeader>
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            sendMail(formData, e.currentTarget);
          }}
          className="flex flex-col basis-full lg:max-w-[40rem] pt-[0.9rem] md:pt-6 lg:pt-1 lg:pl-1 ">
          <FormTextInputField
            name="name"
            label="Name"
            placeholder="Jane Appleseed"
            error={formErrors.name}
            onInput={() => setFormErrors((prev) => ({ ...prev, name: "" }))}
          />
          <FormTextInputField
            name="email"
            label="Email Address"
            placeholder="email@example.com"
            error={formErrors.email}
            onInput={() => setFormErrors((prev) => ({ ...prev, email: "" }))}
          />
          <FormTextAreaField
            name="message"
            label="Message"
            placeholder="How can I help?"
            error={formErrors.message}
            onInput={() => setFormErrors((prev) => ({ ...prev, message: "" }))}
          />
          <Button disabled={pending}>
            <p className="font-publicSans w-full text-white text-xs font-extralight tracking-[0.15rem]">
              SEND MESSAGE
            </p>
          </Button>
        </form>
      </section>
    </main>
  );
}

interface SectionProps {
  title: string;
  className?: string;
}

function Section({
  title,
  children,
  className,
}: PropsWithChildren<SectionProps>) {
  return (
    <section
      className={`flex flex-col lg:justify-between pt-2 lg:pt-2 ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between border-y-[0.25px] border-solid border-grayish-dark-blue/15 pt-6 md:mt-[2.35rem] md:pt-8 pb-8 md:my-0 lg:pt-12 lg:pb-12 lg:w-full">
        <ArticleHeader className="pb-0 basis-full">{title}</ArticleHeader>
        {children}
      </div>
    </section>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  placeholder: string;
  error: string;
}

interface FormTextInputFieldProps extends FormFieldProps {
  onInput?: React.FormEventHandler<HTMLInputElement>;
}

interface FormTextAreaFieldProps extends FormFieldProps {
  onInput?: React.FormEventHandler<HTMLTextAreaElement>;
}

function FormTextInputField({ label, error, name, onInput, placeholder }: FormTextInputFieldProps) {
  return <div>
    <Label htmlFor="name">{label}</Label>
    <input
      id={name}
      name={name}
      type="text"
      placeholder={placeholder}
      className={`bg-light-grey h-12 p-4 focus:outline-slightly-desaturated-cyan placeholder:opacity-40 peer w-full
    ${error ? "border border-bright-red" : "border border-transparent"}
    `}
      onInput={onInput}
    />
    <span
      className={`block h-[0.75rem] text-[0.575rem] italic text-bright-red ${error ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      aria-live="polite"
    >
      {error}
    </span>
  </div>
}

function FormTextAreaField({ label, error, name, onInput, placeholder }: FormTextAreaFieldProps) {
  return <div className="mb-2">
    <Label htmlFor="name">{label}</Label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      className={`bg-light-grey h-24 p-4 focus:outline-slightly-desaturated-cyan placeholder:opacity-40 w-full
        ${error ? "border border-bright-red" : "border border-transparent"}
        `}
      onInput={onInput}
    />

    <span
      className={`block h-[0.75rem] text-[0.575rem] italic text-bright-red ${error ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      aria-live="polite"
    >
      {error}
    </span>
  </div>
}

function Label({ children, htmlFor }: PropsWithChildren<{ htmlFor: string }>) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-[0.8rem] text-grayish-dark-blue my-4 block"
    >
      {children}
    </label>
  );
}

export default Contact;
