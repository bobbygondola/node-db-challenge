
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        //project 1 Marketing
        {project_id:1, task_name: "Find Capital", desc: "scrounge the earth for funding", notes: "no notes"},
        {project_id:1, task_name: "Find Great Employees", desc: "We can find them on Indeed or GlassDoor", notes: "no notes"},
        {project_id:1, task_name: "Work Work", desc: "Put them to work! and Earn!", notes: "no notes"},
        //project 2 Software
        {project_id:2, task_name: "Find Capital", desc: "scrounge the earth for funding", notes: "no notes"},
        {project_id:2, task_name: "Find Great Coders", desc: "We can find them on Indeed or GlassDoor", notes: "no notes"},
        {project_id:2, task_name: "Code Code Code 16 hours a day!", desc: "Get to work!", notes: "no notes"},
        //project 3 Law Firm
        {project_id:3, task_name: "Find Capital", desc: "scrounge the earth for funding", notes: "no notes"},
        {project_id:3, task_name: "Find Great Lawyers", desc: "We can find them from College", notes: "no notes"},
        {project_id:3, task_name: "Practice Law everyday, its your life now.", desc: "Get to work!", notes: "no notes"},
        //project 4 Start-Up
        {project_id:4, task_name: "Find Capital", desc: "scrounge the earth for funding", notes: "no notes"},
        {project_id:4, task_name: "Find Great Ideas", desc: "We have plenty. Get to work", notes: "no notes"},
        {project_id:4, task_name: "Chew Glass and Stare Into the Abyss", desc: "Get to work!", notes: "no notes"},
        //project 5 Rock Candy
        {project_id:5, task_name: "Find Capital", desc: "scrounge the earth for funding", notes: "no notes"},
        {project_id:5, task_name: "Find Great Ingredients", desc: "We can find suppliers", notes: "no notes"},
        {project_id:5, task_name: "Chew Glass i mean candy, and stare into the sugar abyss", desc: "Get to work!", notes: "no notes"},
        //project 6 Rock Candy
        {project_id:6, task_name: "Find Capital", desc: "scrounge the earth for funding", notes: "no notes"},
        {project_id:6, task_name: "Find Great Chicken", desc: "We can use suppliers", notes: "no notes"},
        {project_id:6, task_name: "Get chicken suppliers and fry it up", desc: "Get to work!", notes: "no notes"},
      ]);
    });
};
