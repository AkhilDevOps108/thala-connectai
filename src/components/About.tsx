import { Heart, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">ThalaNet</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are on a mission to revolutionize blood access for thalassemia patients through AI-driven compassion and decentralized technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="mb-6">
                <Heart className="mx-auto text-primary animate-pulse-soft" size={48} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a world where no thalassemia patient faces the uncertainty of blood availability. 
                We bridge the gap between those who need and those who can give.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Users className="mx-auto text-primary animate-float" size={48} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                A decentralized network of patients, donors, healthcare providers, and volunteers 
                united by compassion and powered by cutting-edge technology.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Zap className="mx-auto text-primary animate-pulse-soft" size={48} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every conversation, every match, every donation saves lives. 
                We're building a future where immediate help is just a message away.
              </p>
            </div>
          </div>

          <div className="bg-gradient-subtle p-8 md:p-12 rounded-2xl shadow-card">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Why ThalaNet Matters
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">The Challenge</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Thalassemia patients require regular blood transfusions, but finding compatible donors 
                    can be time-consuming and stressful. Traditional systems are fragmented and slow.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Our Solution</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    AI-powered instant matching, 24/7 availability, and seamless integration with 
                    existing healthcare infrastructure to ensure no patient waits longer than necessary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;