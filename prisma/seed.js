const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {

    const customerCreated = await prisma.customer.create({
        data: {
            name: "bob",

            contact: {
                create: {
                    phone: "+4482949081750",
                    email: "bob@gmail.com"
                }
            }


        }
    })

    const movieCreated = await prisma.movie.create({
        data: {
            title: "bob goes to school",
            runtimeMins: 60,

            screening: {
                create: {
                    startsAt: new Date(2020, 11, 24, 10, 33, 30, 0),
                }
            }
        }
    })
    console.log('Movie created', movieCreated);

    // Add your code here
    const screenCreated = await prisma.screen.create({
        data: {
            number: 1
        }
    })
    console.log("screen created", screenCreated);

    const screeningCreated = await prisma.screening.create({
        data: {
            startsAt: new Date(2020, 11, 24, 10, 33, 30, 0),
            movie: {
                connect: {
                    id: movieCreated.id
                }
            },
            screen: {
                connect: {
                    id: screenCreated.id
                }
            }
        }
    })

    const ticketCreated = await prisma.ticket.create({
        data: {
            customer: {
                connect: {
                    id: customerCreated.id
                }
            },
            screening: {
                connect: {
                    id: screenCreated.id
                }
            }
        }
    })

    console.log("ticket", ticketCreated);
    console.log("screeningcreated", screeningCreated);
    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
