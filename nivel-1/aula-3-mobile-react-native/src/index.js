import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import api from "./services/api";
// Não possuem valor semântico(significado)
// Não possuem estilização própria
// Todos componentes possuem por padrão "display: flex"

// View pode ser uma div, footer, header, main, aside, section
// Text pode ser p, span, strong, h1, h2, h3

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get("users")
      .then((result) => {
        console.log("App -> result", result);
        setUsers(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddUser = async () => {
    const response = await api.post("users", { name: "Novo user no mobileaaaaaa" });

    const createdUser = response.data;

    setUsers([...users, createdUser]);
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#424874" />

      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.container}
          data={users}
          keyExtractor={(user) => user}
          renderItem={({ item: user }) => (
            <Text style={styles.name}>{user}</Text>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddUser}
        >
          <Text style={styles.buttonText}>Adicionar Usuário</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424874",
  },

  name: {
    color: "#f4eeff",
    fontSize: 20,
  },

  button: {
    backgroundColor: "#a6b1e1",
    margin: 20,
    height: 50,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
