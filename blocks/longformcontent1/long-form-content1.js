
/**
 * LongFormContent-1 Decorator
 * default export: decorate(block)
 * Enhances semantic HTML with a heading (level 2) and rich description body.
 */
export default function decorate(block) {
    if (!block || block.nodeType !== 1) return;
    if (block.dataset.decorated === 'true') return;
    block.dataset.decorated = 'true';
  
    block.classList.add('lfc1');
  
    // Create the outer stack wrapper (non-destructive)
    const stack = document.createElement('div');
    stack.className = 'lfc1__stack';
    while (block.firstChild) stack.appendChild(block.firstChild);
    block.appendChild(stack);
  
    // Title: prefer [data-aue-prop="title"], else first h2/h1
    const title = stack.querySelector('[data-aue-prop="title"], h2, h1');
    if (title) {
      title.classList.add('lfc1__title');
      // Normalize to h2 (component uses level=2)
      if (!/^H2$/i.test(title.tagName)) {
        const h2 = document.createElement('h2');
        h2.className = title.className;
        h2.setAttribute('data-aue-prop', title.getAttribute('data-aue-prop') || 'title');
        h2.setAttribute('data-aue-type', title.getAttribute('data-aue-type') || 'text');
        h2.setAttribute('data-aue-label', title.getAttribute('data-aue-label') || 'Title');
        h2.textContent = title.textContent || '';
        title.replaceWith(h2);
      }
    }
  
    // Description: prefer a container marked with data-aue-prop="description";
    // otherwise collect paragraphs, lists, and inline images as the description body.
    let desc = stack.querySelector('[data-aue-prop="description"]');
    if (!desc) {
      desc = document.createElement('div');
      desc.className = 'lfc1__desc';
      desc.setAttribute('data-aue-prop', 'description');
      desc.setAttribute('data-aue-type', 'text');
      desc.setAttribute('data-aue-label', 'Description');
  
      const nodes = [];
      let node = stack.firstChild;
      while (node) {
        const next = node.nextSibling;
        if (node.nodeType === 1 && (node.matches('h1, h2') || node.classList.contains('lfc1__title'))) {
          // skip the title
        } else if (node.nodeType === 1 && (node.matches('p, ul, ol, blockquote, figure, img'))) {
          nodes.push(node);
        }
        node = next;
      }
      nodes.forEach((n) => desc.appendChild(n));
      stack.appendChild(desc);
    } else {
      desc.classList.add('lfc1__desc');
    }
  
    // Limit width for readability and ensure images are responsive inside description
    desc.querySelectorAll('img').forEach((img) => {
      img.classList.add('lfc1__img');
      img.loading = img.loading || 'lazy';
      img.decoding = img.decoding || 'async';
    });
  }
  