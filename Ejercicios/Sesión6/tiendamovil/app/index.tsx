import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

interface IProductItem {
    category: String,
    title: String,
    image: String,
    id: Number
}

export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(response => {
                console.log('resultado', response)
                let responses = response.concat(response, response)
                // Pasar los datos al estado
                setProducts(responses)
            })
            .catch((response) => {
                setProducts([])
                console.error("La llamada a la API falló", response);
            })

        // [] se ejecuta cuando el componente se monta
    }, [])
    // https://fakestoreapi.com/products

    return (<View>
        <Text>Home</Text>

        {/* category, description, id, image, price, rating, title */}
        {products.map((producto: IProductItem) => <View key={producto.id}>
            <Text>{producto.title}</Text>
            <Image source={{ uri: producto.image }} />
        </View>)}
    </View>)
}