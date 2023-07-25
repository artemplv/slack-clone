ApplicationRecord.transaction do 
  puts "Destroying tables..."
  
  User.destroy_all
  Workspace.destroy_all
  WorkspaceUser.destroy_all

  puts "Resetting primary keys..."

  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('workspaces')

  puts "Creating users..."
  
  User.create!(
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com', 
    password: 'password'
  )

  9.times do
    User.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.unique.email,
      password: 'password'
    })
  end

  puts "Creating workspaces..."

  Workspace.create!({
    name: 'Workspace 1',
    owner_id: 1,
  });
  Workspace.create!({
    name: 'Workspace 2',
    owner_id: 1,
  });

  5.times do |i|
    WorkspaceUser.create!({
      workspace_id: 1,
      user_id: i + 1,
    });  
  end

  WorkspaceUser.create!({
    workspace_id: 2,
    user_id: 1,
  });

  puts "Done!"
end
