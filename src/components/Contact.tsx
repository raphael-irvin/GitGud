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

interface FormErrors {
  name?: string;
  email?: string;
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
      </div>
    </section>
  );
}
