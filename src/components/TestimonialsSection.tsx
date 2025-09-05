import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael Harrison",
      title: "Tech Executive",
      content: "Working with this advisory team transformed our family's financial future. They helped us grow our portfolio by 45% over three years while maintaining conservative risk levels.",
      result: "+45% Portfolio Growth",
      rating: 5
    },
    {
      name: "Sarah Chen",
      title: "Business Owner",
      content: "The comprehensive wealth management approach exceeded our expectations. Their tax optimization strategies alone saved us over $200K annually.",  
      result: "$200K+ Annual Tax Savings",
      rating: 5
    },
    {
      name: "Robert & Lisa Martinez",
      title: "Retired Couple",  
      content: "Our advisor's estate planning expertise gave us complete peace of mind. The succession plan they created will benefit our children for generations.",
      result: "Multi-Generational Plan",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 smooth-reveal">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Client Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real success stories from high-net-worth clients who trusted us with their financial future.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="premium-card relative group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-accent" />
              </div>

              {/* Rating Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Result Highlight */}
              <div className="premium-card bg-accent/5 border-accent/20 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-accent">{testimonial.result}</div>
                </div>
              </div>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-primary">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;