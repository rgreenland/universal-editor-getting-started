export default function decorate(block) {
    const [feature1Wrapper] = block.children;
  
    const blockfeature1 = document.createElement('blockfeature1');
     //blockquote.textContent = quoteWrapper.textContent.trim() + "hHHeeyy";
     blockfeature1.textContent = "";
     blockfeature1.setHTMLUnsafe("<div class=\"MuiGrid-root MuiGrid-container css-1w5a2c\" data-fondue-recipe=\"feature-2:1.0.0\" data-fondue-version=\"2.31.0\">hey</div>")
    //  blockquote.textContent += "<div class=\"MuiGrid-root MuiGrid-container css-1w5a2c\" data-fondue-recipe=\"feature-2:1.0.0\" data-fondue-version=\"2.31.0\">";
    //  blockquote.textContent += "hey</div>";
    quoteWrapper.replaceChildren(blockfeature1);
  }