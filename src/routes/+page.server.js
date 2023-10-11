// Import the necessary libraries
import * as Plot from '@observablehq/plot';
import { JSDOM } from 'jsdom';

// Plot will need a reference to a DOM window document later in the code
const { document } = new JSDOM().window;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  // Create your plot. Make sure the `document` property points to a DOM
  // window document. Also make sure you are getting the `outerHTML`
  // property (the line at the end).
  const plot = Plot.plot({
    marks: [
      Plot.rectY(
        { length: 10000 },
        Plot.binX({ y: "count" }, { x: Math.random })
      )
    ],
    document
  }).outerHTML;

  // At this point, `plot` contains the HTML string representing the
  // plotted chart. Return it.
  return {
    plot
  };
}
