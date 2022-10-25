'use strict';

const membersContainer = document.querySelector('.gang-members-wrapper');

const GangMember = class {
  members = [];

  constructor(img, alt, name, city) {
    this.img = img;
    this.alt = alt;
    this.name = name;
    this.city = city;
    this.addMembers();
    this.insertMembersToDOM();
  }

  addMembers() {
    this.members.push(this);
    return this.members;
  }

  insertMembersToDOM() {
    this.members.forEach(member => {
      const div = document.createElement('div');
      div.classList.add('member');
      div.innerHTML = `
        <img src="${member.img}" alt="${member.alt}" />
        <h4>${member.name}</h4>
        <h5>${member.city}</h5>
        `;
      membersContainer.append(div);
    });
  }
};

const member_1 = new GangMember(
  '/img/Gang Members/Zapisz do gangu Pug House.png',
  'Pug House gang mopsów',
  'TWÓJ PUG',
  'Dołącz do gangu!'
);

const member_2 = new GangMember(
  '/img/Gang Members/Big Mikey.png',
  'Mikey pug house gang member',
  'MIKEY',
  'Toruń'
);

const member_3 = new GangMember(
  '/img/Gang Members/Molly.png',
  'Molly pug house gang member',
  'MOLLY',
  'Toruń'
);

const member_4 = new GangMember(
  '/img/Gang Members/Buddy.png',
  'Buddy pug house gang member',
  'BUDDY',
  'Grodzisk Maz.'
);

const member_5 = new GangMember(
  '/img/Gang Members/Bentlay.png',
  'Bentlay pug house gang member',
  'BENTLAY',
  'Grodzisk Maz.'
);

const member_6 = new GangMember(
  '/img/Gang Members/Lukasz.png',
  'Łukasz pug house gang member',
  'ŁUKASZ',
  'Toruń'
);

const member_7 = new GangMember(
  '/img/Gang Members/Tofik.png',
  'Tofik pug house gang member',
  'Tofik',
  'Gdynia'
);

const member_8 = new GangMember(
  '/img/Gang Members/Gustaw.png',
  'Gustaw pug house gang member',
  'Gustaw',
  'Wrocław'
);
