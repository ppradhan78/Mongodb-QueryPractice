use mongodb_practics
db.createCollection("users")
db.users.insertMany([
  { 
    id: 1,firstName:"prasanta",lastName:"pradhan",userName:"ppradhan",emailId: "prasanta.pradhan@gmail.com",
     roleId:1,createdDate:new Date() ,lastloginDate:new Date() ,gender:"M",deptNo:10,cellNum:"9948777325"
  },
  { 
    id: 2,firstName:"ashok",lastName:"rao",userName:"arao",emailId: "ashok.rao@gmail.com",
     roleId:2,createdDate:new Date() ,lastloginDate:new Date() ,gender:"M",deptNo:20,cellNum:"9912377325"
  },
   { 
    id: 3,firstName:"boob",lastName:"sinha",userName:"bsinha",emailId: "boob.sinha@gmail.com",
     roleId:1,createdDate:new Date() ,lastloginDate:new Date() ,gender:"M",deptNo:10,cellNum:"1234512345"
  },
   { 
    id: 4,firstName:"rakshi",lastName:"sharma",userName:"rsharma",emailId: "rakshi.sharma@gmail.com",
     roleId:3,createdDate:new Date() ,lastloginDate:new Date() ,gender:"F",deptNo:30,cellNum:"9871237651"
  },
   { 
    id: 5,firstName:"tome",lastName:"cook",userName:"tcook",emailId: "tome.cook@gmail.com",
     roleId:1,createdDate:new Date() ,lastloginDate:new Date() ,gender:"M",deptNo:40,cellNum:"4352987142"
  },
   { 
    id: 6,firstName:"mark",lastName:"domanic",userName:"mdomanic",emailId: "mark.domanic@gmail.com",
     roleId:2,createdDate:new Date() ,lastloginDate:new Date() ,gender:"M",deptNo:10,cellNum:"1123987651"
  },
   { 
    id: 7,firstName:"nilash",lastName:"rathor",userName:"nrathor",emailId: "nilash.rathor@gmail.com",
     roleId:1,createdDate:new Date() ,lastloginDate:new Date() ,gender:"M",deptNo:20,cellNum:"9948324325"
  },
   { 
    id: 8,firstName:"ass",lastName:"rai",userName:"arai",emailId: "ass.rai@gmail.com",
     roleId:2,createdDate:new Date() ,lastloginDate:new Date() ,gender:"F",deptNo:30,cellNum:"9948777325"
  },
   { 
    id: 9,firstName:"boob",lastName:"smith",userName:"bsmith",emailId: "boob.smith@gmail.com",
     roleId:3,createdDate:new Date() ,lastloginDate:new Date() ,gender:"F",deptNo:10,cellNum:"1231256781"
  },
   { 
    id: 10,firstName:"sandra",lastName:"peterson",userName:"speterson",emailId: "sandra.peterson@gmail.com",
     roleId:2,createdDate:new Date() ,lastloginDate:new Date() ,gender:"F",deptNo:40,cellNum:"112395326234"
  }
])
