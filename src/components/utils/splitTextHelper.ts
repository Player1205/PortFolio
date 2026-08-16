/**
 * Self-contained SplitText utility compatible with GSAP animations
 */
export interface SplitTextOptions {
  type?: string;
  linesClass?: string;
  wordsClass?: string;
  charsClass?: string;
}

export class SplitText {
  elements: HTMLElement[] = [];
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  private originalContent: Map<HTMLElement, string> = new Map();

  constructor(
    target: string | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement>,
    options?: SplitTextOptions
  ) {
    if (typeof target === "string") {
      this.elements = Array.from(document.querySelectorAll(target));
    } else if (target instanceof HTMLElement) {
      this.elements = [target];
    } else if (target instanceof NodeList || Array.isArray(target)) {
      this.elements = Array.from(target as any);
    }

    const type = options?.type || "chars,words,lines";
    const linesClass = options?.linesClass || "split-line";
    const wantsChars = type.includes("chars");
    const wantsWords = type.includes("words");
    const wantsLines = type.includes("lines");

    this.elements.forEach((el) => {
      if (!this.originalContent.has(el)) {
        this.originalContent.set(el, el.innerHTML);
      }

      const text = el.innerText || el.textContent || "";
      el.innerHTML = "";

      const rawLines = text.split("\n");

      rawLines.forEach((lineText, lineIdx) => {
        const lineSpan = document.createElement("span");
        lineSpan.className = linesClass;
        lineSpan.style.display = "inline-block";
        lineSpan.style.overflow = "hidden";
        lineSpan.style.verticalAlign = "top";

        const rawWords = lineText.split(" ");
        rawWords.forEach((wordText, wordIdx) => {
          const wordSpan = document.createElement("span");
          wordSpan.style.display = "inline-block";
          wordSpan.style.whiteSpace = "nowrap";

          if (wantsChars) {
            for (let char of wordText) {
              const charSpan = document.createElement("span");
              charSpan.style.display = "inline-block";
              charSpan.textContent = char;
              wordSpan.appendChild(charSpan);
              this.chars.push(charSpan);
            }
          } else {
            wordSpan.textContent = wordText;
          }

          lineSpan.appendChild(wordSpan);
          if (wantsWords) this.words.push(wordSpan);

          if (wordIdx < rawWords.length - 1) {
            const space = document.createTextNode("\u00A0");
            lineSpan.appendChild(space);
          }
        });

        el.appendChild(lineSpan);
        if (wantsLines) this.lines.push(lineSpan);

        if (lineIdx < rawLines.length - 1) {
          el.appendChild(document.createElement("br"));
        }
      });
    });
  }

  revert() {
    this.elements.forEach((el) => {
      const original = this.originalContent.get(el);
      if (original !== undefined) {
        el.innerHTML = original;
      }
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}

export default SplitText;
