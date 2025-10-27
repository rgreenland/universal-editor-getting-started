import { UE_HOST_URI_AUTHOR, UE_HOST_URI_PUBLISH } from '@pkg/constants/ue';
import { isUniversalEditor } from '@pkg/utils/isUniversalEditor';
import { useAemDataAttributes } from '@pkg/hooks/useAemDataAttributes';

// Simulated function to render a card (you'd replace this with actual DOM logic)
function renderCard(cardProps) {
  console.log('Rendering card:', cardProps);
}

// Main function to process components
function Feature1(components, props) {
  const aemDataAttributes = useAemDataAttributes(props);

  components.forEach((component) => {
    const {
      align,
      content,
      external,
      href,
      _id,
      _model: { title: modelTitle },
      _path,
      image,
      label,
      openInNewTab = false,
      padding,
      title,
    } = component;

    const cardProps = {
      title,
      content: content.json.map((v, i) => ({
        type: 'richText',
        data: v,
        key: i,
      })),
      media: {
        alt: image.description,
        padding: Boolean(padding),
        src:
          (isUniversalEditor() ? UE_HOST_URI_AUTHOR : UE_HOST_URI_PUBLISH) +
          image._path,
      },
      callToAction: {
        align,
        external: external || undefined,
        href,
        label,
        target: openInNewTab ? '_blank' : undefined,
      },
      metadata: {
        resource: `urn:aemconnection:${_path}/jcr:content/data/master`,
        type: 'component',
        label: modelTitle,
        testId: 'feature-1-card-container',
      },
    };

    renderCard(cardProps);
  });
}


// export default function decorate(block) {
//     const [quoteWrapper] = block.children;
  
//     const blockquote = document.createElement('blockquote');
//     blockquote.textContent = quoteWrapper.textContent.trim() + "hHHeeyy";
//     quoteWrapper.replaceChildren(blockquote);
//   }