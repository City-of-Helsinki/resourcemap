import Categories from 'constants/Categories';
import SpaceTypes from 'constants/SpaceTypes';
import Rooms from 'constants/Rooms';

// Can be used to automatically create repetitive categories.
function makeData(template, count) {
  return Array.from({ length: count })
    .map((val, i) => i + 1)
    .map(item => template(item));
}

export default [
  {
    category: Categories.LEARNING_SPACES,
    room: Rooms.LEARNING_SPACE_3,
    id: '1',
    name: {
      fi: 'Oppimistila 3',
      sv: 'Rum för lärande 3',
      en: 'Learning space 3',
    },
    description: {
      fi: 'Tila on käytettävissä, jos siellä ei ole kirjaston toimintaa',
      sv: 'Utrymmet är tillgängligt då det inte är i bibliotekets eget bruk',
      en: 'The space is available when not in use by the library',
    },
    canBeReserved: false,
  },
  {
    category: Categories.LEARNING_SPACES,
    room: Rooms.LEARNING_SPACE_2,
    id: '2',
    name: {
      fi: 'Oppimistila 2',
      sv: 'Rum för lärande 2',
      en: 'Learning space 2',
    },
    description: {
      fi: 'Tilassa järjestetään kirjaston tapahtumia',
      sv: 'I utrymmet arrangeras bibliotekets egna evenemang',
      en: 'A room for library organized event',
    },
    canBeReserved: false,
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_1,
    id: '4',
    respaId: 'av5k4vxjxyha',
    name: {
      fi: 'Ryhmätila 1',
      sv: 'Grupprum 1',
      en: 'Group room 1',
    },
    peopleCapacity: 10,
    canBeReserved: true,
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_2,
    id: '5',
    respaId: 'av5k5ip53e2q',
    name: {
      fi: 'Ryhmätila 2',
      sv: 'Grupprum 2',
      en: 'Group room 2',
    },
    peopleCapacity: 10,
    canBeReserved: true,
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_3,
    id: '6',
    respaId: 'av5k5ksofidq',
    name: {
      fi: 'Ryhmätila 3',
      sv: 'Grupprum 3',
      en: 'Group room 3',
    },
    peopleCapacity: 16,
    canBeReserved: true,
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_4,
    id: '7',
    respaId: 'av5k5mveypsa',
    name: {
      fi: 'Ryhmätila 4',
      sv: 'Grupprum 4',
      en: 'Group room 4',
    },
    peopleCapacity: 12,
    canBeReserved: true,
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_5,
    id: '8',
    respaId: 'av5k57wpbdza',
    name: {
      fi: 'Ryhmätila 5',
      sv: 'Grupprum 5',
      en: 'Group room 5',
    },
    peopleCapacity: 8,
    canBeReserved: true,
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_6,
    id: '9',
    respaId: 'av5k6ayouzga',
    name: {
      fi: 'Ryhmätila 6',
      sv: 'Grupprum 6',
      en: 'Group room 6',
    },
    peopleCapacity: 6,
    canBeReserved: true,
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_7,
    id: '10',
    respaId: 'av5k6dfiu3va',
    name: {
      fi: 'Ryhmätila 7',
      sv: 'Grupprum 7',
      en: 'Group room 7',
    },
    peopleCapacity: 12,
    canBeReserved: true,
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_8,
    id: '11',
    respaId: 'av5k6eqxl4za',
    name: {
      fi: 'Ryhmätila 8',
      sv: 'Grupprum 8',
      en: 'Group room 8',
    },
    peopleCapacity: 10,
    canBeReserved: true,
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_9,
    id: '12',
    respaId: 'av5k6g75os4q',
    name: {
      fi: 'Ryhmätila 9',
      sv: 'Grupprum 9',
      en: 'Group room 9',
    },
    peopleCapacity: 7,
    canBeReserved: true,
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_10,
    id: '13',
    respaId: 'av5k6h56ne7q',
    name: {
      fi: 'Ryhmätila 10',
      sv: 'Grupprum 10',
      en: 'Group room 10',
    },
    peopleCapacity: 7,
    canBeReserved: true,
  },
  {
    category: Categories.WORKSPACES,
    room: Rooms.WORKSPACE_1,
    id: '14',
    respaId: 'awb7ixqphivq',
    name: {
      fi: `Työtila 1`,
      sv: 'Arbetsrum 1',
      en: 'Workspace 1',
    },
    peopleCapacity: 3,
    canBeReserved: true,
  },
  {
    category: Categories.WORKSPACES,
    room: Rooms.WORKSPACE_2,
    id: '15',
    respaId: 'awb7i4ajdoya',
    name: {
      fi: `Työtila 2`,
      sv: 'Arbetsrum 2',
      en: 'Workspace 2',
    },
    peopleCapacity: 3,
    canBeReserved: true,
  },
  {
    category: Categories.WORKSPACES,
    room: Rooms.WORKSPACE_3,
    id: '16',
    respaId: 'awb7i6zee5ga',
    name: {
      fi: `Työtila 3`,
      sv: 'Arbetsrum 3',
      en: 'Workspace 3',
    },
    peopleCapacity: 3,
    canBeReserved: true,
  },
  {
    category: Categories.WORKSPACES,
    room: Rooms.WORKSPACE_4,
    id: '17',
    respaId: 'awb7jb4afpua',
    name: {
      fi: `Työtila 4`,
      sv: 'Arbetsrum 4',
      en: 'Workspace 4',
    },
    peopleCapacity: 3,
    canBeReserved: true,
  },
  {
    category: Categories.WORKSPACES,
    room: Rooms.WORKSPACE_5,
    id: '18',
    respaId: 'awlzvn3bppva',
    name: {
      fi: `Työtila 5`,
      sv: 'Arbetsrum 5',
      en: 'Workspace 5',
    },
    peopleCapacity: 4,
    canBeReserved: true,
  },
  {
    category: Categories.WORKSPACES,
    room: Rooms.WORKSPACE_6,
    id: '19',
    respaId: 'awlzvtbxervq',
    name: {
      fi: `Työtila 6`,
      sv: 'Arbetsrum 6',
      en: 'Workspace 6',
    },
    peopleCapacity: 4,
    canBeReserved: true,
  },
  {
    category: Categories.STUDIOS,
    room: Rooms.STUDIO_1,
    id: '25',
    respaId: 'av72kqfijbua',
    name: {
      fi: 'Äänitysstudio',
      sv: 'Inspelningstudio',
      en: 'Recording studio',
    },
    peopleCapacity: 10,
    canBeReserved: true,
  },
  {
    category: Categories.STUDIOS,
    room: Rooms.STUDIO_5,
    id: '20',
    respaId: 'av72fbdhrqba',
    name: {
      fi: 'Studio 5',
      sv: 'Studio 5',
      en: 'Studio 5',
    },
    peopleCapacity: 5,
    canBeReserved: true,
  },
  {
    category: Categories.STUDIOS,
    room: Rooms.STUDIO_6,
    id: '21',
    respaId: 'av72fafz4bkq',
    name: {
      fi: 'Studio 6',
      sv: 'Studio 6',
      en: 'Studio 6',
    },
    peopleCapacity: 3,
    canBeReserved: true,
  },
  {
    category: Categories.STUDIOS,
    room: Rooms.STUDIO_7,
    id: '22',
    respaId: 'av72fb36uq4a',
    name: {
      fi: 'Studio 7',
      sv: 'Studio 7',
      en: 'Studio 7',
    },
    canBeReserved: false,
  },
  {
    category: Categories.STUDIOS,
    room: Rooms.STUDIO_8,
    id: '23',
    respaId: 'av72fb5x2f7a',
    name: {
      fi: 'Studio 8',
      sv: 'Studio 8',
      en: 'Studio 8',
    },
    canBeReserved: false,
  },
  {
    category: Categories.STUDIOS,
    room: Rooms.STUDIO_9,
    id: '24',
    respaId: 'av72e2c64vfq',
    name: {
      fi: 'Studio 9',
      sv: 'Studio 9',
      en: 'Studio 9',
    },
    canBeReserved: false,
  },
  {
    category: Categories.GAME_ROOMS,
    room: Rooms.GAME_ROOM_1,
    id: '26',
    respaId: 'av6v2pemltrq',
    name: {
      fi: 'Pelitila 1',
      sv: 'Spelrummet 1',
      en: 'Game room 1',
    },
    peopleCapacity: 4,
    canBeReserved: true,
  },
  {
    category: Categories.GAME_ROOMS,
    room: Rooms.GAME_ROOM_2,
    id: '27',
    respaId: 'av6v2p3ajwcq',
    name: {
      fi: 'Pelitila 2',
      sv: 'Spelrummet 2',
      en: 'Game room 2',
    },
    peopleCapacity: 4,
    canBeReserved: true,
  },
  {
    category: Categories.GAME_ROOMS,
    room: Rooms.GAME_ROOM_3,
    id: '28',
    respaId: 'av6v2qjrm6da',
    name: {
      fi: 'Pelitila 3',
      sv: 'Spelrummet 3',
      en: 'Game room 3',
    },
    peopleCapacity: 4,
    canBeReserved: true,
  },
  {
    category: Categories.GAME_ROOMS,
    room: Rooms.GAME_ROOM_4,
    id: '29',
    name: {
      fi: 'Retropelinurkka',
      sv: 'Retrospelhörna',
      en: 'Retro gaming corner',
    },
    canBeReserved: false,
  },
  {
    category: Categories.GAME_ROOMS,
    room: Rooms.GAME_ROOM_5,
    id: '30',
    name: {
      fi: 'Pelisali',
      sv: 'spelsal',
      en: 'gaming hall',
    },
    description: {
      fi: 'Tilassa on 14 pelaamiseen tarkoitettua tietokonetta',
      sv: 'I utrymmet finns 14 datorer avsedda för datorspel',
      en: 'The space has 14 computers for gaming',
    },
    peopleCapacity: 14,
    canBeReserved: false,
  },
  {
    category: Categories.WORKSTATIONS,
    room: Rooms.WORKSTATION_1,
    type: SpaceTypes.MEDIA_COMPUTERS,
    id: '31',
    respaId: 'awccdayofd6a',
    name: {
      fi: 'Mediatyöasema 1',
      sv: 'Mediearbetsstation 1',
      en: 'Media workstation 1',
    },
    canBeReserved: true,
  },
  {
    category: Categories.WORKSTATIONS,
    room: Rooms.WORKSTATION_1,
    type: SpaceTypes.MEDIA_COMPUTERS,
    id: '55',
    respaId: 'awcftv2wbcqa',
    name: {
      fi: 'Mediatyöasema 2',
      sv: 'Mediearbetsstation 2',
      en: 'Media workstation 2',
    },
    canBeReserved: true,
  },
  {
    category: Categories.WORKSTATIONS,
    room: Rooms.WORKSTATION_1,
    type: SpaceTypes.MEDIA_COMPUTERS,
    id: '56',
    respaId: 'awcft7zh3gxa',
    name: {
      fi: 'Mediatyöasema 3',
      sv: 'Mediearbetsstation 3',
      en: 'Media workstation 3',
    },
    canBeReserved: true,
  },
  {
    category: Categories.WORKSTATIONS,
    room: Rooms.WORKSTATION_1,
    type: SpaceTypes.MEDIA_COMPUTERS,
    id: '57',
    respaId: 'awcfuhfh2ivq',
    name: {
      fi: 'Mediatyöasema 4',
      sv: 'Mediearbetsstation 4',
      en: 'Media workstation 4',
    },
    canBeReserved: true,
  },
  {
    category: Categories.WORKSTATIONS,
    room: Rooms.WORKSTATION_1,
    type: SpaceTypes.MEDIA_COMPUTERS,
    id: '58',
    respaId: 'awcfuqes52aq',
    name: {
      fi: 'Mediatyöasema 5',
      sv: 'Mediearbetsstation 5',
      en: 'Media workstation 5',
    },
    canBeReserved: true,
  },
  {
    category: Categories.WORKSTATIONS,
    room: Rooms.WORKSTATION_1,
    type: SpaceTypes.MEDIA_COMPUTERS,
    id: '59',
    respaId: 'awcfuz2ucdoq',
    name: {
      fi: 'Mediatyöasema 6',
      sv: 'Mediearbetsstation 6',
      en: 'Media workstation 6',
    },
    canBeReserved: true,
  },
  {
    category: Categories.WORKSTATIONS,
    room: Rooms.WORKSTATION_1,
    type: SpaceTypes.MEDIA_COMPUTERS,
    id: '60',
    respaId: 'awcfvbndxsza',
    name: {
      fi: 'Mediatyöasema 7',
      sv: 'Mediearbetsstation 7',
      en: 'Media workstation 7',
    },
    canBeReserved: true,
  },
  {
    category: Categories.WORKSTATIONS,
    room: Rooms.WORKSTATION_1,
    type: SpaceTypes.MEDIA_COMPUTERS,
    id: '61',
    respaId: 'awcfvhbabgoq',
    name: {
      fi: 'Mediatyöasema 8',
      sv: 'Mediearbetsstation 8',
      en: 'Media workstation 8',
    },
    canBeReserved: true,
  },
  ...makeData(
    index => ({
      category: Categories.WORKSTATIONS,
      room: Rooms.WORKSTATION_2,
      type: SpaceTypes.COMPUTER,
      id: String(61 + index),
      name: {
        fi: `tietokone ${index}`,
        sv: `dator ${index}`,
        en: `computer ${index}`,
      },
      canBeReserved: false,
    }),
    16,
  ),
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_1,
    type: SpaceTypes.PRINTER_3D,
    id: '34',
    respaId: 'av7bkiupgqxa',
    canBeReserved: true,
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_1,
    type: SpaceTypes.PRINTER_3D,
    id: '35',
    respaId: 'av7bm6a2bkga',
    canBeReserved: true,
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_1,
    type: SpaceTypes.PRINTER_3D,
    id: '36',
    respaId: 'av7bnnciev4a',
    canBeReserved: true,
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_1,
    type: SpaceTypes.PRINTER_3D,
    id: '37',
    respaId: 'av7bnu5gzgla',
    canBeReserved: true,
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_2,
    type: SpaceTypes.EMBROIDERY_MACHINE,
    id: '39',
    respaId: 'awbhzslbxnsa',
    canBeReserved: true,
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_2,
    type: SpaceTypes.SEWING_MACHINE,
    id: '39',
    respaId: 'av7eau2gobbq',
    canBeReserved: true,
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_2,
    type: SpaceTypes.SEWING_MACHINE,
    id: '40',
    respaId: 'av7eayzz2fga',
    canBeReserved: true,
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_2,
    type: SpaceTypes.COVERSTITCH_MACHINE,
    id: '41',
    respaId: 'av72ocdjn2qa',
    canBeReserved: true,
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_2,
    type: SpaceTypes.OVERLOCK_MACHINE,
    id: '42',
    respaId: 'av7ea36uxapa',
    canBeReserved: true,
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_2,
    type: SpaceTypes.OVERLOCK_MACHINE,
    id: '43',
    respaId: 'av7ea6lwenta',
    canBeReserved: true,
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_2,
    type: SpaceTypes.BUTTON_PIN_MACHINE,
    id: '46',
    respaId: 'av7fbsmhn57a',
    canBeReserved: true,
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_3,
    type: SpaceTypes.LARGE_FORMAT_PRINTER,
    id: '44',
    respaId: 'awbpfgq2bgrq',
    canBeReserved: true,
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_3,
    type: SpaceTypes.VINYL_CUTTER_AND_HEATPRESS,
    id: '45',
    respaId: 'av7e2kfkcrga',
    canBeReserved: true,
  },
  {
    category: Categories.MACHINE_ROOM,
    room: Rooms.MACHINE_ROOM_1,
    type: SpaceTypes.ELECTRONIC_WORKSTATION,
    id: '47',
    respaId: 'awmyaqgjiiba',
    canBeReserved: true,
  },
  {
    category: Categories.MACHINE_ROOM,
    room: Rooms.MACHINE_ROOM_1,
    type: SpaceTypes.ELECTRONIC_WORKSTATION,
    id: '52',
    respaId: 'awmyd7u2gqjq',
    canBeReserved: true,
  },
  {
    category: Categories.MACHINE_ROOM,
    room: Rooms.MACHINE_ROOM_1,
    type: SpaceTypes.LASER_CUTTER,
    id: '53',
    respaId: 'awmcokucvfia',
    canBeReserved: true,
  },
  {
    category: Categories.MACHINE_ROOM,
    room: Rooms.MACHINE_ROOM_1,
    type: SpaceTypes.UV_PRINTER,
    id: '54',
    respaId: 'awmcspbxrcsq',
    canBeReserved: true,
  },
  {
    category: Categories.OTHER_SPACES,
    room: Rooms.OTHER_1,
    id: '48',
    name: {
      fi: 'Kopiointi',
      sv: 'Printer, kopiering och skanning',
      en: 'printing, copying and skanning',
    },
    canBeReserved: false,
  },
  {
    category: Categories.OTHER_SPACES,
    room: Rooms.OTHER_2,
    id: '49',
    name: {
      fi: 'Kuutio',
      sv: 'Kuben',
      en: 'Kuutio',
    },
    description: {
      fi:
        'Mediataidetila, joka mahdollistaa immersiivisen kokemuksen. Sopii myös tapahtuma- ja kokouskäyttöön.',
      sv:
        'Mediautrymme som möjliggör en fördjupande mediakonstupplevelse. Passar också bra för evenemang och möten.',
      en:
        'A space for new media art that enables immersive experiences. It can also function as an event or meeting room',
    },
    peopleCapacity: 50,
    canBeReserved: true,
  },
  {
    category: Categories.OTHER_SPACES,
    room: Rooms.OTHER_3,
    id: '50',
    name: {
      fi: 'Lukusali',
      sv: 'läsesal',
      en: 'reading room',
    },
    description: {
      fi: 'Hiljainen tila, jossa on 40  istumapaikkaa.',
      sv: 'Tyst utrymme med 40 sittplatser',
      en: 'Quiet space with 40 seated desks',
    },
    peopleCapacity: 40,
    canBeReserved: false,
  },
  {
    category: Categories.OTHER_SPACES,
    room: Rooms.OTHER_4,
    id: '51',
    name: {
      fi: 'Työskentelyalue',
      sv: 'arbetsområde',
      en: 'working area',
    },
    description: {
      fi: 'Alueella on 16 pöytää joiden ääressä voi työskennellä.',
      sv: 'Utrymmet har 16 bord att arbeta vid ',
      en: 'The space has 16 tables for working',
    },
    peopleCapacity: 16,
    canBeReserved: false,
  },
  {
    category: Categories.OTHER_SPACES,
    room: Rooms.OTHER_5,
    id: '3',
    // Disconnected from respa because the name of the sapce is counter
    // intuitive to the categorisation used in this app, and because the
    // reservation calendar for the application is not maanged in respa.
    // respaId: 'av5k7ixqvzha',
    name: {
      fi: 'Keittiö',
      sv: 'Köket',
      en: 'Kitchen',
    },
    description: {
      fi:
        'Keittiössä asiakkaat voivat järjestää ruoanlaittoon liittyviä tilaisuuksia',
      sv: 'I köket kan våra kunder arrangera evenemang rörande matlagning',
      en: 'In the kitchen, customers can organize culinary related events',
    },
    peopleCapacity: 10,
    canBeReserved: true,
  },
];
