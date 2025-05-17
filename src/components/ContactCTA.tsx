
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-fintech-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-roboto text-fintech-primary mb-6">
              Ready to Transform Your Fintech Vision Into Reality?
            </h2>
            <p className="text-lg font-inter text-fintech-supporting1 mb-8">
              Let's discuss how our expertise can help you build innovative financial solutions that
              drive growth and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-fintech-primary hover:bg-fintech-secondary text-white px-8 py-6 rounded-md text-lg"
              >
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                className="border-fintech-primary text-fintech-primary hover:bg-fintech-primary/5 px-8 py-6 rounded-md text-lg"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
