
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name:"Capital", desc: "CAPITAL IS MONEY"},
        {resource_name:"Employees", desc: "Workers we need"},
        {resource_name:"Developers", desc: "devs we need"},
        {resource_name:"Knowledge", desc: "books and stuff we need"},
        {resource_name:"Leverage", desc: "money power respect"},
        {resource_name:"Persistance", desc: "never give up"},
        {resource_name:"Computers", desc: "computer.. yeah"},
        {resource_name:"Monitors", desc: "we gotta see..."},
        {resource_name:"Keyboards", desc: "type central"},
        {resource_name:"Rock Candy", desc: "we gotta get ths candy"}
      ]);
    });
};
