import { moveInstrumentation } from "../../scripts/scripts.js";

function Card(title, content, image, padding, label, href, openInNewTab, align, external) {
  this.title = title;
  this.content = content;
  this.image = image;
  this.padding = padding;
  this.label = label;
  this.href = href;
  this.openInNewTab = openInNewTab;
  this.align = align;
  this.external = external;

}

export default function decorate(block) {

    var Cards = [];

    const divCardContainer = document.createElement('div');
    divCardContainer.className="css-l33vzl";
    [...block.children].forEach((card, index) => {
    Cards.push(new Card(card.children[0].innerText, card.children[1].innerText, card.children[2].innerText, card.children[3].innerText, card.children[4].innerText, card.children[5].innerText, card.children[6].innerText, card.children[7].innerText, card.children[8].innerText));

  
    const divCard1 = document.createElement('div');
    divCard1.className = "MuiGrid-root MuiGrid-item MuiGrid-grid-mobile-4 MuiGrid-grid-tablet-4 MuiGrid-grid-desktop-3 css-swicca";
    moveInstrumentation(card, divCard1);
    const divCard2 = document.createElement('div');
    divCard2.className = "MuiBox-root css-azi59w";
    
    const divCard3 = document.createElement('div');
    divCard3.className = "MuiBox-root css-xr0tum-elevation";
    
    const divCard4 = document.createElement('div');
    divCard4.className = "MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1io05rj-cardVertical";
    
    const divCard5 = document.createElement('div');
    divCard5.className = "MuiBox-root css-csxdjx";

    // 6 + 7 are both going to be added to 5 purposefully
    // 6 media main
    // 7 card media
    const divCard6 = document.createElement('div');
    divCard6.className = "MuiBox-root css-uo9x6t";

    const imgCard = document.createElement('img');
    imgCard.src = "https://content.centene.com/content/dam/dev-my/employee/medicaid/coordinatedcarehealth/hub/en/default/pages/example-app/blocks/placeholder.png";
    imgCard.className = "MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img css-4nord8-root";
    divCard6.appendChild(imgCard);

    // Card media stuff
    const divCard7 = document.createElement('div');
    divCard7.className = "MuiBox-root css-ojdqi7";

    // TITLE
    const divCard8 = document.createElement('div');
    divCard8.className = "MuiBox-root css-1161qt5";

    const divCard9 = document.createElement('div');
    divCard9.className = "MuiCardHeader-root css-1dbk1mq";

    const divCard10 = document.createElement('div');
    divCard10.className = "MuiCardHeader-content css-11qjisw";

    const divCard11 = document.createElement('span');
    divCard11.className = "MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-1g3izzu";
    divCard11.innerText = Cards[index].title;

    moveInstrumentation(card.children[0].children[0], divCard11);

    divCard10.appendChild(divCard11);
    divCard9.appendChild(divCard10);
    divCard8.appendChild(divCard9);
    divCard7.appendChild(divCard8);

    // CONTENT
    const divCard12 = document.createElement('div');
    divCard12.className = "MuiBox-root css-i9gxme";

    const divCard13 = document.createElement('div');
    divCard13.className = "MuiCardContent-root css-bmbybl";

    const divCard14 = document.createElement('span');
    divCard14.className = "css-14x8pkq-basics css-c6ai19-bodyCopy";

    const divCard15 = document.createElement('span');
    divCard15.className = "css-14x8pkq-basics css-c6ai19-bodyCopy";

    const divCard16 = document.createElement('p');
    divCard16.className = "MuiBox-root css-1161qt5";

    const divCard17 = document.createElement('span');
    divCard17.innerText = Cards[index].content;

    moveInstrumentation(card.children[1].children[0], divCard17);
    divCard16.appendChild(divCard17);
    divCard15.appendChild(divCard16);
    divCard14.appendChild(divCard15);
    divCard13.appendChild(divCard14);
    divCard12.appendChild(divCard13);
    divCard7.appendChild(divCard12);

    // CTA
    const divCard18 = document.createElement('div');
    divCard18.className = "MuiBox-root css-ydieok";

    const divCard19 = document.createElement('div');
    divCard19.className = "MuiCardActions-root MuiCardActions-spacing css-rniqkc";

    const divCard20 = document.createElement('a');
    divCard20.className = "MuiTypography-root MuiTypography-body1 MuiLink-root MuiLink-underlineAlways css-a1q6dp-root";    
    divCard20.href = Cards[index].href;
    divCard20.innerText = Cards[index].label;

    divCard19.appendChild(divCard20);
    divCard18.appendChild(divCard19);    
    divCard7.appendChild(divCard18);

    divCard5.appendChild(divCard6);
    divCard5.appendChild(divCard7);
    divCard4.appendChild(divCard5);
    divCard3.appendChild(divCard4);
    divCard2.appendChild(divCard3);
    divCard1.appendChild(divCard2);

    divCardContainer.appendChild(divCard1);
    // moveInstrumentation(row, div);
    // var x= 0;
    // while (row.firstElementChild) div.append(row.firstElementChild);
    // [...div.children].forEach((div) => {
    // var xyz = `hey-${id}`;
    //   if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
    //   else div.className = 'cards-card-body';
    // });
    // div.append(div);
    // });
  });
  block.textContent = '';
  block.append(divCardContainer);
};