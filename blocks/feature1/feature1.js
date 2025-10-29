export default function decorate(block) {
    const [feature1Wrapper] = block.children;
  
    const blockfeature1 = document.createElement('blockfeature1');
    var html_to_display ="";
     //blockquote.textContent = quoteWrapper.textContent.trim() + "hHHeeyy";
     html_to_display += "heyi"
     blockfeature1.textContent = "";
     blockfeature1.setHTMLUnsafe(html_to_display);
    quoteWrapper.replaceChildren(blockfeature1);
  }