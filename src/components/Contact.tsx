import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  team: string;
  teamSize: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  team?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    team: "",
    teamSize: "3-5",
    notes: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (fieldValues: FormValues) => {
    const validationErrors: FormErrors = {};

    if (!fieldValues.name.trim()) {
      validationErrors.name = "Name is required.";
    }

    if (!fieldValues.email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!emailPattern.test(fieldValues.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!fieldValues.team.trim()) {
      validationErrors.team = "Team name is required.";
    }

    return validationErrors;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((currentErrors) => {
      const nextValues = { ...values, [name]: value };
      const nextErrors = validate(nextValues);
      return {
        ...currentErrors,
        ...nextErrors,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const isFormValid =
    values.name.trim() !== "" &&
    values.email.trim() !== "" &&
    emailPattern.test(values.email) &&
    values.team.trim() !== "";

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">
            Join the workshop
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
            Sign up for a team slot
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Reserve your team spot for the workshop by filling out the form below.
            We&apos;ll confirm your registration instantly.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
          {isSubmitted ? (
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Thanks for signing up, {values.name.split(" ")[0] || "there"}!
              </h3>
              <p className="text-slate-600">
                We received your request for the <strong>{values.team}</strong> team.
                A confirmation will be sent to <strong>{values.email}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Name</span>
                  <input
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`mt-2 block w-full rounded-3xl border px-4 py-3 text-slate-900 shadow-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 ${
                      errors.name ? "border-rose-400 bg-rose-50" : "border-slate-200 bg-white"
                    }`}
                  />
                  {errors.name ? (
                    <p className="mt-2 text-sm text-rose-600">{errors.name}</p>
                  ) : null}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Email</span>
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`mt-2 block w-full rounded-3xl border px-4 py-3 text-slate-900 shadow-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 ${
                      errors.email ? "border-rose-400 bg-rose-50" : "border-slate-200 bg-white"
                    }`}
                  />
                  {errors.email ? (
                    <p className="mt-2 text-sm text-rose-600">{errors.email}</p>
                  ) : null}
                </label>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Team name</span>
                  <input
                    name="team"
                    type="text"
                    value={values.team}
                    onChange={handleChange}
                    placeholder="e.g. Code Crusaders"
                    className={`mt-2 block w-full rounded-3xl border px-4 py-3 text-slate-900 shadow-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 ${
                      errors.team ? "border-rose-400 bg-rose-50" : "border-slate-200 bg-white"
                    }`}
                  />
                  {errors.team ? (
                    <p className="mt-2 text-sm text-rose-600">{errors.team}</p>
                  ) : null}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Team size</span>
                  <select
                    name="teamSize"
                    value={values.teamSize}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  >
                    <option value="1-2">1-2 people</option>
                    <option value="3-5">3-5 people</option>
                    <option value="6-9">6-9 people</option>
                    <option value="10+">10+ people</option>
                  </select>
                </label>
              </div>

              <label className="mt-6 block">
                <span className="text-sm font-medium text-slate-700">Notes <span className="text-slate-400">(optional)</span></span>
                <textarea
                  name="notes"
                  value={values.notes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Anything else we should know?"
                  className="mt-2 block w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
                <p className="mt-2 text-sm text-slate-500">
                  {values.notes.length}/200 characters
                </p>
              </label>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="mt-8 inline-flex w-full items-center justify-center rounded-3xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Reserve my spot"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
