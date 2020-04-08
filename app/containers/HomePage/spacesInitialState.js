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
    room: Rooms.LEARNING_SPACE_1,
    id: '1',
    name: {
      fi: 'Oppimistila 1',
    },
    description: {
      fi: 'Tila on käytettävissä, jos siellä ei ole kirjaston toimintaa',
      sv: 'Utrymmet är tillgängligt då det inte är i bibliotekets eget bruk',
      en: 'The space is available when not in use by the library',
    },
  },
  {
    category: Categories.LEARNING_SPACES,
    room: Rooms.LEARNING_SPACE_2,
    id: '2',
    name: {
      fi: 'Oppimistila 2',
    },
    description: {
      fi: 'Tilassa järjestetään kirjaston tapahtumia',
      sv: 'I utrymmet arrangeras bibliotekets egna evenemang',
      en: 'A room for library organized event',
    },
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_1,
    id: '4',
    respaId: 'av5k4vxjxyha',
    name: {
      fi: 'Ryhmätila 1',
    },
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_2,
    id: '5',
    respaId: 'av5k5ip53e2q',
    name: {
      fi: 'Ryhmätila 2',
    },
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_3,
    id: '6',
    respaId: 'av5k5ksofidq',
    name: {
      fi: 'Ryhmätila 3',
    },
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_4,
    id: '7',
    respaId: 'av5k5mveypsa',
    name: {
      fi: 'Ryhmätila 4',
    },
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_5,
    id: '8',
    respaId: 'av5k57wpbdza',
    name: {
      fi: 'Ryhmätila 5',
    },
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_6,
    id: '9',
    respaId: 'av5k6ayouzga',
    name: {
      fi: 'Ryhmätila 6',
    },
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_7,
    id: '10',
    respaId: 'av5k6dfiu3va',
    name: {
      fi: 'Ryhmätila 7',
    },
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_8,
    id: '11',
    respaId: 'av5k6eqxl4za',
    name: {
      fi: 'Ryhmätila 8',
    },
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_9,
    id: '12',
    respaId: 'av5k6g75os4q',
    name: {
      fi: 'Ryhmätila 9',
    },
  },
  {
    category: Categories.GROUP_ROOMS,
    room: Rooms.GROUP_ROOM_10,
    id: '13',
    respaId: 'av5k6h56ne7q',
    name: {
      fi: 'Ryhmätila 10',
    },
  },
  ...makeData(
    index => ({
      category: Categories.WORKSPACES,
      room: Rooms[`WORKSPACE_${index}`],
      id: String(13 + index),
      name: {
        fi: `Työskentelyalue ${index}`,
      },
    }),
    6,
  ),
  {
    category: Categories.STUDIOS,
    room: Rooms.STUDIO_1,
    id: '20',
    name: {
      fi: 'Studio 1',
    },
  },
  {
    category: Categories.STUDIOS,
    room: Rooms.STUDIO_2,
    id: '21',
    name: {
      fi: 'Studio 2',
    },
  },
  {
    category: Categories.STUDIOS,
    room: Rooms.STUDIO_3,
    id: '22',
    name: {
      fi: 'Studio 3',
    },
  },
  {
    category: Categories.STUDIOS,
    room: Rooms.STUDIO_4,
    id: '23',
    name: {
      fi: 'Studio 4',
    },
  },
  {
    category: Categories.STUDIOS,
    room: Rooms.STUDIO_5,
    id: '24',
    name: {
      fi: 'Studio 5',
    },
  },
  {
    category: Categories.STUDIOS,
    room: Rooms.STUDIO_6,
    id: '25',
    name: {
      fi: 'Studio 6',
    },
  },
  {
    category: Categories.GAME_ROOMS,
    room: Rooms.GAME_ROOM_1,
    id: '26',
    name: {
      fi: 'Pelitila 1',
    },
  },
  {
    category: Categories.GAME_ROOMS,
    room: Rooms.GAME_ROOM_2,
    id: '27',
    name: {
      fi: 'Pelitila 2',
    },
  },
  {
    category: Categories.GAME_ROOMS,
    room: Rooms.GAME_ROOM_3,
    id: '28',
    name: {
      fi: 'Pelitila 3',
    },
  },
  {
    category: Categories.GAME_ROOMS,
    room: Rooms.GAME_ROOM_4,
    id: '29',
    name: {
      fi: 'Retropelinurkka',
    },
    description: {
      fi: 'Tilassa on 14 pelaamiseen tarkoitettua tietokonetta',
      sv: 'I utrymmet finns 14 datorer avsedda för datorspel',
      en: 'The space has 14 computers for gaming',
    },
  },
  {
    category: Categories.GAME_ROOMS,
    room: Rooms.GAME_ROOM_5,
    id: '30',
    name: {
      fi: 'Pelisali',
    },
  },
  {
    category: Categories.WORKSTATIONS,
    room: Rooms.WORKSTATION_1,
    id: '31',
    name: {
      fi: 'Mediatietokoneet 1-18',
    },
  },
  {
    category: Categories.WORKSTATIONS,
    room: Rooms.WORKSTATION_2,
    id: '32',
    name: {
      fi: 'Asiakastietokoneet 1-14',
    },
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_1,
    type: SpaceTypes.PRINTER_3D,
    id: '34',
    respaId: 'av7bkiupgqxa',
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_1,
    type: SpaceTypes.PRINTER_3D,
    id: '35',
    respaId: 'av7bm6a2bkga',
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_1,
    type: SpaceTypes.PRINTER_3D,
    id: '36',
    respaId: 'av7bnnciev4a',
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_1,
    type: SpaceTypes.PRINTER_3D,
    id: '37',
    respaId: 'av7bnu5gzgla',
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_2,
    type: SpaceTypes.EMBROIDERY_MACHINE,
    id: '39',
    respaId: 'awbhzslbxnsa',
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_2,
    type: SpaceTypes.SEWING_MACHINE,
    id: '39',
    respaId: 'av7eau2gobbq',
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_2,
    type: SpaceTypes.SEWING_MACHINE,
    id: '40',
    respaId: 'av7eayzz2fga',
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_2,
    type: SpaceTypes.COVERSTITCH_MACHINE,
    id: '41',
    respaId: 'av72ocdjn2qa',
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_2,
    type: SpaceTypes.OVERLOCK_MACHINE,
    id: '42',
    respaId: 'av7ea36uxapa',
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_2,
    type: SpaceTypes.OVERLOCK_MACHINE,
    id: '43',
    respaId: 'av7ea6lwenta',
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_3,
    type: SpaceTypes.LARGE_FORMAT_PRINTER,
    id: '44',
    respaId: 'awbpfgq2bgrq',
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_3,
    type: SpaceTypes.VINYL_CUTTER_AND_HEATPRESS,
    id: '45',
    respaId: 'av7e2kfkcrga',
  },
  {
    category: Categories.URBAN_WORKSHOP,
    room: Rooms.URBAN_WORKSHOP_3,
    type: SpaceTypes.BUTTON_PIN_MACHINE,
    id: '46',
    respaId: 'av7fbsmhn57a',
  },
  {
    category: Categories.MACHINE_ROOM,
    room: Rooms.MACHINE_ROOM_1,
    id: '47',
    name: {
      fi: 'Konehuone',
    },
  },
  {
    category: Categories.OTHER_SPACES,
    room: Rooms.OTHER_1,
    id: '48',
    name: {
      fi: 'Kopiointi',
    },
  },
  {
    category: Categories.OTHER_SPACES,
    room: Rooms.OTHER_2,
    id: '49',
    name: {
      fi: 'Kuutio',
    },
    description: {
      fi:
        'Mediataidetila, joka mahdollistaa immersiivisen kokemuksen. Sopii myös tapahtuma- ja kokouskäyttöön.',
      sv:
        'Mediautrymme som möjliggör en fördjupande mediakonstupplevelse. Passar också bra för evenemang och möten.',
      en:
        'A space for new media art that enables immersive experiences. It can also function as an event or meeting room',
    },
  },
  {
    category: Categories.OTHER_SPACES,
    room: Rooms.OTHER_3,
    id: '50',
    name: {
      fi: 'Lukusali',
    },
    description: {
      fi: 'Hiljainen tila, jossa on 40  istumapaikkaa.',
      sv: 'Tyst utrymme med 40 sittplatser',
      en: 'Quiet space with 40 seated desks',
    },
  },
  {
    category: Categories.OTHER_SPACES,
    room: Rooms.OTHER_4,
    id: '51',
    name: {
      fi: 'Työskentelyalue',
    },
    description: {
      fi: 'Alueella on 16 pöytää joiden ääressä voi työskennellä.',
      sv: 'Utrymmet har 16 bord att arbeta vid ',
      en: 'The space has 16 tables for working',
    },
  },
  {
    category: Categories.OTHER_SPACES,
    room: Rooms.OTHER_5,
    id: '3',
    respaId: 'av5k7ixqvzha',
    name: {
      fi: 'Keittiö',
    },
    description: {
      fi:
        'Keittiössä asiakkaat voivat järjestää ruoanlaittoon liittyviä tilaisuuksia',
      sv: 'I köket kan våra kunder arrangera evenemang rörande matlagning',
      en: 'In the kitchen, customers can organize culinary related events',
    },
  },
];
