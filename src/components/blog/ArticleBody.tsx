import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ContentBlock } from "@/lib/blog-content-types";

interface ArticleBodyProps {
  blocks: ContentBlock[];
}

export function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div>
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 key={index} className="text-2xl md:text-3xl font-mono font-bold text-foreground mt-12 mb-5 first:mt-0">
              {block.text}
            </h2>
          );
        }

        if (block.type === "subheading") {
          return (
            <h3 key={index} className="text-xl font-mono font-bold text-foreground mt-8 mb-4">
              {block.text}
            </h3>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p key={index} className="text-muted-foreground leading-relaxed mb-5 text-[1.05rem]">
              {block.content.map((segment, segIndex) =>
                typeof segment === "string" ? (
                  <span key={segIndex}>{segment}</span>
                ) : (
                  <Link
                    key={segIndex}
                    href={segment.href}
                    className="text-primary font-medium hover:underline underline-offset-2"
                  >
                    {segment.text}
                  </Link>
                )
              )}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="space-y-3 mb-6">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={index} className="my-10">
              <div className="relative rounded-2xl overflow-hidden border border-border/50">
                <img src={block.src} alt={block.alt} className="w-full h-auto" />
              </div>
              {block.caption && (
                <figcaption className="text-sm text-muted-foreground text-center mt-3 italic">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        if (block.type === "cta") {
          return (
            <div key={index} className="relative my-12 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
              <div className="relative z-10 p-8 md:p-10 text-center">
                <p className="text-xs font-mono font-semibold text-primary uppercase tracking-wider mb-2">
                  {block.eyebrow}
                </p>
                <h3 className="text-2xl font-mono font-bold text-white mb-3">{block.title}</h3>
                <p className="text-gray-300 mb-6 max-w-xl mx-auto">{block.description}</p>
                <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold px-8">
                  <Link href={block.buttonHref}>{block.buttonLabel}</Link>
                </Button>
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}