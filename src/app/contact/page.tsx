"use client";

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-lilac-100 text-lilac-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-gray-600">
            Have a question or just want to say hi? We&apos;d love to hear from you.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-lilac-200 focus:outline-none focus:ring-2 focus:ring-lilac-400 focus:border-transparent text-sm text-gray-700 placeholder-gray-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-lilac-200 focus:outline-none focus:ring-2 focus:ring-lilac-400 focus:border-transparent text-sm text-gray-700 placeholder-gray-400"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-lilac-200 focus:outline-none focus:ring-2 focus:ring-lilac-400 focus:border-transparent text-sm text-gray-700 placeholder-gray-400 resize-none"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-lilac-600 text-white text-sm font-semibold hover:bg-lilac-700 transition-colors shadow-sm"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 pt-10 border-t border-lilac-100">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-lg mb-1">✉</div>
              <p className="text-sm font-medium text-dark">Email</p>
              <p className="text-sm text-gray-500">hello@shemastore.com</p>
            </div>
            <div>
              <div className="text-lg mb-1">☎</div>
              <p className="text-sm font-medium text-dark">Phone</p>
              <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
            </div>
            <div>
              <div className="text-lg mb-1">◉</div>
              <p className="text-sm font-medium text-dark">Social</p>
              <p className="text-sm text-gray-500">@shemastore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
