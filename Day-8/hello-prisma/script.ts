import {prisma} from './lib/prisma';

async function main(){

    await prisma.user.deleteMany();
    await prisma.foodItems.deleteMany();

    const user = await prisma.user.create({
        data:{
            name: "Harry",
            email: "harry@gmail.com",
        }
    })

    const users = await prisma.user.createMany({
        data: [
            {
                name: "alex",
                email: "alex@gmail.com"
            },
            {
                name: "Ankit",
                email: "ankit@gmail.com"
            }

        ]
    });
    console.log("Created User: ", users);

    const data = await prisma.user.findMany({});
    
    const filteredUser = await prisma.user.findUnique({
        where :{email:'harry@gmail.com'},
    })
    console.log(filteredUser)

    const output = await prisma.foodItems.create({
        data:{
            item_name: 'Pizzza',
            price: 100,
            Category: 'Veg'
        }
    })

    const items = await prisma.foodItems.findMany();
    console.log(output, items);

    const multiple_items = await prisma.foodItems.createMany({
        data: [
            {
                item_name: 'Burger',
                price: 50,
                Category: 'Veg'
            },
            {
                item_name: 'Pasta',
                price: 200,
                Category: 'Non-Veg'
            },
            {
                item_name: 'Chicken Momo',
                price: 50,
                Category: 'Non-Veg'
            }
        ]
    });

    await prisma.foodItems.deleteMany({
        where: {
            item_name: "Pizzza",
        }
    })

    const updated = await prisma.foodItems.update({
        where: {id: 4},
        data:{price: 300},
    });

    const deleted_data = await prisma.foodItems.deleteMany({
        where:{Category: 'Veg'}
    })

    const deleteUsingEmail = await prisma.user.delete({
        where:{email:'ankit@gmail.com'}
    });

    const finalOutput = await prisma.user.findMany();
    console.log(finalOutput);
}

main();