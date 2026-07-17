<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  team: string;
  teamSize: string;
  notes: string;
}
=======
=======
>>>>>>> 7b80b1929dfe1e925968e6b05c4f90cda40e391d
import { useState } from 'react';

// 🚧 PROBLEM STATEMENT 4: SIGN-UP FORM
// Build a working sign-up form with client-side validation
// Requirements:
// - Fields: name, email, team name (all required)
// - Use useState for form values and validation errors
// - Show inline error messages on submit
// - On successful submit, show a success message (simulate in state)
// - Submit button disabled while invalid or submitting
// - Stretch: team size dropdown and character counter for notes textarea
<<<<<<< HEAD
>>>>>>> 7b80b1929dfe1e925968e6b05c4f90cda40e391d
=======
>>>>>>> 7b80b1929dfe1e925968e6b05c4f90cda40e391d

interface FormErrors {
  name?: string;
  email?: string;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  teamName?: string;
}

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    teamName: '',
    teamSize: '',
    notes: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Email validation regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formValues.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formValues.teamName.trim()) {
      newErrors.teamName = 'Team name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Simulate API call
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after success
      setFormValues({
        name: '',
        email: '',
        teamName: '',
        teamSize: '',
        notes: '',
      });
    }, 1500);
  };

  // Reset form and show form again
  const handleReset = () => {
    setIsSuccess(false);
    setFormValues({
      name: '',
      email: '',
      teamName: '',
      teamSize: '',
      notes: '',
    });
    setErrors({});
  };

  const isFormValid =
    formValues.name.trim() &&
    formValues.email.trim() &&
    validateEmail(formValues.email) &&
    formValues.teamName.trim();

  return (
=======
  teamName?: string;
}

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    teamName: '',
    teamSize: '',
    notes: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Email validation regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formValues.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formValues.teamName.trim()) {
      newErrors.teamName = 'Team name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Simulate API call
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after success
      setFormValues({
        name: '',
        email: '',
        teamName: '',
        teamSize: '',
        notes: '',
      });
    }, 1500);
  };

  // Reset form and show form again
  const handleReset = () => {
    setIsSuccess(false);
    setFormValues({
      name: '',
      email: '',
      teamName: '',
      teamSize: '',
      notes: '',
    });
    setErrors({});
  };

  const isFormValid =
    formValues.name.trim() &&
    formValues.email.trim() &&
    validateEmail(formValues.email) &&
    formValues.teamName.trim();

  return (
>>>>>>> 7b80b1929dfe1e925968e6b05c4f90cda40e391d
    <section id="contact" className="py-20 px-6 bg-slate-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Sign Up
        </h2>
        <p className="text-slate-600 mb-10">
          Join our community and stay updated with the latest news and opportunities.
        </p>

        {isSuccess ? (
          <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">Success!</h3>
            <p className="text-green-600 mb-6">
              Thank you for signing up, <span className="font-semibold">{formValues.name}</span>!
              We'll be in touch soon.
            </p>
            <button
              onClick={handleReset}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              Sign Up Another Team
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            {/* Name Field */}
            <div className="text-left">
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300'
                }`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="text-left">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Team Name Field */}
            <div className="text-left">
              <label htmlFor="teamName" className="block text-sm font-semibold text-slate-700 mb-2">
                Team Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={formValues.teamName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  errors.teamName ? 'border-red-500 bg-red-50' : 'border-slate-300'
                }`}
                placeholder="Enter your team name"
              />
              {errors.teamName && <p className="text-red-600 text-sm mt-1">{errors.teamName}</p>}
            </div>

            {/* Team Size Dropdown (Stretch Goal) */}
            <div className="text-left">
              <label htmlFor="teamSize" className="block text-sm font-semibold text-slate-700 mb-2">
                Team Size <span className="text-slate-500 text-xs">(Optional)</span>
              </label>
              <select
                id="teamSize"
                name="teamSize"
                value={formValues.teamSize}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"
              >
                <option value="">Select team size...</option>
                <option value="1">1 - Solo</option>
                <option value="2-5">2-5 members</option>
                <option value="6-10">6-10 members</option>
                <option value="11-20">11-20 members</option>
                <option value="21+">21+ members</option>
              </select>
            </div>

            {/* Notes Textarea with Character Counter (Stretch Goal) */}
            <div className="text-left">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="notes" className="block text-sm font-semibold text-slate-700">
                  Notes <span className="text-slate-500 text-xs">(Optional)</span>
                </label>
                <span className="text-xs text-slate-500">
                  {formValues.notes.length}/500 characters
                </span>
              </div>
              <textarea
                id="notes"
                name="notes"
                value={formValues.notes}
                onChange={handleInputChange}
                maxLength={500}
                rows={4}
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                placeholder="Tell us about your team..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition ${
                isFormValid && !isSubmitting
                  ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                  : 'bg-slate-400 cursor-not-allowed opacity-60'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="inline-block animate-spin">⏳</span>
                  Submitting...
                </span>
              ) : (
                'Sign Up'
              )}
            </button>
          </form>
        )}
<<<<<<< HEAD
>>>>>>> 7b80b1929dfe1e925968e6b05c4f90cda40e391d
=======
>>>>>>> 7b80b1929dfe1e925968e6b05c4f90cda40e391d
      </div>
    </section>
  );
}
