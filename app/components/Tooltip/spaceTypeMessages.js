import { defineMessages } from 'react-intl';

import SpaceTypes from 'constants/SpaceTypes';

const scope = `subSpaces`;

export default defineMessages({
  [SpaceTypes.PRINTER_3D]: {
    id: `${scope}.3dPrinters`,
    defaultMessage: '3D-tulostimet',
  },
  [SpaceTypes.EMBROIDERY_MACHINE]: {
    id: `${scope}.embroideryMachine`,
    defaultMessage: 'Kirjovat ompelukoneet',
  },
  [SpaceTypes.SEWING_MACHINE]: {
    id: `${scope}.sewingMachine`,
    defaultMessage: 'Ompelukoneet',
  },
  [SpaceTypes.COVERSTITCH_MACHINE]: {
    id: `${scope}.coverstitchMachine`,
    defaultMessage: 'Peitetikkikoneet',
  },
  [SpaceTypes.OVERLOCK_MACHINE]: {
    id: `${scope}.overlockMachine`,
    defaultMessage: 'Saumurit',
  },
  [SpaceTypes.LARGE_FORMAT_PRINTER]: {
    id: `${scope}.largeFormatPrinter`,
    defaultMessage: 'Suurkuvatulostin',
  },
  [SpaceTypes.VINYL_CUTTER_AND_HEATPRESS]: {
    id: `${scope}.vinylCutterAndHeatpress`,
    defaultMessage: 'Vinyylileikkuri ja lämpöprässi',
  },
  [SpaceTypes.BUTTON_PIN_MACHINE]: {
    id: `${scope}.buttonPinMachine`,
    defaultMessage: 'Rintanappikone',
  },
  [SpaceTypes.ELECTRONIC_WORKSTATION]: {
    id: `${scope}.electronicWorkstation`,
    defaultMessage: 'Elektroniikkatyöpisteet',
  },
  [SpaceTypes.LASER_CUTTER]: {
    id: `${scope}.laserCutter`,
    defaultMessage: 'Laserleikkuri',
  },
  [SpaceTypes.UV_PRINTER]: {
    id: `${scope}.uvPrinter`,
    defaultMessage: 'Uv-tulostin',
  },
  [SpaceTypes.MEDIA_COMPUTERS]: {
    id: `${scope}.mediaComputers`,
    defaultMessage: 'Mediatietokoneet',
  },
  [SpaceTypes.COMPUTERS]: {
    id: `${scope}.computers`,
    defaultMessage: 'Asiakastietokoneet',
  },
});
