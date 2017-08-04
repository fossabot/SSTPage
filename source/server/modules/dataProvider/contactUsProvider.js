import path from 'path'

import dataProvider from '../dataProvider'
import configuration from '../../../../configuration'

let contactUsData;

contactUsData = {data: {}, dataString: ''};

const introductionProvider = new dataProvider({
  name: 'Contact introduction',
  location: path.join(configuration.path.data, 'contents', 'contactIntroduction.md'),
  init: true,
  watch: true,
  type: 'md',
});

const addressProvider = new dataProvider({
  name: 'Contact address',
  location: path.join(configuration.path.data, 'contents', 'contactAddress.md'),
  init: true,
  watch: true,
  type: 'md',
});
const contactSidebarProvider = new dataProvider({
  name: 'Contact sidebar',
  location: path.join(configuration.path.data, 'configurations', 'contact.yaml'),
  init: true,
  watch: true
});

const buildContactUsData = () => {
  let thisData;

  thisData = {data: {}, dataString: ''};

  thisData.data.introduction = introductionProvider.data;
  thisData.data.address = addressProvider.data;
  thisData.data.sidebar = contactSidebarProvider.data;

  thisData.dataString = JSON.stringify(thisData.data);
  contactUsData = thisData;
}

introductionProvider.subscribe(buildContactUsData);
addressProvider.subscribe(buildContactUsData);
contactSidebarProvider.subscribe(buildContactUsData, true);

export default contactUsData