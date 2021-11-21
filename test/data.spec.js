import {rio_teams, noRepeated, justFemale, timesRepeated, spliceIntoChunks, medalFemale} from '../src/data.js';

describe('rio_teams', () => {  /*ya salió*/
  it('is a function', () => {
    expect(typeof rio_teams).toBe('function');
  });
  let teamTest={
    "games": "Olympic Games",
    "year": 2016,
    "season": "summer",
    "city": "Rio",
    "athletes":
      [
        {
          "sport": "Rowing",
          "team": "Italy"
        },
        {
            "sport": "Basketball",
            "team": "Bolivia"
        }
    ]
  };
  it('returns ["Italy", "Bolivia"]',() => {
    expect(rio_teams(teamTest)).toEqual(["Italy", "Bolivia"]);
  });
});

describe('noRepeated', ()=>{   /*ya salió*/
  it('is a function', ()=>{
    expect(typeof noRepeated).toBe('function');
  })

  let noRepeatedTest=  ["Women", "Women", "Men", "Men"];

  it('returns {Women: "", Men: ""}', () => {
    expect(noRepeated(noRepeatedTest)).toEqual({Women: "", Men: ""}); 
  });
});

describe('justFemale', ()=>{   /*ya salió*/
  it('is a function', ()=>{
    expect(typeof justFemale).toBe('function');
  })

  const justFemaleTest=[
    {
        "name": "Giovanni Abagnale",
        "gender": "M"
      },
      {
          "name": "Patimat Abakarova",
          "gender": "F"
      }
  ];
  it('returns [{"name": "Patimat Abakarova","gender": "F"}]', () => {
    expect(justFemale(justFemaleTest)).toEqual([{"name": "Patimat Abakarova","gender": "F"}]);
  });
});

describe('timesRepeated', ()=>{   /*ya está */
  it('is a function', ()=>{ 
    expect(typeof timesRepeated).toBe('function');
  })
  const repeatedTest=["Algeria", "Algeria", "Spain"];
  it('returns {Algeria: 2, Spain:1}', () => {
    expect(timesRepeated(repeatedTest)).toEqual({Algeria: 2, Spain:1}); 
  });
});

describe('spliceIntoChunks', ()=>{
  it('is a function', ()=>{
    expect(typeof spliceIntoChunks).toBe('function');
  })
  const chunksTest=["Gymnastics All-Around", 'Silver', "Gymnastics Horse Vault", 'Silver', "Gymnastics Rings", 'Bronze'];
  it('returns [ [ "Gymnastics All-Around", "Silver" ],["Gymnastics Horse Vault", "Silver"],["Gymnastics Rings", "Bronze"] ]', () => {
    expect(spliceIntoChunks(chunksTest,2)).toEqual([ [ "Gymnastics All-Around", "Silver" ],["Gymnastics Horse Vault", "Silver"],["Gymnastics Rings", "Bronze"] ]); 
  });
});

describe('medalFemale', ()=>{
  it('is a function', ()=>{
    expect(typeof medalFemale).toBe('function');
  })
  const medalFemaleTest=[
    {
      "gender": "F",
      "medal": "gold"
    },
    {
        "gender": "M",
        "medal": "silver"
    }
];
it('returns [["F", "gold"], ["M", "silver"]]', ()=>{
  expect(medalFemale(medalFemaleTest)).toEqual([["F", "gold"], ["M", "silver"]]);
});
});


