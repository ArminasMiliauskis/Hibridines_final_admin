import { db } from '../firebase';

async function fetchMessageData() {
    let messageData = [];
    const messages = await db
        .collection('messages')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                let item = {
                    id: documentSnapshot.id,
                    fName: documentSnapshot.data().fName,
                    lName: documentSnapshot.data().lName,
                    phone: documentSnapshot.data().phone,
                    email: documentSnapshot.data().email,
                    other: documentSnapshot.data().other,
                    car: {
                        id: documentSnapshot.data().car.id,
                        brand: documentSnapshot.data().car.brand,
                        model: documentSnapshot.data().car.model,
                        year: documentSnapshot.data().car.year
                    }
                }
                messageData.push(item);
            });
        });
    return messageData;
}

export { fetchMessageData };