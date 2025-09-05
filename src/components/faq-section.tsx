"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQSection({ faq }: { faq: any }) {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = faq.map((item: any) => ({
    question: item.question,
    answer: item.answer,
  }));

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about using MIRA for your marketing
            campaigns
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq: any, index: number) => (
              <Card key={index} className="border-border/50">
                <Collapsible
                  open={openItems.includes(index)}
                  onOpenChange={() => toggleItem(index)}
                >
                  <CollapsibleTrigger className="w-full">
                    <CardContent className="p-6 hover:bg-muted/30 transition-colors">
                      <div className="flex items-center justify-between text-left">
                        <h3 className="text-lg font-semibold text-foreground pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground transition-transform ${
                            openItems.includes(index) ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
