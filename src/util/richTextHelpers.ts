/**
 * Utility functions for handling Lexical richText format from Payload CMS
 */

import { LexicalRichText, LexicalNode, isLexicalRichText } from '@/types/payload';

/**
 * Extracts plain text from Lexical richText format
 * @param richText - Lexical richText object or plain string
 * @returns Plain text string with paragraphs separated by newlines
 */
export function extractTextFromRichText(richText: LexicalRichText | string | null | undefined): string {
  if (!richText) return '';

  // If it's already a string, return it
  if (typeof richText === 'string') return richText;

  // If it's a Lexical richText object with root
  if (isLexicalRichText(richText) && richText.root?.children) {
    return richText.root.children
      .map((node: LexicalNode) => {
        if (node.children) {
          return node.children
            .map((child) => child.text || '')
            .join('');
        }
        return node.text || '';
      })
      .filter((text) => text.length > 0) // Remove empty paragraphs
      .join('\n');
  }

  return '';
}

/**
 * Checks if richText has any content
 * @param richText - Lexical richText object or plain string
 * @returns true if there is non-empty content
 */
export function hasRichTextContent(richText: LexicalRichText | string | null | undefined): boolean {
  const text = extractTextFromRichText(richText);
  return text.trim().length > 0;
}
