import { db } from '@/firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore/lite'

export default {
    async getChecklist() {
        const checklistCollection = await getDocs(collection(db, 'checklist'))
        const rawChecklist = checklistCollection.docs.map(doc => doc.data())
        
        rawChecklist.forEach(item => {
            item.checklist = rawChecklist.filter(i => i.parentId === item.id)
        })

        return rawChecklist.filter(i => !i.parentId)
    },

    async initializeChecklist() {
        const checklistCollection = collection(db, 'checklist');
        const creationPromises = this.checklist.map(c => addDoc(checklistCollection, c))
        await Promise.all(creationPromises)
    },

    checklist: [
        {
          "id": 1,
          "header": "Checklist - Comida"
        },
        {
          "id": 2,
          "parentId": 1,
          "header": "Cocina"
        },
        {
          "id": 3,
          "parentId": 2,
          "label": "Preparar Cafe",
          "checked": false
        },
        {
          "id": 4,
          "parentId": 2,
          "label": "Preparar Jugo",
          "checked": false
        },
        {
          "id": 5,
          "parentId": 2,
          "label": "Cortar PAN",
          "checked": false
        },
        {
          "id": 6,
          "parentId": 2,
          "label": "Contabilizar",
          "checked": false
        },
        {
          "id": 7,
          "parentId": 6,
          "label": "Sandwiches",
          "checked": false,
          "input": "",
          "inputType": "number",
          "inputLabel": "each"
        },
        {
          "id": 8,
          "parentId": 6,
          "label": "Cafe",
          "checked": false,
          "input": "",
          "inputType": "number",
          "inputLabel": "oz"
        },
        {
          "id": 9,
          "parentId": 6,
          "label": "Jugo",
          "checked": false,
          "input": "",
          "inputType": "number",
          "inputLabel": "oz"
        },
        {
          "id": 10,
          "parentId": 6,
          "label": "Sopa",
          "checked": false,
          "input": "",
          "inputType": "number",
          "inputLabel": "oz"
        },
        {
          "id": 11,
          "parentId": 2,
          "label": "Subir a la troca",
          "checked": false
        },
        {
          "id": 12,
          "parentId": 11,
          "label": "Cafe",
          "checked": false
        },
        {
          "id": 13,
          "parentId": 11,
          "label": "Jugo",
          "checked": false
        },
        {
          "id": 14,
          "parentId": 11,
          "label": "Agua",
          "checked": false
        },
        {
          "id": 15,
          "parentId": 11,
          "label": "Sandwiches",
          "checked": false
        },
        {
          "id": 16,
          "parentId": 11,
          "label": "Dulces/Meriendas",
          "checked": false
        },
        {
          "id": 17,
          "parentId": 11,
          "label": "To-Go bags",
          "checked": false
        },
        {
          "id": 18,
          "parentId": 11,
          "label": "Vaso cafe con tapa",
          "checked": false
        },
        {
          "id": 19,
          "parentId": 11,
          "label": "Vaso plastico",
          "checked": false
        },
        {
          "id": 20,
          "parentId": 11,
          "label": "Cubiertos (cuchara)",
          "checked": false
        },
        {
          "id": 21,
          "parentId": 11,
          "label": "Envase sopa con tapas",
          "checked": false
        },
        {
          "id": 22,
          "parentId": 11,
          "label": "Servilletas",
          "checked": false
        },
        {
          "id": 23,
          "parentId": 1,
          "header": "Miscelaneos"
        },
        {
          "id": 24,
          "parentId": 23,
          "label": "Kits familia Algarin",
          "checked": false
        },
        {
          "id": 25,
          "parentId": 24,
          "label": "Contar Kits",
          "checked": false,
          "input": "",
          "inputType": "number",
          "inputLabel": "each"
        },
        {
          "id": 26,
          "parentId": 24,
          "label": "Llevar 60 Toallas sanitarias para feminas",
          "checked": false
        },
        {
          "id": 27,
          "parentId": 24,
          "label": "Añadir capa y sabana desechable a cada bolsa",
          "checked": false
        },
        {
          "id": 28,
          "parentId": 24,
          "label": "Colocar dulce o merienda sellada a cada bolsa",
          "checked": false
        },
        {
          "id": 29,
          "header": "Checklist - Medicina"
        },
        {
          "id": 30,
          "parentId": 29,
          "label": "Kit chequeo Medico",
          "checked": false
        },
        {
          "id": 31,
          "parentId": 30,
          "label": "Estetoscopio",
          "checked": false
        },
        {
          "id": 32,
          "parentId": 30,
          "label": "Esfigmomanómetro",
          "checked": false
        },
        {
          "id": 33,
          "parentId": 30,
          "label": "Termometro",
          "checked": false
        },
        {
          "id": 34,
          "parentId": 30,
          "label": "Otoscopio con tips desechables",
          "checked": false
        },
        {
          "id": 35,
          "parentId": 30,
          "label": "Agua limpia x2",
          "checked": false
        },
        {
          "id": 36,
          "parentId": 30,
          "label": "Agua con jabón x2",
          "checked": false
        },
        {
          "id": 37,
          "parentId": 29,
          "label": "Preparar 60 paquetes de:",
          "checked": false
        },
        {
          "id": 38,
          "parentId": 37,
          "label": "10 Analgésicos (needs 60 bags)",
          "checked": false
        },
        {
          "id": 39,
          "parentId": 37,
          "label": "30 vitaminas (needs 60 bags)",
          "checked": false
        },
        {
          "id": 40,
          "parentId": 29,
          "label": "Preparar 10 kits de autocuración con:",
          "checked": false
        },
        {
          "id": 41,
          "parentId": 40,
          "label": "10 gasas 4x4 no estériles",
          "checked": false
        },
        {
          "id": 42,
          "parentId": 40,
          "label": "3 rollos gasas",
          "checked": false
        },
        {
          "id": 43,
          "parentId": 40,
          "label": "1 bolsa 1×3 inch de Triple Antibiotico",
          "checked": false
        },
        {
          "id": 44,
          "parentId": 40,
          "label": "1 bolsa 1×3 inch de Silvadene",
          "checked": false
        },
        {
          "id": 45,
          "parentId": 40,
          "label": "3 pares de guantes",
          "checked": false
        },
        {
          "id": 46,
          "parentId": 40,
          "label": "3 vendaje elásticos de 1 inch",
          "checked": false
        },
        {
          "id": 47,
          "parentId": 40,
          "label": "1 botella Agua pequeña",
          "checked": false
        },
        {
          "id": 48,
          "parentId": 29,
          "label": "Verificar Kit intervención",
          "checked": false
        },
        {
          "id": 49,
          "parentId": 48,
          "label": "1 caja guantes Medium",
          "checked": false
        },
        {
          "id": 50,
          "parentId": 48,
          "label": "1 caja guantes Large",
          "checked": false
        },
        {
          "id": 51,
          "parentId": 48,
          "label": "1 caja guantes XLarge",
          "checked": false
        },
        {
          "id": 52,
          "parentId": 48,
          "label": "2 paquete gasas 4×4",
          "checked": false
        },
        {
          "id": 53,
          "parentId": 48,
          "label": "Tijeras médicas",
          "checked": false
        },
        {
          "id": 54,
          "parentId": 48,
          "label": "Pinza",
          "checked": false
        },
        {
          "id": 55,
          "parentId": 48,
          "label": "1 pote Silvadene",
          "checked": false
        },
        {
          "id": 56,
          "parentId": 48,
          "label": "2 Lidocaína",
          "checked": false
        },
        {
          "id": 57,
          "parentId": 48,
          "label": "Triple Antibiotico",
          "checked": false
        },
        {
          "id": 58,
          "parentId": 48,
          "label": "Crema Antihongo",
          "checked": false
        },
        {
          "id": 59,
          "parentId": 48,
          "label": "2 paquete gasas 2×2",
          "checked": false
        },
        {
          "id": 60,
          "parentId": 48,
          "label": "Isopos gruesos",
          "checked": false
        },
        {
          "id": 61,
          "parentId": 48,
          "label": "Jeringuilla o botella irrigar",
          "checked": false
        },
        {
          "id": 62,
          "parentId": 48,
          "label": "Riñonera de Metal",
          "checked": false
        },
        {
          "id": 63,
          "parentId": 48,
          "label": "Crema humectante",
          "checked": false
        },
        {
          "id": 64,
          "parentId": 48,
          "label": "Rollos gasa ×25",
          "checked": false
        },
        {
          "id": 65,
          "parentId": 48,
          "label": "1 rollo Stockinets",
          "checked": false
        },
        {
          "id": 66,
          "parentId": 48,
          "label": "2 cajas mascarillas",
          "checked": false
        },
        {
          "id": 67,
          "header": "Checklist - Ropa"
        },
        {
          "id": 68,
          "parentId": 67,
          "header": "Mujeres"
        },
        {
          "id": 69,
          "parentId": 68,
          "label": "Ropa interior (sin límite)",
          "checked": false
        },
        {
          "id": 70,
          "parentId": 68,
          "label": "TShirts",
          "checked": false
        },
        {
          "id": 71,
          "parentId": 70,
          "label": "10 small",
          "checked": false
        },
        {
          "id": 72,
          "parentId": 70,
          "label": "10 Medium",
          "checked": false
        },
        {
          "id": 73,
          "parentId": 68,
          "label": "Pantalones",
          "checked": false
        },
        {
          "id": 74,
          "parentId": 73,
          "label": "5 small",
          "checked": false
        },
        {
          "id": 75,
          "parentId": 73,
          "label": "5 Medium",
          "checked": false
        },
        {
          "id": 76,
          "parentId": 68,
          "label": "Zapatos 10 pares",
          "checked": false
        },
        {
          "id": 77,
          "parentId": 68,
          "label": "Medias (sin límite) para ambos grupos",
          "checked": false
        },
        {
          "id": 78,
          "parentId": 67,
          "header": "Hombres"
        },
        {
          "id": 79,
          "parentId": 78,
          "label": "Ropa interior (sin límite)",
          "checked": false
        },
        {
          "id": 80,
          "parentId": 78,
          "label": "TShirts",
          "checked": false
        },
        {
          "id": 81,
          "parentId": 80,
          "label": "10 small",
          "checked": false
        },
        {
          "id": 82,
          "parentId": 80,
          "label": "10 Medium",
          "checked": false
        },
        {
          "id": 83,
          "parentId": 78,
          "label": "Pantalones",
          "checked": false
        },
        {
          "id": 84,
          "parentId": 83,
          "label": "5 small",
          "checked": false
        },
        {
          "id": 85,
          "parentId": 83,
          "label": "5 Medium",
          "checked": false
        },
        {
          "id": 86,
          "parentId": 78,
          "label": "Zapatos 10 pares",
          "checked": false
        }
      ]
      
}