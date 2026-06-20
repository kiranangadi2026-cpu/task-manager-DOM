
1. HTML Parsing & Tokenization
Before the browser can build anything, it must convert the raw byte stream of an HTML file downloaded from a server into a format it understands. [3]
Tokenization (Lexical Analysis): The browser reads raw HTML bytes, converts them into characters based on encoding (like UTF-8), and breaks them into unique tokens. These tokens identify start tags, end tags, attribute names, values, and text content (e.g., turning <body> into a StartTag: body token). [4, 5, 6, 7, 8]
Parsing (Syntactic Analysis): As tokens are generated, the HTML parser processes them. Unlike strict languages, HTML parsers use unique error-correction algorithms to handle malformed markup (like a missing closing tag) without crashing. [9, 10, 11, 12, 13]
2. DOM Tree Creation
The output of the HTML parsing phase is the Document Object Model (DOM) Tree. [14]
Definition: A tree-like object model representation of the HTML document.
Structure: While parsing, the browser takes the structural tokens and links them together into an object hierarchy based on nesting rules.
Live Update: It remains dynamic; JavaScript can query and modify this tree after it forms. [15, 16, 17, 18, 19]
3. CSS Parsing & CSSOM Tree Creation
While the HTML parser is working, it will encounter <link> tags or <style> blocks referencing external or internal CSS rules. The browser pauses or works in parallel to download and parse these styles. [20, 21, 22, 23, 24]
Parsing CSS: The browser reads raw CSS stylesheet bytes and parses them into distinct rules containing selectors and declarations (e.g., body { font-size: 16px; }). [25, 26, 27, 28, 29]
CSSOM Tree: The parsed rules are structured into the CSS Object Model (CSSOM) Tree. This tree maps out cascade styling rules hierarchically. Styles cascade down from the parent nodes (like body) to child nodes unless overridden by a more specific selector. [30, 31, 32, 33, 34]
4. DOM Tree + CSSOM Tree = Render Tree [35]
Once the DOM and CSSOM trees are both constructed, the browser combines them into a third structure called the Render Tree. [36, 37, 38, 39, 40]
The Merge: The browser traverses the DOM tree from the root node and matches each visible element with its corresponding style rules from the CSSOM tree. [41, 42, 43, 44]
Content Filtering: The Render Tree contains only the nodes required to paint the webpage.
Elements with display: none; in the CSSOM are completely excluded from the Render Tree.
Structural tags like <head>, <meta>, or <script> that do not render visual outputs are excluded.
Elements with visibility: hidden; are included because they still occupy physical layout space on the screen, even if transparent. [45, 46, 47, 48, 49]
5. Final Output: Layout and Paint
Once the Render Tree is ready, the browser executes the final steps to draw the page: [50]
Layout (Reflow): The browser calculates the exact geometry, device coordinates, width, height, and relative position of every single node in the Render Tree.
Paint: The browser converts the calculated vector shapes, text, borders, and colors into actual colored pixels on the user's screen. [51, 52, 53, 54, 55]
