import React from 'react';
import { StyleSheet } from 'react-native'
import Screen from './../components/Screen';
import * as Yup from 'yup'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'
import AppFormPicker from '../components/forms/AppFormPicker';
import CategoryPickerItem from './../components/CategoryPickerItem';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().optional().label("Description")
})

const categories = [
    { label: 'Furniture', value: 1, backgroundColor: "#fc5c65", icon: "floor-lamp" },
    { label: 'Car', value: 2, backgroundColor: "#fd9644", icon: "car" },
    { label: 'Cameras', value: 3, backgroundColor: "#fed330", icon: "camera" },
    { label: 'Games', value: 4, backgroundColor: "#26de81", icon: "cards" },
    { label: 'Clothing', value: 5, backgroundColor: "#2bcbba", icon: "shoe-heel" },
    { label: 'Sports', value: 6, backgroundColor: "#45aaf2", icon: "basketball" },
    { label: 'Movies & Music', value: 7, backgroundColor: "#4b7bec", icon: "headphones" },
]


function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ title: "", price: "", category: null, description: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    multiline
                    numberOfLines={3}
                    name="description"
                    placeholder="Description"
                />

                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }

})

export default ListingEditScreen;