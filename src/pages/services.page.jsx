import React from 'react';
import FindUs from "../components/findUs.jsx"
import Services from "../components/services.jsx"@font-face {
  font-family: 'AvenirNextCondensed-HeavyItalic';
  src: url('AvenirNextCondensed-HeavyItalic.eot?#iefix') format('embedded-opentype'),  url('AvenirNextCondensed-HeavyItalic.woff') format('woff'), url('AvenirNextCondensed-HeavyItalic.ttf')  format('truetype'), url('AvenirNextCondensed-HeavyItalic.svg#AvenirNextCondensed-HeavyItalic') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'AvenirNextCondensed-Bold';
  src: url('AvenirNextCondensed-Bold.eot?#iefix') format('embedded-opentype'),  url('AvenirNextCondensed-Bold.woff') format('woff'), url('AvenirNextCondensed-Bold.ttf')  format('truetype'), url('AvenirNextCondensed-Bold.svg#AvenirNextCondensed-Bold') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'AvenirNextCondensed-DemiBold';
  src: url('AvenirNextCondensed-DemiBold.eot?#iefix') format('embedded-opentype'),  url('AvenirNextCondensed-DemiBold.woff') format('woff'), url('AvenirNextCondensed-DemiBold.ttf')  format('truetype'), url('AvenirNextCondensed-DemiBold.svg#AvenirNextCondensed-DemiBold') format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'AvenirNext-DemiBold';
  src: url('AvenirNext-DemiBold.eot?#iefix') format('embedded-opentype'),  url('AvenirNext-DemiBold.woff') format('woff'), url('AvenirNext-DemiBold.ttf')  format('truetype'), url('AvenirNext-DemiBold.svg#AvenirNext-DemiBold') format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'AvenirNextCondensed-Medium';
  src: url('AvenirNextCondensed-Medium.eot?#iefix') format('embedded-opentype'),  url('AvenirNextCondensed-Medium.woff') format('woff'), url('AvenirNextCondensed-Medium.ttf')  format('truetype'), url('AvenirNextCondensed-Medium.svg#AvenirNextCondensed-Medium') format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'AvenirNext-Medium';
  src: url('AvenirNext-Medium.eot?#iefix') format('embedded-opentype'),  url('AvenirNext-Medium.woff') format('woff'), url('AvenirNext-Medium.ttf')  format('truetype'), url('AvenirNext-Medium.svg#AvenirNext-Medium') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'AvenirNextLTPro-MediumCn';
  src: url('AvenirNextLTPro-MediumCn.eot?#iefix') format('embedded-opentype'),  url('AvenirNextLTPro-MediumCn.otf')  format('opentype'),
	     url('AvenirNextLTPro-MediumCn.woff') format('woff'), url('AvenirNextLTPro-MediumCn.ttf')  format('truetype'), url('AvenirNextLTPro-MediumCn.svg#AvenirNextLTPro-MediumCn') format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {

    font-family: 'latoregular';

    src: url('lato-regular-webfont.eot');

    src: url('lato-regular-webfont.eot?#iefix') format('embedded-opentype'),

         url('lato-regular-webfont.woff') format('woff'),

         url('lato-regular-webfont.ttf') format('truetype'),

         url('lato-regular-webfont.svg#latoregular') format('svg');

    font-weight: normal;

    font-style: normal;



}


function AboutPage() {
  return (
    <div className="App">
      <PersonalTrainer />
      <Services />
      <FindUs />
      
    </ div>
  );
}

export default AboutPage;