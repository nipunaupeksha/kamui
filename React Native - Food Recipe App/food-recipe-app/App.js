import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  const recipes = [
    {
      name: 'Pad Thai',
      info: '45 min | 2 servings',
      image: require('./assets/padthai.jpg')
    },
    {
      name: 'Served Scallops with Romesco Sauce',
      info: '20 min | 2 servings',
      image: require('./assets/scallops.jpg')
    },
    {
      name: 'Grilled Chicken with Lemon Butter',
      info: '60 min | 2 servings',
      image: require('./assets/chicken.jpg')
    }
  ];
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <StatusBar barStyle='light-content' />
        <RecipeBackground source={require("./assets/main.jpg")}>
          <SafeAreaView>
            <MenuBar>
              <Back>
                <AntDesign name="arrowleft" size={24} color="#fff" />
                <Text light style={{ marginLeft: 10 }}>Ingredients</Text>
              </Back>
              <AntDesign name="heart" size={24} color="#fff" />
            </MenuBar>
            <MainRecipe>
              <Text light title heavy>Boiled Eggs</Text>
              <Divider />
              <Text light bold>80 calories per 100g</Text>
              <Text light>3g fat | 10g protein | 1g vitamins</Text>
            </MainRecipe>
            <Button>
              <Text light bold small>LEARN MORE</Text>
            </Button>
          </SafeAreaView>
        </RecipeBackground>
        <RecipesContainer>
          <Text dark heavy large>
            Recipes
          </Text>
          <Text dark small>
            18 recipes available
          </Text>
          <Recipes>
            {recipes.map((recipe,index)=>{
              return(
                <Recipe key={index}>
                  <RecipeImage source = {recipe.image}/>
                  <RecipeInfo>
                    <Text dark bold>{recipe.name}</Text>
                    <Text dark small>{recipe.info}</Text>
                  </RecipeInfo>
                  <AntDesign name="hearto" size={18} color="#000"></AntDesign>
                </Recipe>
                )
            })}
          </Recipes>
        </RecipesContainer>
      </Container>
    );
  }
}


const Container = styled.View`
  flex:1;
  background-color:#fff;
`;

const Text = styled.Text`
  ${({ dark, light }) => {
    switch (true) {
      case dark: return `color:#000`;
      case light: return `color:#fff`;
    }
  }};

  ${({ title, large, small }) => {
    switch (true) {
      case title: return `font-size:32px`;
      case large: return `font-size:20px`;
      case small: return `font-size:13px`;
    }
  }}

  ${({ bold, heavy }) => {
    switch (true) {
      case bold: return `font-weight:600`;
      case heavy: return `font-weight:700`;
    }
  }}
`;

const RecipeBackground = styled.ImageBackground`
  width:100%;
`;

const MenuBar = styled.View`
  flex-direction:row;
  justify-content:space-between;
  padding:16px;
`;

const Back = styled.View`
  flex-direction:row;
  align-items:center;
`;

const MainRecipe = styled.View`
  padding:0 32px;
  margin:200px 0 32px 0;
`;

const Divider = styled.View`
  border-bottom-color:#fff;
  border-bottom-width:2px;
  width:150px;
  margin:8px 0;
`;

const Button = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color:rgba(255,255,255,0.3);
  align-self:flex-start;
  padding:0px 18px;
  border-radius: 100px;
`;

const RecipesContainer = styled.View`
  margin-top:-16px;
  padding:32px;
  background-color:#fff;
  border-top-left-radius:24px;
  border-top-right-radius:24px;
`;

const Recipes = styled.View`
  margin-top:16px;
`;

const Recipe =styled.View`
  flex-direction:row;
  align-items:center;
  margin-bottom:16px;
`;

const RecipeImage = styled.Image`
  width:60px;
  height:60px;
  border-radius:8px;
`;

const RecipeInfo = styled.View`
  flex:1;
  margin-left:12px;
`;