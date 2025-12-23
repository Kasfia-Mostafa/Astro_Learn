import React from 'react';

const AcademyCTA = () => {
  return (
    <section className="py-24 px-6 my-60">
      <div className="max-w-7xl mx-auto">
        {/* Main Banner Container */}
        <div className="relative rounded-[3rem] overflow-hidden flex flex-col xl:flex-row">

          {/* Section 1: The "Why" (Motivational Intro) */}
          <div
            className="xl:w-2/5 p-12 lg:p-16 flex flex-col justify-center"
            style={{ backgroundColor: 'var(--color-bronze)' }}
          >
            <h2 className="text-4xl lg:text-6xl font-serif font-bold leading-tight mb-6"
                style={{ color: 'var(--color-papaya)' }}>
              Transform Your Path.
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed"
               style={{ color: 'var(--color-cornsilk)' }}>
              Access 1,200+ world-class courses and join a global community designed to help you flourish.
            </p>
            <div className="flex gap-4">
               <div className="h-1 w-12 rounded-full" style={{ backgroundColor: 'var(--color-papaya)' }}></div>
               <div className="h-1 w-4 rounded-full opacity-50" style={{ backgroundColor: 'var(--color-papaya)' }}></div>
            </div>
          </div>

          {/* Section 2: The "Proof" (Visual Stats Grid) */}
          <div
            className="xl:w-1/3 p-12 flex flex-col justify-center border-x border-black/5"
            style={{ backgroundColor: 'var(--color-teagreen)' }}
          >
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white/30 shadow-sm">
                  <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-800">50,000+</h4>
                  <p className="text-sm text-slate-700 font-medium">Active Students Worldwide</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white/30 shadow-sm">
                  <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-800">98%</h4>
                  <p className="text-sm text-slate-700 font-medium">Job Placement Success</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white/30 shadow-sm">
                  <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-800">4.9/5</h4>
                  <p className="text-sm text-slate-700 font-medium">Average Course Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: The "Action" (CTA Buttons) */}
          <div
            className="xl:w-1/3 p-12 lg:p-16 flex flex-col justify-center items-center gap-6"
            style={{ backgroundColor: 'var(--color-beige)' }}
          >
            <div className="text-center mb-4">
              <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">Get Started</span>
              <h3 className="text-2xl font-bold text-slate-800 mt-2">Pick Your Path</h3>
            </div>

            <button
              className="group relative w-full py-5 px-8 rounded-2xl font-bold overflow-hidden transition-all shadow-lg hover:shadow-xl active:scale-95"
              style={{ backgroundColor: 'var(--color-bronze)', color: 'var(--color-papaya)' }}
            >
              <span className="relative z-10">I’m a Student</span>
              <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            </button>

            <button
              className="w-full py-5 px-8 rounded-2xl font-bold border-2 transition-all hover:bg-white active:scale-95"
              style={{ borderColor: 'var(--color-bronze)', color: 'var(--color-bronze)' }}
            >
              Become an Instructor
            </button>

            <p className="text-xs text-slate-400 text-center mt-4">
              Join the elite 1% of educators or the 50k+ learners today.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AcademyCTA;
