import {rio_teams, medals, sportsEvents, noRepeated, athletes_rio, justFemale, multipleMedalsWinners, timesRepeated, spliceIntoChunks} from '../src/data.js';

describe('rio_teams', () => {  /*ya salió*/
  it('is a function', () => {
    expect(typeof rio_teams).toBe('function');
  });
  let teamTest={
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
  it('returns solo países',() => {
    expect(rio_teams(teamTest)).toEqual(["Italy", "Bolivia"]);
  });
});


describe('sportsEvents', () => {  /*ya salió*/
  it('is a function', () => {
    expect(typeof sportsEvents).toBe('function');
  });
  let sprtEventTest={
    "athletes":
      [
        {
          "sport": "Rowing",
          "event": "Rowing Coxless Pairs"
        },
        {
            "sport": "Rowing",
            "event": "Rowing  Quadruple Sculls"
        }
    ]
  };
  it('returns mi deporte con todos sus eventos',() => {
    expect(sportsEvents(sprtEventTest)).toEqual(
      { Rowing: 
      [ 
        "Rowing Coxless Pairs",
        "Rowing  Quadruple Sculls" ] });
  });
});


describe('athletes_rio', ()=>{ /*ya salió*/
  it('is a function', ()=>{
    expect(typeof athletes_rio).toBe('function');
  });
  let athletesTest={
    "athletes":[
      {
        "name": "Simone Biles",
        "sport": "Gymnastics",
        "medal": "golden"
      },
    ]
  };

  it('returns mi atleta con toda su información',() => {
    expect(athletes_rio(athletesTest)).toEqual([ [ "Simone Biles",
    { "name": "Simone Biles", "sport": "Gymnastics", "medal": "golden" } ] ]);
  });

});


describe('justFemale', ()=>{   /*ya salió*/
  it('is a function', ()=>{
    expect(typeof justFemale).toBe('function');
  })

  const justFemaleTest={
    "athletes":[
       {
        "name": "Giovanni Abagnale",
        "gender": "M",
        "sport": "Basket"
      },
      {
          "name": "Patimat Abakarova",
          "gender": "F",
          "sport": "Tennis"
      }
    ]
  };
  it('retorna mi atleta femenina con su deporte', () => {
    expect(justFemale(justFemaleTest)).toEqual([ [ "Patimat Abakarova", "Tennis" ] ]);
  });
});


describe('multipleMedalsWinners', ()=>{ /*ya salió */
  it ('is a function', ()=>{
    expect(typeof multipleMedalsWinners).toBe('function');
  })

  let multipleTest={
    "athletes":[
      {
        "name": "Simone Biles",
        "event": "Gymnastics Vault",
        "medal": "Golden"
      },
      {
          "name": "Simone Biles",
          "event": "Gymnastics Floor",
          "medal": "Golden"
      }
    ]
  };
  it('returns mi atleta con todos sus eventos y medallas', ()=>{
    expect(multipleMedalsWinners(multipleTest)).toEqual(
      { "Simone Biles": [ "Gymnastics Vault", "Golden", "Gymnastics Floor", "Golden" ] }
    )
  })
})


describe('noRepeated', ()=>{   /*ya salió*/
  it('is a function', ()=>{
    expect(typeof noRepeated).toBe('function');
  })

  let noRepeatedTest=  ["Women", "Women", "Men", "Men"];

  it('returns mi item sin repeticiones', () => {
    expect(noRepeated(noRepeatedTest)).toEqual({Women: "", Men: ""}); 
  });
});


describe('timesRepeated', ()=>{   /*ya está */
  it('is a function', ()=>{ 
    expect(typeof timesRepeated).toBe('function');
  })
  const repeatedTest=["Algeria", "Algeria", "Spain"];
  it('returns mi país con el número de veces que este aparece', () => {
    expect(timesRepeated(repeatedTest)).toEqual({Algeria: 2, Spain:1}); 
  });
});


describe('spliceIntoChunks', ()=>{
  it('is a function', ()=>{
    expect(typeof spliceIntoChunks).toBe('function');
  })
  const chunksTest=["Gymnastics All-Around", 'Silver', "Gymnastics Horse Vault", 'Silver', "Gymnastics Rings", 'Bronze'];
  it('returns mi array con subdivisiones de dos', () => {
    expect(spliceIntoChunks(chunksTest,2)).toEqual([ [ "Gymnastics All-Around", "Silver" ],["Gymnastics Horse Vault", "Silver"],["Gymnastics Rings", "Bronze"] ]); 
  });
});


describe('medals', ()=>{   
  it('is a function', ()=>{
    expect(typeof medals).toBe('function');
  })

  const medalsTest={
    "athletes":[
      {
        "name": "Simone Biles",
        "gender": "F",
        "medal": "Golden"
      },
      {
        "name": "Usain Bolt",
        "gender": "M",
        "medal": "Golden"
      }
    ]
  };
  it('returns el número de medallas por género', () => {
    expect(medals(medalsTest)).toEqual([ [ "F", "Golden" ], [ "M", "Golden" ]]);
  });
});
