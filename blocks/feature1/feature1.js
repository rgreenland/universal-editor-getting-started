export default function decorate(block) {
    const [quoteWrapper] = block.children;
  
    const blockquote = document.createElement('blockquote');
     //blockquote.textContent = quoteWrapper.textContent.trim() + "hHHeeyy";
     blockquote.textContent = "";
     blockquote.textContent += "<div class=\"MuiGrid-root MuiGrid-container css-1w5a2c\" data-fondue-recipe=\"feature-2:1.0.0\" data-fondue-version=\"2.31.0\">";
     blockquote.textContent += "hey</div>";
    quoteWrapper.replaceChildren(blockquote);
  }