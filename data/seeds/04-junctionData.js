

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('junction').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('junction').insert([
        //marketing
        {task_id:1, resource_id:1},
        {task_id:2, resource_id:2},
        {task_id:3, resource_id:3},
        //software
        {task_id:4, resource_id:2},
        {task_id:5, resource_id:3},
        {task_id:6, resource_id:4},
        //law
        {task_id:7, resource_id:4},
        {task_id:8, resource_id:5},
        {task_id:9, resource_id:6},
        //start-up
        {task_id:10, resource_id:3},
        {task_id:11, resource_id:10},
        {task_id:12, resource_id:6},
        //rock candy
        {task_id:13, resource_id:10},
        {task_id:14, resource_id:10},
        {task_id:15, resource_id:10},
        //chicken store
        {task_id:16, resource_id:10},
        {task_id:17, resource_id:6},
        {task_id:18, resource_id:1}
      ]);
    });
};