import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import skylightWordmark from '@/assets/skylight-wordmark.png';

const ThankYouPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-16">
      <div className="glass-card max-w-xl w-full text-center p-10 space-y-6">
        <img
          src={skylightWordmark}
          alt="Skylight Media Solutions"
          className="h-12 mx-auto object-contain"
        />
        <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" strokeWidth={1.5} />
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Message Sent Successfully!
        </h1>
        <p className="text-muted-foreground">
          Thank you for contacting us. We will get back to you within 24 hours.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ThankYouPage;
