import styled from "styled-components/native";

export const colors = [];

export const Main = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: red;
  font-size: 16px;
  font-weight: bold;
`;

export const MainView = styled.SafeAreaView`
  flex: 1;
  margin-top: 0;
  background-color: #fff;
`;

export const LoginTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;
export const LoginButton = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background-color: #f49f1c;
  padding-top: 16px;
  align-items: center;
  margin-top: 25px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const SocialLoginView = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  bottom: 40px;
  width: 80%;
  margin: auto;
`;

export const FooterView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LinkText = styled.Text`
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-decoration: underline;
`;
export const OrContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const OrLine = styled.View`
  flex: 1;
  background-color: #7b7a7a;
  height: 1px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ResendButtonView = styled.Text`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const OtpContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 5px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const MainHomeView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  background-color: #fff;
  height: 100px;
  align-items: center;
  justify-content: space-between;
`;

export const HomeLogo = styled.View`
  flex: 0.2;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
`;

export const LocationView = styled.View`
  flex: 0.5;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

export const SearchView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #fff4e2;
  padding: 15px 0;
  margin: 0 20px;
  border-radius: 5px;
`;
