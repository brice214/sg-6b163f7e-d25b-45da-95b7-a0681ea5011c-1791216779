export type TextSegment = string | { text: string; href: string };

export interface ParagraphBlock {
  type: "paragraph";
  content: TextSegment[];
}

export interface HeadingBlock {
  type: "heading";
  text: string;
}

export interface SubheadingBlock {
  type: "subheading";
  text: string;
}

export interface ListBlock {
  type: "list";
  items: string[];
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export interface CtaBlock {
  type: "cta";
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | SubheadingBlock
  | ListBlock
  | ImageBlock
  | CtaBlock;

export interface BlogArticleContent {
  slug: string;
  blocks: ContentBlock[];
  relatedSlugs: string[];
}