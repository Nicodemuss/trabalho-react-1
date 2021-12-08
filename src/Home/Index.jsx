import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { styles } from './Style';
const fundo = { uri: "https://scontent.fgig14-1.fna.fbcdn.net/v/t39.30808-6/264796756_105167162015151_2182052492980783602_n.jpg?_nc_cat=108&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=6ZPIyFDNeoYAX8t1Ptf&_nc_ht=scontent.fgig14-1.fna&oh=92615752cc333f1dbedd0a586467728f&oe=61B27594" }
//const fundo ={uri: "" }



export default function Home() {


  const [produto, setProduto] = React.useState([
    { item: "mequi-alguma-coisa", preco: 9.99, key: 0, fotosrc: "https://scontent.fgig14-1.fna.fbcdn.net/v/t39.30808-6/261371297_105221962009671_378079652444592059_n.jpg?_nc_cat=107&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=aWeHcjx6_BUAX-wpG1_&_nc_oc=AQlB-9XmmSL2Y_MJzjF0FTFKJwc3M2g3aK6UAa1pRA_2XZr8EaFYnwuMRSHnkGc_BtA&_nc_ht=scontent.fgig14-1.fna&oh=45f6ad6f46673f7a0c3c751782e2a596&oe=61B3384D" },
    { item: "mequi-coco", key: 1, preco: 15.99, fotosrc: "https://scontent.fgig14-1.fna.fbcdn.net/v/t39.30808-6/259490872_105222052009662_916571172636177214_n.jpg?_nc_cat=105&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=L2-_F2o15n4AX-OTQvS&_nc_ht=scontent.fgig14-1.fna&oh=cf8752c3646625552628b79f06e3f3d9&oe=61B317C0" },
    { item: "mequi-gato", key: 2, preco: 17.99, fotosrc: "https://scontent.fgig14-1.fna.fbcdn.net/v/t39.30808-6/265289152_105225855342615_814870315476322681_n.jpg?_nc_cat=111&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=RgON8x8aL34AX9MDCOp&_nc_ht=scontent.fgig14-1.fna&oh=79793b65fcc8c78e4586b2730f03b9c3&oe=61B2BB5C" },
    { item: "mequi-rushB", key: 3, preco: 26.99, fotosrc: "https://scontent.fgig14-1.fna.fbcdn.net/v/t39.30808-6/260177849_105222095342991_4814478002037117999_n.jpg?_nc_cat=111&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=FpkH7k4lb-UAX_fMuoU&_nc_ht=scontent.fgig14-1.fna&oh=7bdf2896a62eeec19dbdf8aa1f4a3ea9&oe=61B3156F" },
    // { item: "mequi-região-dos-lagos", preco: 20.99, key: 4, fotosrc: "https://scontent.fgig14-1.fna.fbcdn.net/v/t39.30808-6/261371297_105221962009671_378079652444592059_n.jpg?_nc_cat=107&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=aWeHcjx6_BUAX-wpG1_&_nc_oc=AQlB-9XmmSL2Y_MJzjF0FTFKJwc3M2g3aK6UAa1pRA_2XZr8EaFYnwuMRSHnkGc_BtA&_nc_ht=scontent.fgig14-1.fna&oh=45f6ad6f46673f7a0c3c751782e2a596&oe=61B3384D" },
    // { item: "mequi-RJ", key: 5, preco:' passa tudo menó', fotosrc: "https://scontent.fgig14-1.fna.fbcdn.net/v/t39.30808-6/261371297_105221962009671_378079652444592059_n.jpg?_nc_cat=107&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=aWeHcjx6_BUAX-wpG1_&_nc_oc=AQlB-9XmmSL2Y_MJzjF0FTFKJwc3M2g3aK6UAa1pRA_2XZr8EaFYnwuMRSHnkGc_BtA&_nc_ht=scontent.fgig14-1.fna&oh=45f6ad6f46673f7a0c3c751782e2a596&oe=61B3384D" },
    // { item: "mequi-pexi", key: 6, preco: 17.99, fotosrc: "https://scontent.fgig14-1.fna.fbcdn.net/v/t39.30808-6/261371297_105221962009671_378079652444592059_n.jpg?_nc_cat=107&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=aWeHcjx6_BUAX-wpG1_&_nc_oc=AQlB-9XmmSL2Y_MJzjF0FTFKJwc3M2g3aK6UAa1pRA_2XZr8EaFYnwuMRSHnkGc_BtA&_nc_ht=scontent.fgig14-1.fna&oh=45f6ad6f46673f7a0c3c751782e2a596&oe=61B3384D" },
    // { item: "mequi-de-ontem", key: 7, preco: 1.99, fotosrc: "https://scontent.fgig14-1.fna.fbcdn.net/v/t39.30808-6/261371297_105221962009671_378079652444592059_n.jpg?_nc_cat=107&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=aWeHcjx6_BUAX-wpG1_&_nc_oc=AQlB-9XmmSL2Y_MJzjF0FTFKJwc3M2g3aK6UAa1pRA_2XZr8EaFYnwuMRSHnkGc_BtA&_nc_ht=scontent.fgig14-1.fna&oh=45f6ad6f46673f7a0c3c751782e2a596&oe=61B3384D" },
   { item: "mequi-marty-robins", key: 8, preco: '???' , fotosrc: "https://scontent.fsdu1-1.fna.fbcdn.net/v/t39.30808-6/264365990_106235021908365_3927009833539523150_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=whfOqhrNn4sAX-Vvzk9&_nc_ht=scontent.fsdu1-1.fna&oh=9b7c436fce6450dbcb41cda8362b4720&oe=61B43808" },
  ])

  return (

    <View style={styles.container}>
      <StatusBar />
      <Image
        style={styles.header}
        source={{ uri: "https://scontent.fsdu1-1.fna.fbcdn.net/v/t39.30808-6/261698974_105953525269848_7900565780256167117_n.jpg?_nc_cat=102&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=4pji9qKdhdUAX99u3Xg&_nc_ht=scontent.fsdu1-1.fna&oh=7f9af5fcb958c51b6fb6d82e7235d697&oe=61B44C94" }} />
      <ScrollView>
        {produto.map((item) => {
          return (
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.imagem}
                source={{ uri: item.fotosrc }}
              />
              {/* <Text style={styles.texto}>Clique aqui para pegar o cupom de sua promoção!!!</Text>  */}
              <Text style={styles.item}> {item.item} </Text>
              <Text style={styles.texto}> disponivel</Text>
              <View style={styles.Lado}>
                <View
                  style={styles.button}
                >
                 <Text> R${item.preco} </Text>
                </View>
                <TouchableOpacity
                  style={styles.button2}
                >
                  <Text> Pegar Cupom </Text>
                </TouchableOpacity>
              </View>

              <Text />
              <Text />
            </View>
          )
        })}
      </ScrollView>

    </View>
  );
}
