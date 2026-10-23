import { useState } from 'react';

const projectTypeOptions = [
  'Custom Home (New Construction)',
  'Home Addition or Expansion',
  'Design-Build (Plans + Construction)',
  'Lot Evaluation',
  'Not Sure Yet',
];
const squareFootageOptions = [
  'Under 2,500 sq ft',
  '2,500–4,000 sq ft',
  '4,000–6,000 sq ft',
  '6,000+ sq ft Estate',
];
const servicesNeededOptions = [
  'Full Design-Build (Plans + Permits + Construction)',
  'Plans & Permits Only',
  'Construction Only',
  'Home Addition',
  'Construction Management',
  'Not Sure Yet',
];
const timelineOptions = ['Immediately', '1–3 months', '3–6 months', '6+ months'];

const inputClasses =
  'w-full border border-[rgba(28,25,23,0.18)] bg-[#fbf9f5] px-4 py-3.5 font-sans text-sm text-[#1c1917] placeholder:text-[#1c1917]/40 focus:border-[#8c6d46] focus:outline-none transition-colors';
const labelClasses =
  'block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#1c1917]/80 mb-2';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    unitCount: '',
    projectType: '',
    timeline: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (submitError) setSubmitError('');
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email address.';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!/^[\d\s()+-]{7,20}$/.test(form.phone))
      newErrors.phone = 'Please enter a valid phone number.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setSubmitted(true);
      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        unitCount: '',
        projectType: '',
        timeline: '',
        message: '',
      });
    } catch (err) {
      setSubmitError(err.message || 'Unable to submit right now. Please call (832) 360-3804 directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-[#8c6d46] bg-[#fbf9f5] p-8 text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#8c6d46] mb-2">
          Dossier Received
        </p>
        <h2 className="font-heading text-3xl font-medium text-[#1c1917] mb-3">
          Consultation Request Confirmed
        </h2>
        <p className="font-sans text-sm text-[#1c1917]/75 mb-6 max-w-md mx-auto leading-relaxed">
          Thank you for sharing your project parameters. Our principal team will review your lot and scope details and respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="bg-[#1c1917] text-[#fffdf8] px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em]"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {submitError && (
        <div className="border border-red-800/30 bg-red-50/80 p-4 font-sans text-xs text-red-900">
          {submitError}
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name <span className="text-[#8c6d46]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className={`${inputClasses} ${errors.name ? 'border-red-600' : ''}`}
          />
          {errors.name && <p className="mt-1 font-sans text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-[#8c6d46]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="name@domain.com"
            className={`${inputClasses} ${errors.email ? 'border-red-600' : ''}`}
          />
          {errors.email && <p className="mt-1 font-sans text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number <span className="text-[#8c6d46]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(832) 360-3804"
            className={`${inputClasses} ${errors.phone ? 'border-red-600' : ''}`}
          />
          {errors.phone && <p className="mt-1 font-sans text-xs text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="company" className={labelClasses}>
            Project Type
          </label>
          <select id="company" name="company" value={form.company} onChange={handleChange} className={inputClasses}>
            <option value="">Select project type</option>
            {projectTypeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="unitCount" className={labelClasses}>
            Target Square Footage
          </label>
          <select id="unitCount" name="unitCount" value={form.unitCount} onChange={handleChange} className={inputClasses}>
            <option value="">Select range</option>
            {squareFootageOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="projectType" className={labelClasses}>
            Services Needed
          </label>
          <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange} className={inputClasses}>
            <option value="">Select services</option>
            {servicesNeededOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="timeline" className={labelClasses}>
            Desired Start Horizon
          </label>
          <select id="timeline" name="timeline" value={form.timeline} onChange={handleChange} className={inputClasses}>
            <option value="">Select timeline</option>
            {timelineOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Lot Location &amp; Architectural Notes
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Share your neighborhood/lot address, architectural status, or specific requirements..."
            className={inputClasses}
          />
        </div>
      </div>
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto bg-[#8c6d46] px-10 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#fffdf8] transition hover:bg-[#a68254] disabled:opacity-60"
        >
          {loading ? 'Submitting Dossier...' : 'Submit Consultation Request →'}
        </button>
      </div>
    </form>
  );
}
