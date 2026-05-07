export default function VideoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* YouTube embed */}
          <div className="w-full rounded-2xl overflow-hidden shadow-xl aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/i3gYnG6ID0o"
              title="What is UNA Health?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Text */}
          <div>
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">About UNA</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mb-5">
              What is UNA?
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              UNA is a suite of comprehensive mobile-first solutions for hospital networks, staffing agencies, and healthcare professionals.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Better connect with candidates, improve applicant engagement, optimize compliance workflows, and set a new higher standard for your career or the clinicians in your organization.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
