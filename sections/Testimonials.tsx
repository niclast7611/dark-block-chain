import React from "react";
import { twMerge } from "tailwind-merge";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Erica Wyatt",
      title: "Product Manager - BlockLink",
      quote:
        "The user experience is phenomenal, and the support team is always there to help. Highly recommended!",
      avatarImage: "/assets/images/avatar-erica-wyatt.jpg",
    },
    {
      name: "Noel Baldwin",
      title: "Lead Developer - BitBridge",
      quote:
        "Out productivity has skyrocketed since we started using Blockforge. It's a game changer for our team.",
      avatarImage: "/assets/images/avatar-noel-baldwin.jpg",
    },
    {
      name: "Harry Bender",
      title: "CTO - CryptoSolutions",
      quote:
        "The integration process was seamless, and the performance improvements are beyond our expectations.",
      avatarImage: "/assets/images/avatar-harry-bender.jpg",
    },
  ];
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 md:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {testimonials.map(({ name, title, quote, avatarImage }, index) => (
            <blockquote
              key={index}
              className={twMerge(index === 2 && "md:hidden lg:block")}
            >
              <p className="font-heading text-3xl font-black lg:text-4xl">
                &ldquo;{quote}&rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div>
                    <div
                      className="size-16 bg-zinc-700 rounded-full bg-cover"
                      style={{
                        backgroundImage: `url(${avatarImage})`,
                      }}
                    />
                  </div>
                  <div>
                    <div className="text-lg not-italic font-black">{name}</div>
                    <div className="text-zinc-400 not-italic">{title}</div>
                  </div>
                </div>
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
      s
    </section>
  );
};

export default Testimonials;
