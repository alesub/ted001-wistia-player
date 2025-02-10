import { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "wistia-player": DetailedHTMLProps<
          HTMLAttributes<HTMLElement>,
          HTMLElement
        >;
        "wistia-transcript": DetailedHTMLProps<
          HTMLAttributes<HTMLElement>,
          HTMLElement
        >;
      }
    }
  }
}