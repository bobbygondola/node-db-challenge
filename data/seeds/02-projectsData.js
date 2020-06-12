

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name:"Start a Marketing Company", desc:"Start a Highly Valuable Marketing Company", client_name:"Bill Gates",completed: 0},
        {project_name:"Start a Software Company", desc:"Start a New Age Tech/Software Company", client_name:"Robert Gondola", completed: 0},
        {project_name:"Launch a Law Firm", desc:"Start a Highly Respected Law Firm", client_name:"George Bush", completed: 0},
        {project_name:"Launch a Start-Up", desc:"Start a Highly Risk/High Reward Start-Up!", client_name:"Curios George", completed: 0},
        {project_name:"Start a Rock Candy Factory", desc:"Start a Tasty Candy Company", client_name:"Candy Man", completed: 0},
        {project_name:"Open a Chicken Store", desc:"Just a chicken store.. thats it.", client_name:"Clucker Cluck Chuck", completed: 0}
      ]);
    });
};
