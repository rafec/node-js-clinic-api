import UsersRepository from "../../models/users/Users.js";

async function findAll(request, response) {
    try {
        const users = await UsersRepository.findAll();
        response.json(users);
    } catch (error) {
        console.log('Error retrieving all users records:', error);
    };
};

async function findUser(request, response) {
    try {
        const user = await UsersRepository.findByPk(request.params.id);
        response.json(user);
    } catch (error) {
        console.log(`Error retrieving user records with id ${request.params.id}`);
    };
};

async function addUser(request, response) {
    try {
        const userCreated = await UsersRepository.create({
            name: request.body.name,
            email: request.body.email,
            type: request.body.type,
            password: request.body.password
        });

        response.json(userCreated);
    } catch (error) {
        console.log('Error creating user record in database!');
    };
};

async function updateUser(request, response) {
    try {
        await UsersRepository.update({
            name: request.body.name,
            type: request.body.type,
            password: request.body.password
        },
            {
                where: {
                    id: request.params.id
                }
            }
        );

        const updatedUser = await UsersRepository.findByPk(request.params.id);
        response.json(updatedUser);
    } catch (error) {
        console.log(`Error updating user record with id: ${request.params.id}`, error);
    };
};

async function deleteUser(request, response) {
    try {
        await UsersRepository.destroy({
            where: {
                id: request.params.id
            }
        });

        const users = await UsersRepository.findAll();
        response.json(users);
    } catch (error) {
        console.log(`Error deleting user record with id: ${request.params.id}`, error);
    };
};

export default { findAll, addUser, findUser, updateUser, deleteUser };