import { db } from '../firebase';

async function fetchData() {
    let carData = [];
    const cars = await db
        .collection('cars')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                let item = {
                    id: documentSnapshot.id,
                    brand: documentSnapshot.data().brand,
                    model: documentSnapshot.data().model,
                    year: documentSnapshot.data().year,
                    image: documentSnapshot.data().image,
                }
                carData.push(item);
            });
        });
    return carData;
}

function addCar(props) {
    db
        .collection('cars')
        .add(
            {
                brand: props.brand,
                model: props.model,
                year: props.year,
                image: props.image
            }
        )
        .then(()=>{console.log(`Car added!`)})
}

function editCar(props) {
    db
        .collection('cars')
        .doc(props.id)
        .update(
            {
                brand: props.brand,
                model: props.model,
                year: props.year,
                image: props.image
            }
        )
        .then(()=>{console.log(`Car edited!`)})
}

function deleteCar(id) {
    db
        .collection('cars')
        .doc(id)
        .delete()
        .then(()=>{console.log(`Car deleted!`)})
}

export { fetchData, addCar, deleteCar, editCar };