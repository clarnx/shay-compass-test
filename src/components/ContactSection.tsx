import PageSection from './PageSection';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  return (
    <PageSection id="contact" maxWidth="max-w-3xl">
      <SectionHeading title="Get In Touch" />
      <form className="space-y-6">
        <input
          type="text"
          name="honeypot"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-label="Don't fill this out"
        />

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content">Email</span>
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-base-content">Message</span>
          </label>
          <textarea
            placeholder="Your message"
            className="textarea textarea-bordered h-32"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </PageSection>
  );
}
