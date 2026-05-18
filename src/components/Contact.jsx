import { useState } from "react";
import { IoMailOutline, IoCallOutline, IoLocationOutline } from "react-icons/io5";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setStatus("Please complete all fields before sending.");
      return;
    }

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@myrecipeeapp.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email client — thanks for reaching out!");
  };

  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-6 rounded-4xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Get in touch</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Let	&apos;s cook something amazing together.
              </h1>
            </div>
            <p className="text-slate-400 leading-7">
              Want to share feedback, request a custom recipe, or collaborate? Send a message and I	&apos;ll get back to you as soon as possible.
            </p>
            <div className="space-y-4 text-sm text-slate-300 sm:text-base">
              <div className="flex gap-3 rounded-3xl bg-white/5 p-4">
                <IoMailOutline className="mt-1 h-6 w-6 text-amber-300" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-slate-400">hello@myrecipeeapp.com</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-3xl bg-white/5 p-4">
                <IoCallOutline className="mt-1 h-6 w-6 text-sky-300" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-slate-400">+234803936825</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-3xl bg-white/5 p-4">
                <IoLocationOutline className="mt-1 h-6 w-6 text-emerald-300" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-slate-400">Remote support worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-4xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Write your name here"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                  Your email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me what you'd like to cook or ask a question..."
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20"
                />
              </div>

              {status && (
                <p className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-200">{status}</p>
              )}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-3xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
